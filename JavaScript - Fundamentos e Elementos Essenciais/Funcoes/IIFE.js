// IIFE - Immediately Invoked Function Expression
// Ela faz com que as variaveis, obj e etc... sejam dessa execução de instancia (que apos ser finalizada a exec, se perde referencia ao seu conteudo interno), não sendo acessivel no global
(function() {
    console.log("Será executado quando o interpreador ler");
    console.log("Foge do escopo mais abrangente - global");
})()