function criarNovoElemento(tagName, className)
{
    const elem = document.createElement(tagName);
    elem.className = className;

    return elem;
}

function criarBarreira(reversa = false)
{
    this.elemento = criarNovoElemento('div', 'barreira'); //vamos instanciar essa classe, por isso o this

    const borda = criarNovoElemento('div', 'borda');
    const corpo = criarNovoElemento('div', 'corpo');

    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`;
}

// const b = new criarBarreira(true);
// b.setAltura(200);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

function parDeBarreiras(altura, abertura, posicaoX)
{
    this.elemento = criarNovoElemento('div', 'par-de-barreiras');

    this.superior = new criarBarreira(true);
    this.inferior = new criarBarreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura-abertura);

        const alturaInferior = altura - abertura - alturaSuperior;

        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    };  

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);

    this.setX = x => this.elemento.style.left = `${x}px`;

    this.getLargura = () => this.elemento.clientWidth;

    //chamando as funções
    this.sortearAbertura();
    this.setX(posicaoX);
}

// const b = new parDeBarreiras(700, 200, 400);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

function Barreiras(altura, largura, abertura, espaco, notificarPonto)
{
    // estrategia aqui é usar sempre as mesmas 4 barreiras, so mudando sua abertura
    this.pares = [
        new parDeBarreiras(altura, abertura, largura),
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura, abertura, largura + espaco * 3)
    ];

    const deslocamento = 3; //velocidade deslocamento

    this.animar = () => {
        this.pares.forEach( par => {
            par.setX(par.getX() - deslocamento);

            // quando o elemento sair da area do jogo

            if(par.getX() < -par.getLargura() // se x for negativo, ele estara fora do jogo ( a barreira )
            )
            {
                par.setX(par.getX() + espaco * this.pares.length); // por ser positivo o resultado, ela se desloca pro inicio do jogo / final da fila
                par.sortearAbertura();
            }

            const meio = largura / 2 ;
            const cruzouOMeio = par.getX() + deslocamento >= meio 
                && par.getX() < meio;
                
            cruzouOMeio && notificarPonto(); // se cruzou o meio, notifica o ponto

        });
    }
}

function Passaro(alturaDoJogo)
{
    let voando = false;

    this.elemento = criarNovoElemento('img', 'passaro');
    this.elemento.src = 'imgs/passaro.png';

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;

    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5);
        const alturaMaxima = alturaDoJogo - this.elemento.clientHeight;

        if(novoY <= 0)
        {
            this.setY(0);
        }
        else if(novoY >= alturaMaxima)
        {
            this.setY(alturaMaxima);
        }
        else
        {
            this.setY(novoY);
        }
    }

    this.setY(alturaDoJogo / 2);
}

// const barreiras = new Barreiras(700, 1200, 200, 400);
// const passaro = new Passaro(700);
// const areaDoJogo = document.querySelector('[wm-flappy]');

// areaDoJogo.appendChild(passaro.elemento);
// barreiras.pares.forEach(par => {
//     areaDoJogo.appendChild(par.elemento);
// });

// setInterval(() => {
//     barreiras.animar();
//     passaro.animar();
// }, 20)

function Progresso()
{
    this.elemento = criarNovoElemento('span', 'progresso');
    this.atualizarPontos = pontos =>
    {
        this.elemento.innerHTML = pontos;
    }

    this.atualizarPontos(0);
}

function estaoSobrepostos(elemA, elemB)
{
    const a = elemA.getBoundingClientRect();
    const b = elemB.getBoundingClientRect();

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;

    // a lateral esquerda + seu tamanho resulta na lateral direita???

    const vertical = a.top + a.height >= b.top  && b.top + b.height >= a.top;

    return horizontal && vertical;
}


function houveColisao(passaro, barreiras)
{
    let colidiu = false;

    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu)
        {
            const superior = parDeBarreiras.superior.elemento;
            const inferior = parDeBarreiras.inferior.elemento;

            colidiu = estaoSobrepostos(passaro.elemento, superior) 
            || estaoSobrepostos(passaro.elemento, inferior);
        }
    });

    return colidiu;
}

function FlappyBird()
{
    let pontos = 0;

    const areaDoJogo = document.querySelector('[wm-flappy]');
    const alturaDoJogo = areaDoJogo.clientHeight;
    const larguraDoJogo = areaDoJogo.clientWidth;
    
    const aberturaBarreias = 200;
    const espacoEntreAsBarreias = 400;

    const progresso = new Progresso();
    const barreiras = new Barreiras(alturaDoJogo, larguraDoJogo, aberturaBarreias, espacoEntreAsBarreias, () => progresso.atualizarPontos(++pontos));
    const passaro = new Passaro(alturaDoJogo);

    areaDoJogo.appendChild(progresso.elemento);
    areaDoJogo.appendChild(passaro.elemento);
    barreiras.pares.forEach((par) => {
        areaDoJogo.appendChild(par.elemento);
    });

    this.start = () => {
        //loop do jogo

        let temporizador = setInterval(() => {
            barreiras.animar();
            passaro.animar();

            if(houveColisao(passaro, barreiras))
            {
                clearInterval(temporizador);
            }
        }, 20);
    }
}
 
new FlappyBird().start();