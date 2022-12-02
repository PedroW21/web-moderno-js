import React from "react";
import { childrenWithProps } from "../utils/children";


export default props =>
<div>
        {console.log(props)}
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>