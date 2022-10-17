const anonimo = process.argv.indexOf("-a") !== - 1; // vai retornar vedadeiro caso o -a esteja 

if(anonimo)
{
    process.stdout.write("Olá, Anonimo!\n");
    process.exit();
}
else
{
    process.stdout.write("Informe o seu nome: "); 
    process.stdin.on("data", data => { // entrada de dados / onData = apos usuario pressionar enter(enter vem junto)
        const os = require("os"); // putaria do windows, o \n não fincionaria abaixo, no win é \r\n
        const nome = data.toString().replace(os.EOL, "");

        process.stdout.write(`Fala ${nome}!!\n`);
        process.exit();
    })
}
