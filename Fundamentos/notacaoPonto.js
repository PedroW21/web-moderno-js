// Notação ponto

console.log(Math.ceil(6.1)); // arredonda para cima

const obj = {};
obj.nome = "Tadeu";
// obj["nome"] = "Tadeu Irineu";
console.log(obj.nome);

function Obj1(nome)
{
    this.nome = nome; // this - amarra o atributo nome a sua instância
    this.exec = function() {console.log("Exec...")};
}

const Obj2 = new Obj1("Tia Tati");
const Obj3 = new Obj1("Dona Cota");

console.log(Obj2.nome);
console.log(Obj3.nome);
Obj2.exec();