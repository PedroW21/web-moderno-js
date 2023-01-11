const AnimeTable = (props) => 
{

  const renderRows = (obj, editAction, deleteAction) => 
  {
    
    return obj.map((anime, idx) => {
      return (
        <tr key={idx}>
          <td style={{fontSize: '.6em'}}>{anime.name}</td>
          <td style={{fontSize: '.6em'}}>{anime.streaming}</td>
          <td style={{fontSize: '.6em'}}>{anime.movies}</td>
          <td style={{fontSize: '.6em'}}>{anime.seasons}</td>
          <td style={{fontSize: '.6em'}}>
            <ul className="list-unstyled">
                {renderEps(anime.episodes)}
            </ul>
          </td>
          <td style={{fontSize: '.6em'}}>{anime.finished ? "Sim" : "Não"}</td>
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
    <table className="table table-sm mt-4 text-center">
      <thead>
        <tr>
          <th style={{fontSize: '.55em'}}>Nome</th>
          <th style={{fontSize: '.55em'}}>Streaming</th>
          <th style={{fontSize: '.55em'}}>Filmes</th>
          <th style={{fontSize: '.55em'}}>Temporadas</th>
          <th style={{fontSize: '.55em'}}>Episodios</th>
          <th style={{fontSize: '.55em'}}>Terminou?</th>
          <th style={{fontSize: '.55em'}}>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows(props.props, props.edit, props.delete)}</tbody>
    </table>
  );
};

export default AnimeTable;