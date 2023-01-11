import './Table.css';

const Table = (props) => {
  function renderTable(tHead, tData) {
    return (
      <>
        <thead>
          <tr>
            {tHead.map((e) => (
              <th key={e}>{e}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((data, idx) => (
            <tr key={idx}>
              {tableData(data)}
              <td>
                <button
                  className="btn btn-lg btn-warning m-1"
                  onClick={() => props.editAction(data)}
                >
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  className="btn btn-lg btn-danger m-1"
                  onClick={() => props.deleteAction(data)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </>
    );
  }

  function tableData(data) {
    let values = Object.entries(data);
    values = values.filter((value) => {
      if (value[0] !== "id" && value[0] !== "type") return value;
    });
    return values.map((tdata, idx) => (
      <td key={tdata[0] + tdata[1] + idx}>
        {tdata[0] === "selectFinished" ? (tdata[1] ? "Sim" : "Não") : tdata[1]}
      </td>
    ));
  }

  return (
    <table className="table table-sm mt-4 text-center">
      {renderTable(props.label, props.data)}
    </table>
  );
};

export default Table;
