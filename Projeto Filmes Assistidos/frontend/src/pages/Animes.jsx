import Main from "../components/templates/Main/Main";
import {
  saveOnDbAnime,
  putOnDb,
  toWatchUrl,
  removeOnDb,
} from "../components/Requests/Requests";
import AnimeTable from "../components/templates/Table/AnimeTable";

import { useState, useEffect } from "react";
import axios from "axios";

const headerProps = {
  icon: "tv",
  title: "Animes",
  subtitle:
    "CRUD de animes com separação das tabelas de animes vistos e animes para ver",
};

const initialState = {
  animeToAdd: {
    name: "",
    type: "anime",
    streaming: "",
    movies: "",
    seasons: "",
    episodes: {
      season1: "",
    },
    finished: false,
  },
  list: [],
};

const Animes = (props) => {
  const [anime, setAnime] = useState({ ...initialState });
  const [options, setOptions] = useState([]);
  const [numSeason, setNumSeason] = useState(1);

  //load table when ready
  useEffect(() => {
    axios.get(toWatchUrl).then((res) => {
      let list = res.data;
      list = list.filter(anime => anime.type === 'anime')
      setAnime({ animeToAdd: { ...initialState.animeToAdd }, list });
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
      saveOnDbAnime(anime.animeToAdd);

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

  const renderForm = () => {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome do Anime</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={anime.animeToAdd.name}
                onChange={(e) => updateFields(e)}
                placeholder="Digite o nome do Anime"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Onde assistir?</label>
              <input
                type="text"
                className="form-control"
                name="streaming"
                value={anime.animeToAdd.streaming}
                onChange={(e) => updateFields(e)}
                placeholder="Digite a plataforma para assistir o anime"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Quantas temporadas?</label>
              <input
                type="text"
                className="form-control"
                name="seasons"
                value={anime.animeToAdd.seasons}
                onChange={(e) => updateFields(e)}
                placeholder="Digite quantas temporadas teve o anime"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Quantos filmes?</label>
              <input
                type="text"
                className="form-control"
                name="movies"
                value={anime.animeToAdd.movies}
                onChange={(e) => updateFields(e)}
                placeholder="Digite a plataforma para assistir o anime"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="episodesPerSeason">Temporada</label>
              <select
                className="form-control"
                id="episodesPerSeason"
                onChange={(e) => editingSeason(e)}
              >
                {options.map((elem) => (
                  <option key={elem} value={elem}>
                    {elem}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Quantos episodios?</label>
              <input
                type="text"
                className="form-control"
                name={`season${numSeason}`}
                value={anime.animeToAdd.episodes[`season${numSeason}`]}
                onChange={(e) => updateFields(e)}
                placeholder="Digite a plataforma para assistir o anime"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="finished">Terminou?</label>
              <select
                name="finished"
                id="finished"
                className="form-control"
                value={anime.animeToAdd.finished}
                onChange={(e) => updateFields(e)}
              >
                <option value="false">Não</option>
                <option value="true">Sim</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-end mt-2">
            <button
              className="btn btn-primary m-2"
              onClick={(e) => save(anime.animeToAdd)}
            >
              Salvar
            </button>
            <button className="btn btn-secondary m-2" onClick={cancel}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Main {...headerProps}>
      {renderForm()}
      <AnimeTable props={anime.list} edit={editAnime} delete={deleteAnime} />
    </Main>
  );
};

export default Animes;
