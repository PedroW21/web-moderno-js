const pessoa = {
    saudacao: "Bom dia",
    falar()
    {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;

falar(); // conflito entre paradigmas (funcional e oo) - o contexto  do this mmudou, sendo assim dara undefined

const falarDePessoa = pessoa.falar.bind(pessoa); // amarra um obj ao this que esta nesse contexto
falarDePessoa();