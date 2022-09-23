function Carro(velocidadeMaxima = 250, delta= 10) // ele acelera de 10 em 10 = delta
{
    // atributo privado (realmente, inacessivel pela notação ponto)

    let velocidadeAtual = 0;

    // metodo publico

    this.acelerar = function()
    {
        if(velocidadeAtual + delta <= velocidadeMaxima) velocidadeAtual += delta;
        else
        {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // outro metodo publico

    this.getVelocidadeAtual = function()
    {
        return velocidadeAtual;
    }
}

const veloster = new Carro;
veloster.acelerar();
console.log("Velocidade do veloster após acelerar: ", veloster.getVelocidadeAtual());
console.log("");

const ferrari = new Carro(375, 40);
console.log("Velocidade da ferrari antes de acelerar: ",ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log("Velocidade da ferrari depois de acelerar: ",ferrari.getVelocidadeAtual());
ferrari.acelerar();
ferrari.acelerar();
console.log("Velocidade da ferrari depois de acelerar 3x: ",ferrari.getVelocidadeAtual());


