// não aceita repetição e nao é indexado

const jogos = new Set();
jogos.add("CyberPunk 2077");
jogos.add("The Witcher").add("Satisfactory").add("Detroid Become Human");
jogos.add("The Witcher");

console.log(jogos);
console.log(jogos.size);
console.log(jogos.has("THE WITCHER"));
console.log(jogos.has("The Witcher"));

console.log(jogos.has("Satisfactory"));
jogos.delete("Satisfactory");
console.log(jogos.has("Satisfactory"));

const nomes = ["Ze", "Zeca", "Zendaya", "Ze"];

const nomesSet = new Set(nomes);
console.log(nomesSet);
