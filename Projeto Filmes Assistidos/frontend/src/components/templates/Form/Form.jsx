import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  let qtdActualField = 0;

  function renderForm(
    fields,
    fieldLabel,
    placeholders,
    qtdRows,
    qtdFieldPerRow,
    data,
    type,
    renderInputs
  ) {
    const rows = [];

    for (let i = 0; i < qtdRows; i++) {
      rows.push(
        <div className="row" key={i}>
          {renderInputs(fields, fieldLabel, placeholders, qtdFieldPerRow, data, type)}
        </div>
      );
    }

    return rows.map((e) => {
      return e;
    });
  }

  function renderInputs(field, fieldLabel, placeholders, qtdFieldPerRow, data, type) {
    const fields = [];

    const normalInput = (qtdActualField) => (
      <input
        type="text"
        className={field[qtdActualField] ? "form-control" : "d-none"}
        value={data[type][field[qtdActualField]]}
        name={field[qtdActualField]}
        onChange={(e) => props.updateFields(e)}
        placeholder={placeholders[qtdActualField]}
      />
    );

    const selectInput = (qtdActualField) => (
      <select
        name={field[qtdActualField]}
        className={field[qtdActualField] ? "form-control" : "d-none"}
        value={data[type][field[qtdActualField]]}
        onChange={(e) => props.updateFields(e)}
        placeholder={placeholders[qtdActualField]}
      >
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </select>
    );


    for (let i = 0; i < qtdFieldPerRow; i++) {
      

      fields.push(
        <div className="col-12 col-md-6" key={field[qtdActualField]}>
          <div className="form-group">
            <label>{fieldLabel[qtdActualField]}</label>
            {field[qtdActualField]?.includes("select")
              ? selectInput(qtdActualField)
              : normalInput(qtdActualField)}
          </div>
        </div>
      );
      qtdActualField++;
    }

    return fields.map((e) => e);
  }

  return (
    <div className="form">
      {renderForm(
        props.fields.name,
        props.fields.label,
        props.fields.placeholders,
        props.formConfig.qtdRows,
        props.formConfig.qtdFieldPerRow,
        props.data,
        props.type,
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
