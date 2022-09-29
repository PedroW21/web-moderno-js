
class Lancamentos
{
    constructor(nome = "Generico", valor= 0)
    {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro
{
    #lancamentos
    constructor(mes, ano)
    {
        this.mes = mes;
        this.ano = ano;
        this.#lancamentos = [];
    }

    addLancamentos(...lancamentos) // transforma os multiplos parametros em um array
    {
        lancamentos.forEach(e => this.#lancamentos.push(e));
    }

    sumario()
    {
        let valorConsolidado = 0;
        this.#lancamentos.forEach(element => valorConsolidado += element.valor);

        return valorConsolidado;
    }
}

const salario = new Lancamentos("Salario", 50000);
const contaDeLuz = new Lancamentos("Luz", -350);

const contas = new CicloFinanceiro(7, 2022);
contas.addLancamentos(salario, contaDeLuz);

console.log(contas.sumario());
