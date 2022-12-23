import Main from "../templates/Main/Main";
import { toWatchUrl, putOnDb, saveOnDb, removeOnDb } from "../Requests/Requests";
import Form from "../templates/Form/Form";

import { useState, useEffect } from 'react';
import axios from 'axios';

const headerProps = {
  icon: "diamond",
  title: "Séries",
  subtitle:
    "CRUD de séries com separação das tabelas de séries vistos e séries para ver",
};

const initialState = {
    animeToAdd: {
      name: "",
      type: "series",
      streaming: "",
      seasons: "",
      episodes: {
        season1: "",
      },
      finished: false,
    },
    list: [],
  };

  const fields = {
    name: ["name", "streaming", "seasons", "episodes", "finished"],
    label: ["Nome", "Streaming", "Temporadas", "Episodios", "Terminou?"]
  }

  const formConfig = {
    qtdFieldPerRow: 2,
    qtdRows: 3
  }

const Filmes = (props) => {
  const [anime, setAnime] = useState({ ...initialState });
  const [options, setOptions] = useState([]);
  const [numSeason, setNumSeason] = useState(1);

  //load table when ready
  useEffect(() => {
    axios.get(toWatchUrl).then((res) => {
      setAnime({ animeToAdd: { ...initialState.animeToAdd }, list: res.data });
    });
  }, []);

  //render field "season" to insert eps per season
  useEffect(() => {
    const numberOfSeasons = parseInt(anime.animeToAdd.seasons);

    let n = 1;
    const options = [];

    while (n <= numberOfSeasons) {
      options.push(n);
      n++;
    }

    setOptions(options);

    // update qtd eps seasons
  }, [anime.animeToAdd.seasons]);

  const updateFields = (event) => {
    let field = { ...anime.animeToAdd };
    console.log(anime.animeToAdd);

    if (event.target.name === `season${numSeason}`) {
      field.episodes[event.target.name] = event.target.value;
    } else {
      field[event.target.name] = event.target.value;
    }

    setAnime({ animeToAdd: field, list: anime.list });
  };

  const editingSeason = (event) => {
    setNumSeason(event.target.value);

    const field = { ...anime.animeToAdd };
    field.episodes[`season${event.target.value}`] =
      anime.animeToAdd.episodes[`season${event.target.value}`] || "";
    console.log(field.episodes);
    setAnime({ animeToAdd: field, list: anime.list });
  };

  const save = () => {
    if (anime.animeToAdd.id) {
      const animeToSave = { ...anime.animeToAdd };
      putOnDb(animeToSave);

      const list = anime.list.filter((anime) => anime.id !== animeToSave.id);
      list.push(animeToSave);

      setAnime({ animeToAdd: { ...initialState.animeToAdd }, list });
    } else {
      saveOnDb(anime.animeToAdd);

      const list = anime.list;
      list.push(anime.animeToAdd);

      setAnime({ animeToAdd: { ...initialState.animeToAdd }, list });
    }
  };

  const cancel = () => {
    setAnime({ animeToAdd: initialState.animeToAdd, list: anime.list });
  };

  const editAnime = (animeToEdit) => {
    setAnime({ animeToAdd: animeToEdit, list: anime.list });
    console.log(anime.animeToAdd);
  };

  const deleteAnime = (animeToDelete) => {
    let list = [...anime.list];
    list = list.filter((anime) => anime.id !== animeToDelete.id);

    removeOnDb(animeToDelete.id);

    setAnime({ animeToAdd: initialState.animeToAdd, list });
  };

  return (
    <Main {...headerProps}>
        <Form fields = {fields} formConfig= {formConfig}/>
    </Main>
  )
};

export default Filmes;
