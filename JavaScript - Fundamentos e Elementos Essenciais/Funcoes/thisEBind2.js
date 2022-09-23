function Pessoa()
{
    this.idade = 0;
    const self = this; // this amarrado a este obj
    setInterval(function() // quem dispara a função não é o codigo pessoa, e sim o temporizador a cada x tempo, assim mudando o contexto do this
    {
        self.idade++;
        console.log(self.idade)
    }/*.bind(this)*/, 1000); // sem esse this, o contexto do this se perde, colocando o amarramos no obj
}

new Pessoa;