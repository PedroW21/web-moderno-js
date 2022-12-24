import Main from "../components/templates/Main/Main";
import {
  toWatchUrl,
  putOnDb,
  saveOnDb,
  removeOnDb,
} from "../components/Requests/Requests";
import Form from "../components/templates/Form/Form";

import { useState, useEffect } from "react";
import axios from "axios";

const headerProps = {
  icon: "film",
  title: "Filmes",
  subtitle:
    "CRUD de filmes com separação das tabelas de filmes vistos e filmes para ver",
};

const initialState = {
  movie: {
    name: "",
    type: "movie",
    streaming: "",
    duration: "",
    selectFinished: false,
  },
  list: [],
};

const fields = {
  name: ["name", "streaming", "duration", "selectFinished"],
  label: ["Nome", "Streaming", "Duração", "Terminou?"],
  placeholders: ["Digite o nome do filme", "Qual plataforma esta disponivel?", "Quantas horas de duração tem o filme? (HH:MM)", ""]
};

const formConfig = {
  qtdFieldPerRow: 2,
  qtdRows: 3,
};

const Filmes = (props) => {

  const [movie, setMovie] = useState({ ...initialState });

  //load table when ready
  useEffect(() => {
    axios.get(toWatchUrl).then((res) => {
      setMovie({ movie: { ...initialState.movie }, list: res.data });
    });
  }, []);

  const updateFields = (event) => {

    let field = { ...movie.movie };

    field[event.target.name] = event.target.value;

    setMovie({ movie: field, list: movie.list });
  };

  const save = () => {
    if (movie.movie.id) {
      const movieToSave = { ...movie.movie };
      putOnDb(movieToSave);

      const list = movie.list.filter((movie) => movie.id !== movieToSave.id);
      list.push(movieToSave);

      setMovie({ movie: { ...initialState.movie }, list });
    } else {
      saveOnDb(movie.movie);

      const list = movie.list;
      list.push(movie.movie);

      setMovie({ movie: { ...initialState.movie }, list });
    }
  };

  const cancel = () => {
    setMovie({ movie: initialState.movie, list: movie.list });
  };

  const edit = (movieToEdit) => {
    setMovie({ movie: movieToEdit, list: movie.list });
    console.log(movie.movie);
  };

  const deleteData = (movieToDelete) => {
    let list = [...movie.list];
    list = list.filter((movie) => movie.id !== movieToDelete.id);

    removeOnDb(movieToDelete.id);

    setMovie({ movie: initialState.movie, list });
  };

  return (
    <Main {...headerProps}>
      <Form
        fields={fields}
        formConfig={formConfig}
        save={save}
        cancel={cancel}
        edit={edit}
        deleteData={deleteData}
        data={movie}
        type={"movie"}
        updateFields={updateFields}
      />
    </Main>
  );
};

export default Filmes;
