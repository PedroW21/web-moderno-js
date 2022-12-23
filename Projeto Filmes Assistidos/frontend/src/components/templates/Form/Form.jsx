const Form = (props) => {
  let qtdActualField = 0;

  function renderForm(fields, fieldLabel, qtdRows, qtdFieldPerRow, renderInputs) {
    const rows = [];

    for (let i = 0; i < qtdRows; i++) {
      rows.push(
          <div className="row" key={i}>
            <div className="col-12 col-md-6">
              <div className="form-group">
                {renderInputs(fields, fieldLabel, qtdFieldPerRow)}
              </div>
            </div>
          </div>
      );
    }

    return rows.map((e) => {
      return (e);
    });
  }

  function renderInputs(field, fieldLabel, qtdFieldPerRow) {
    const fields = [];

    for (let i = 0; i < qtdFieldPerRow; i++) 
    {
      fields.push(
        <>
          <label>{fieldLabel[qtdActualField]}</label>
          <input type="text" className="form-control" 
          name={field[qtdActualField]}/>
        </>
      );

      qtdActualField++;
    }

    console.log(fields);
    
    return (
        fields.map(e => (e))
    );
  }

  return (
    <div className="form">
      {renderForm(
        props.fields.name,
        props.fields.label,
        props.formConfig.qtdRows,
        props.formConfig.qtdFieldPerRow,
        renderInputs
      )}

      <div className="row">
        <div className="col-12 d-flex justify-content-end mt-2">
          <button
            className="btn btn-primary m-2"
            onClick={(e) => props.save(props.animeToAdd)}
          >
            Salvar
          </button>
          <button
            className="btn btn-secondary m-2"
            onClick={(e) => props.cancel()}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
