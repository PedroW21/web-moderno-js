// Cadeia de prototipos
Object.prototype.attr0 = "Z"; // má pratica, não recomendado

const avo = {attr1: "a"};
const pai = {__proto__: avo, attr2: "B", attr2: "F"};
const filho = {__proto__: pai, attr3: "c"};

//console.log(filho.attr1);
//console.log(filho.attr0);
//console.log(filho.attr3);

const carro =
{
    velAtual: 0,
    velMax: 250,
    acelerar(delta)
    {
        if(this.velAtual + delta <= this.velMax)
        {
            this.velAtual += delta;
        }
        else
        {
            this.velAtual = this.velMax;
        }
    },
    status()
    {
        return `${this.velAtual}Km/H de ${this.velMax}`;
    }
}

const ferrari = 
{
    modelo: "F40",
    velMax: 324 // shadowing - sombreamento (não pega a variavel de escopo mais abrangente)
}

const volvo =
{
    modelo: "V40",
    status()
    {
        return `${this.modelo}: ${super.status()}`;
    }
}


Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100);
console.log(volvo.status());
ferrari.acelerar(245);
console.log(ferrari.status());
