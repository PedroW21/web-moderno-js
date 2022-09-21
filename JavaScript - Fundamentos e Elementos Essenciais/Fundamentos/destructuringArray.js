const [a] = [10];
console.log(a);

const [n1, , n2, n3, , n5] = [10, 8, 5, 6];
console.log(n1, n2, n3, n5);

const [ , [, nota2]] = [[ , 8, 3], [ , 20, 6]]; // ignore o primeiro elemento, e dentro do 2o arrey, ignore o primeiro novamente;
console.log(nota2);