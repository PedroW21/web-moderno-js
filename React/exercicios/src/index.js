import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/Primeiro";
import BomDia from "./components/BomDia";
import BoaTarde, { BoaNoite } from "./components/MultiplosComponentes";
import Saudacao from "./components/Saudacao";
import Pai from "./components/Pai";
import Filho from "./components/Filho";

ReactDOM.render(
  <>
    {/* <Primeiro />
    <BomDia nome="Pierre" idade={10} />
    <BoaTarde nome='Matheus' />
    <BoaNoite nome='Jovem dinamicu' /> */}

    {/* <Saudacao tipo='Bom dia' nome='Jovem'/> */}

    <Pai nome="Minato" sobrenome="Juarez">
      {/* Como passo os componentes filhos aqui? */}
      <Filho nome="Pierre" />
      <Filho nome="Jacob"  />
      <Filho nome='Minato' />
      <Filho nome="Alicia" />
      <Filho nome="Milana" />
    </Pai>
  </>,
  document.getElementById("root")
);
