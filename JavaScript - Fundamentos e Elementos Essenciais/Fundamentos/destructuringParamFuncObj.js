function randomico({min = 0, max = 1000})
{
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

console.log("Passando obj direto na chamada da função:" ,randomico({max: 50, min: 20}));

obj = {max: 123, min: 50};
console.log("Passando um obj na chamada da função", randomico(obj));

console.log("Passando um argumento na chamada da função", randomico({min: 500}));

console.log("Passando nenhum argumento na chamada da função", randomico({})); // daria erro se fosse vazio