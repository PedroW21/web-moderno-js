import { useState, useEffect } from "react";
import axios from "axios";
import Main from "../template/Main/Main";

const headerProps = {
  icon: "tv",
  title: "Animes para ver",
  subtitle: "Cadastro pessoal de animes que tenho que ver",
};

const baseUrl = "http://localhost:3001/animesToWatch";

const initialState = {
  animeToWatch: {
    name: "",
    streaming: "",
    quantitySeasons: "",
    quantityEps: "",
    movies: "",
    hasFinished: "",
  },
  list: [],
};

const AnimesCrud = (props) => {
  const [anime, setAnimeToWatch] = useState({ ...initialState });

  useEffect(() => {
    axios(baseUrl).then((res) => {
      setAnimeToWatch({
        animeToWatch: initialState.animeToWatch,
        list: res.data,
      });
    });
  }, []);

  const clear = () => {
    setAnimeToWatch({ animeToWatch: initialState.animeToWatch, list: anime.list });
  };

  const save = () => {
    const method = anime.animeToWatch.id ? "put" : "post";

    const url = anime.animeToWatch.id
      ? `${baseUrl}/${anime.animeToWatch.id}`
      : baseUrl;

    axios[method](url, anime.animeToWatch).then((res) => {
      const list = getUpdatedList(res.data);

      setAnimeToWatch({ animeToWatch: initialState.animeToWatch, list });
    });
  };

  const getUpdatedList = (addAnime, add = true) => {
    const list = anime.list.filter(
      (animeFromList) => animeFromList.id !== addAnime.id
    );

    if(add) list.unshift(addAnime);

    return list;
  };

  const updateFields = (event) => {
    const field = { ...anime.animeToWatch }; // vamos alterar o conteudo de usuario, boa pratica alterar o clone

    field[event.target.name] = event.target.value;
    setAnimeToWatch({ animeToWatch: field, list: anime.list });
    console.log(anime);
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
                value={anime.animeToWatch.name}
                onChange={(event) => updateFields(event)}
                placeholder="Digite o nome do anime"
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
                value={anime.animeToWatch.streaming}
                onChange={(e) => updateFields(e)}
                placeholder="Digite o streaming onde está disponível"
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
                name="quantitySeasons"
                value={anime.animeToWatch.quantitySeasons}
                onChange={(e) => updateFields(e)}
                placeholder="Digite quantas temporadas tem o anime"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Quantos episodios?</label>
              <input
                type="text"
                className="form-control"
                name="quantityEps"
                value={anime.animeToWatch.quantityEps}
                onChange={(e) => updateFields(e)}
                placeholder='Digite quantos episodios (se tiver mais de uma tempoarada, separe por ",")'
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Tem quantos filme?</label>
              <input
                type="text"
                className="form-control"
                name="movies"
                value={anime.animeToWatch.movies}
                onChange={(e) => updateFields(e)}
                placeholder="Digite quantos filmes já fizeram"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Ele foi finalizado?</label>
              <input
                type="text"
                className="form-control"
                name="hasFinished"
                value={anime.animeToWatch.hasFinished}
                onChange={e => updateFields(e)}
                placeholder='Sim ou Não'
              >
              </input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end mt-3">
            <button className="btn btn-primary" onClick={save}>
              Salvar
            </button>

            <button className="btn btn-secondary margin" onClick={clear}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Streaming</th>
            <th>Qtd Temporadas</th>
            <th>Qtd Eps</th>
            <th>Filmes</th>
            <th>Finalizado?</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
      </table>
    );
  };

  const renderRows = () => {

    return anime.list.map(animeToRender => {
      return (
        <tr key={animeToRender.id}>
          <td>{animeToRender.name}</td>
          <td>{animeToRender.streaming}</td>
          <td className="text-center">{animeToRender.quantitySeasons}</td>
          <td className="text-center">{animeToRender.quantityEps}</td>
          <td className="text-center">{animeToRender.movies}</td>
          <td className="text-center">{animeToRender.hasFinished}</td>
          <td>
            <button className="btn btn-warning" onClick={e => load(animeToRender)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger margin" onClick={e => remove(animeToRender)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  const load = (animeToWatch) => {
    setAnimeToWatch({ animeToWatch, list: anime.list })
  };

  const remove = (animeToRemove) => {
    axios.delete(`${baseUrl}/${animeToRemove.id}`).then((res) => {
      const list = getUpdatedList(animeToRemove, false);

      setAnimeToWatch({ animeToWatch: anime.animeToWatch, list });
    });
  };

  return (
    <Main {...headerProps}>
      {renderForm()}
      {renderTable()}
    </Main>
  );
};

export default AnimesCrud;
