const a = 1;
const b = 2;
const c = 3;

// Antes do ECMA2015
const obj1 = {a: b, b: c, c: c};

//Apos o ECMA2015
const obj2 = {a,b,c};

obj3 = {};
const nomeAtrb = "nota";
const valorAtrb = 7;
obj3[nomeAtrb] = valorAtrb;

const obj4 = {[nomeAtrb]: valorAtrb};

// Metodo antigo (antes ECMA2015/ ES6) para funcoes em objs 
const obj5 = {
    funcao1: function(){
        //...
    }
}

//Novo metodo
const obj6 = {
    funcao1(){
        //...
    }
}
