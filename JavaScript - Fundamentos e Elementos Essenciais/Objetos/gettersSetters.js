const sequencia = 
{
    _valor: 1, //convenção
    get valor() 
    {
       return this._valor++;
    },
    set valor(valor)
    {
        if(this._valor - valor < 0) return console.log("Ação nao autorizada");
        this._valor = valor;
    }
}


console.log(sequencia.valor);
sequencia.valor = 5;
console.log(sequencia.valor);
sequencia.valor = -1;
console.log(sequencia.valor);



