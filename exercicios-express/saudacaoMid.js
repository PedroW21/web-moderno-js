function saudacao(nome)
{
    //console.log(`Welcome my friendo ${nome}!`); //so isso não daria certo, pois o parametro nome sera tratado como req (o obj)
    // ao retornar uma função middleware consegujriamos o nome (teorimante)
    return function(req, res, next)
    {
        console.log(`Welcome my friendo ${nome}!`); // aqui dentro, ela sempre sera executada qd tiver uma requisição, se tivesse fora dessa func, seria so na inicialização do back
        next();
    }
}

module.exports = saudacao;