(function($)
{
    $.fn.temporizador = function(opcoes)
    {
        const opcoesFinais = $.extend({ //caso n esteja em opcoes, o valor aqui sera utilizado por padrao
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes);

        const horaDezena = $('<span class="digito"></span>').html('0');
        const horaUnidade = $('<span class="digito"></span>').html('0');
        const minutoDezena = $('<span class="digito"></span>').html('0');
        const minutoUnidade = $('<span class="digito"></span>').html('0');
        const minutoSegDezena = $('<span class="digito"></span>').html('0');
        const minutoSegUnidade = $('<span class="digito"></span>').html('0');
        
        const separadorHora = $('<span class="separador"></span>').html(':');
        const separadorMinuto = $('<span class="separador"></span>').html(':');

        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem);

        $(this).addClass('temporizador');
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, minutoSegDezena, minutoSegUnidade, mensagem);
        
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
        const horarioAlvo = regex.exec(opcoesFinais.horario);

        let temporizador = setInterval(() => {
            const agora = new Date();
            const alvo = new Date();

            alvo.setHours(horarioAlvo[1]);
            alvo.setMinutes(horarioAlvo[2]);
            alvo.setSeconds(horarioAlvo[3]);

            const diferencaEmMiliSegs = alvo.getTime() - agora.getTime();
            if(diferencaEmMiliSegs >= 0)
            {
                const diferenca = regex.exec(new Date(diferencaEmMiliSegs).toISOString());

                horaDezena.html(diferenca[1][0]); //primeiro pegamos o elemento no array e depois uma parte de sua string
                horaUnidade.html(diferenca[1][1]);
                minutoDezena.html(diferenca[2][0]);
                minutoUnidade.html(diferenca[2][1]);
                minutoSegDezena.html(diferenca[3][0]);
                minutoSegUnidade.html(diferenca[3][1]);
            }
            else
            {
                clearInterval(temporizador);
            }
            
        }, 1000)

        return this;
    }
})(jQuery)