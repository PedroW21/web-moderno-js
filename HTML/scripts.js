const conteudo = document.getElementById("conteudo");

document.querySelectorAll('a').forEach(link => {
    link.onclick = ((e) => {
        e.preventDefault();

        fetch(link.href) // fiz chamada AJAX
            .then(resp => resp.text())
            .then(htmlRequisicao => conteudo.innerHTML = htmlRequisicao);
    })
})