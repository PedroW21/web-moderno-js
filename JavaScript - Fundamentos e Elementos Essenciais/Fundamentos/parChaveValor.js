// Contexto léxico - local fisico onde a variável foi declarada (contexto global, de bloco, de função....);

const saudacao = "Oi!"; // contexto lexico 1

function saudacaoFun()
{
    const saudacao = "Oieee!"; // Contexto léxico 2
    return saudacao;
}

// Objetos são grupois aninhados de pares chave/valor (nome/valor);

const cliente = {
    nome: "Pierre",
    idade: 23,
    peso: 80,
    endereco: {
        lograduouro: "Rua 99",
        numero: 345
    }
}