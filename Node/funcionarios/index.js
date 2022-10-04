const axios = require("axios");
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

let func;

axios.get(url).then(response => {
    func = response.data;
    
    const womans = func.filter(element => element.genero === "F");
    const chineseWomans = womans.filter(element => element.pais === "China");
    
    // prevFunc = acumulador / currentFunc = funcAtual
    const minorSalary = chineseWomans.reduce((prevFunc, currentFunc) => prevFunc.salario < currentFunc.salario ? prevFunc : currentFunc);

    console.log(minorSalary);

})



