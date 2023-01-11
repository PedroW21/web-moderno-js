import Main from "../components/templates/Main/Main";
import {
  toWatchUrl,
  putOnDb,
  saveOnDb,
  removeOnDb,
} from "../components/Requests/Requests";
import Form from "../components/templates/Form/Form";
import Table from "../components/templates/Table/Table";

import { useState, useEffect } from "react";
import axios from "axios";

const headerProps = {
  icon: "diamond",
  title: "Séries",
  subtitle:
    "CRUD de séries com separação das tabelas de séries vistos e séries para ver",
};

const initialState = {
  series: {
    name: "",
    type: "series",
    streaming: "",
    seasons: "",
    episodes: "",
    selectFinished: false,
  },
  list: [],
};

const fields = {
  name: ["name", "streaming", "seasons", "episodes", "selectFinished"],
  label: [
    "Nome da Série",
    "Onde assitir?",
    "Quantas temporadas?",
    "Quantos episodios?",
    "Terminou?",
  ],
  placeholders: [
    "Digite o nome da serie",
    "Qual plataforma esta disponivel?",
    "Digite quantas temporadas tem atualmente",
    "Quantos episodios tem atualmente? (separe por virgula)",
    "",
  ],
};

const formConfig = {
  qtdFieldPerRow: 2,
  qtdRows: 3,
};

const Series = (props) => {
  const [series, setSeries] = useState({ ...initialState });

  //load table when ready
  useEffect(() => {
    axios.get(toWatchUrl).then((res) => {
      let list = res.data;
      list = list.filter((serie) => serie.type === "series");
      setSeries({ series: { ...initialState.series }, list });
    });
  }, []);

  const updateFields = (event) => {
    let field = { ...series.series };

    field[event.target.name] = event.target.value;

    setSeries({ series: field, list: series.list });
  };

  const save = () => {
    if (series.series.id) {
      const seriesToSave = { ...series.series };
      putOnDb(seriesToSave);

      const list = series.list.filter(
        (series) => series.id !== seriesToSave.id
      );
      list.push(seriesToSave);

      setSeries({ series: { ...initialState.series }, list });
    } else {
      saveOnDb(
        series.series,
        series.list,
        setSeries,
        initialState,
        series,
        "series"
      );
    }
  };

  const cancel = () => {
    setSeries({ series: initialState.series, list: series.list });
  };

  const edit = (seriesToEdit) => {
    setSeries({ series: seriesToEdit, list: series.list });
  };

  const deleteData = (seriesToDelete) => {
    let list = [...series.list];
    list = list.filter((series) => series.id !== seriesToDelete.id);

    removeOnDb(seriesToDelete.id);

    setSeries({ series: initialState.series, list });
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
        data={series}
        type={"series"}
        updateFields={updateFields}
      />

      <Table
        label={fields.label}
        data={series.list}
        editAction={edit}
        deleteAction={deleteData}
      />
    </Main>
  );
};

export default Series;
