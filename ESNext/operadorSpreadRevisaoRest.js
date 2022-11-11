// operador ... rest(juntar) / spread (espalhar)
// usar rest como parametro de funcao

// usar spread com obj

const func = { nome: "Gloria", salario: 15000 };
const clone = { ativo: true, ...func, contratadoEm: 2000 }

console.log(clone);

// Com array

const grupoA = ["adalberto", "gloaria", "Marlene"];
const grupoFinal = ["Eliza", , ...grupoA, "Carlinhos"];

console.log(grupoFinal);




