// Node faz cache dos modulos, (mantem o mesmo valor em uma unica instancia) / singleton

module.exports = {
    valor: 1,
    increment()
    {
        this.valor++;
    }
}

