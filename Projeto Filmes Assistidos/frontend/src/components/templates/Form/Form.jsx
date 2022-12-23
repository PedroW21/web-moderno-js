const Form = (props) => {
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
              value={props.animeToAdd.name}
              onChange={(e) => props.updateField(e)}
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
              value={props.animeToAdd.streaming}
              onChange={(e) => props.updateField(e)}
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
              value={props.animeToAdd.seasons}
              onChange={(e) => props.updateField(e)}
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
              value={props.animeToAdd.movies}
              onChange={(e) => props.updateField(e)}
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
              onChange={(e) => props.editSeason(e)}
            >
              {props.options.map((elem) => (
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
              name={`season${props.numSeason}`}
              value={props.animeToAdd.episodes[`season${props.numSeason}`]}
              onChange={(e) => props.updateFields(e)}
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
              value={props.animeToAdd.finished}
              onChange={(e) => props.updateField(e)}
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
            onClick={(e) => props.save(props.animeToAdd)}
          >
            Salvar
          </button>
          <button className="btn btn-secondary m-2" onClick={e => props.cancel()}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;