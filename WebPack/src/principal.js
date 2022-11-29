import Pessoa from './pessoa';
import './modulos/moduloA';
import './assets'; //vai procurar um arquivo index.js por padrao qd n damos algo direto

const atendente = new Pessoa;

console.log(atendente.cumprimentar());