const modA = require("../../moduloA"); //prestar atençao, seguir fielmente o nome do arquivo pra não dar problema
const http = require("http");

console.log(modA);

http.createServer((req,res) => {
    res.write("Oie! Dia bom!");
    res.end();
}).listen(8080)
