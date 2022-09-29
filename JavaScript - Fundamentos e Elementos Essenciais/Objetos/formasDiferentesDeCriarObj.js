// usando notação literal
const obj1 = {};

// Object em JS
//console.log(typeof Object, typeof new Object);
const obj2 = new Object;

// Função construtora
function Produto(nome, preco, desc)
{
    // Variaveis estão publicas (visiveis para fora do obj)
    this.nome = nome;
    
    this.getPrecoComDesconto = () => {
        return console.log(preco * (1 - desc));
    }
}

const p1 = new Produto("caneta bic", 3, 0.05);
const p2 = new Produto("Caderno", 15, 0.1);

//p1.getPrecoComDesconto();
//p2.getPrecoComDesconto();

// Função Factory

function criarFuncionario(nome, salarioBase, faltas)
{
    return {
        nome,
        salarioBase,
        faltas,
        getSalario()
        {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("Pietro", 10000, 10);
const f2 = criarFuncionario("Marie", 10000, 1);

//console.log(f1.getSalario());
//console.log(f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Dona Teia";
//console.log(filha);

// Função famosa que retorna obj

const fromJSON = JSON.parse('{"info": "sou um obj json em!!"}'); // sempre aspas duplas, se n da merda
console.log(fromJSON);