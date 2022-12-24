const AnimeTable = (props) => 
{
  const renderRows = (obj, editAction, deleteAction) => 
  {
    
    return obj.map((anime, idx) => {
      return (
        <tr key={idx}>
          <td>{anime.name}</td>
          <td>{anime.streaming}</td>
          <td>{anime.movies}</td>
          <td>{anime.seasons}</td>
          <td>
            <ul className="list-unstyled">
                {renderEps(anime.episodes)}
            </ul>
          </td>
          <td>{anime.finished ? "Sim" : "Não"}</td>
          <td>
            <button
              className="btn btn-warning m-1"
              onClick={() => editAction(anime)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger m-1"
              onClick={() => deleteAction(anime)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  const renderEps = obj =>
  {
    let values = Object.values(obj);

    if(values.length > 1)
    {
        return values.join(' | ')
    }
    return values;
  }

  return (
    <table className="table mt-4 text-center">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Streaming</th>
          <th>Filmes</th>
          <th>Temporadas</th>
          <th>Episodios</th>
          <th>Terminou?</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows(props.props, props.edit, props.delete)}</tbody>
    </table>
  );
};

export default AnimeTable;