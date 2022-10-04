const aprovados = ["Pierre", "Mathias", "Vitao Bolado"];

aprovados.forEach(function(element, idx, arr)
{
    console.log(`${idx+1}: ${element}`);
    console.log(arr);
});

aprovados.forEach( nome => console.log(nome) );

const exibirAprovados = aprovado => console.log("Parabéns!! Você " + aprovado + " foi aprovado!!");
aprovados.forEach(exibirAprovados);
