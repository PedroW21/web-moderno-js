## Do Surgimento a atualidade?

Linguagens não estruturadas e usavam-se do "GO-TO" que desviava o fluxo da aplicação pra outro lugar,
que trazia problemas para a qualiadade do software, e foi criado um artigo criticando isso, o que
gerou o fim derradeiro desse paradigma.

Surdindo assim o estruturado e procedural (que basicamente é baseado em funções que fazem 
procedimentos com os dados recebidos, e que pode ser reutilizada em outros lugares do código).

O paradigma de Orientação a Objetos mudou esse conteico (de dados serem recebidos e manipulados),
agora os dados estão ali e estão com funções embutidas

## Exemplos

<script>
    // Procedural
    // Manipulação de dados recebidos (globais ou locais) e um retorno ou uma ação
    processar(valor1,valor2,valor3);

    // OO 
    // Dados agora contem comportamentos (metodos - funções)

    obj = {
        valor1,
        valor2,
        processamento()
        {
            //... - comportamento
        }
    }

    obj.processamento();
</script>

## Principios de Orientação a Objetos

- Abstração: Pegar um objeto e simplificar para o contexto que precisa (Detran: ele não precisa saber se o motor ta ok, valvula ta com problema, so precisa do dono do carro, chassi, placa, peso e etc...);

- Encapsulamento: Guardar os dados criticos e não necessários para a "utilização" daquele objeto (Ex: o motor, potencia, peso, sistema hidraulico fica "escondido" do usuario, sendo necessário apenas uma interface de interação para utilizar ele (freiar, acelar, abrir vidros e etc...));

- Herança (prototype):  Relação é um (um ser humano É UM animal / um mamifero É UM ANIMAL). Melhorar usar a composição (TEM UM / um carro tem um motor...). Objetos herdam outros objetos (carro herda o motor, e ficam separados suas complexidades);

- Polimorfismo: Multiplas formas (um carro pode ser um honda, um corsa, uma ferrari e etc...);
