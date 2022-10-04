const jogadores = ["PedroW21", "Momonga", "Saitama", "Luffy"];

jogadores.pop(); // remove o ultimo
console.log(jogadores);

jogadores.push("Iriney, o invencivel"); // adiciona na ultima posicao
console.log(jogadores);

jogadores.shift(); // remove o primeiro elemento
console.log(jogadores);

jogadores.unshift("Cheguei na primeira posição"); // adiciona na primeira posição
console.log(jogadores);

// Splice - adicionando
jogadores.splice(3, 0, "Barba Branca", "Joyboy");
console.log(jogadores);

// Removendo

jogadores.splice(0,2);
console.log(jogadores);

// Slice - retorna um novo array

const algunsJogadores = jogadores.slice(2);  // apartir do indice x, me retorne um novo array
console.log(algunsJogadores);

const algunsJogadores2 = jogadores.slice(0,2); // pega do indice x ate y, sem incluir o y
console.log(algunsJogadores2);

