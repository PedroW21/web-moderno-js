import { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props)
    {
        super(props); //temos que passar as props para super clasee (component)

        this.setTipo = this.setTipo.bind(this); //estamos amarrando a chamada da função pura ao estado de seu objeto originario
        this.setTipo = this.setNome.bind(this)
    }

    setTipo(e)
    {
        //this.props.tipo = e.target.value; // não consigo alterar diretamente

        this.setState({ tipo: e.target.value})
    }

    setNome(e)
    {
        this.setState({ nome: e.target.value})
    }

  render() {
    const { tipo, nome } = this.state;

    return (
      <div>
        <h1>
          {tipo} {nome}
        </h1>
        <hr />
        <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
        <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
      </div>
    );
  }
}
