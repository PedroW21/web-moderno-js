const d1 = new Date(0);
const d2 = new Date(0);

console.log("1)", d1 === d2); // estamos comparando aqui referencias na memoria, não os valores absolutos, oq resulta em falso

console.log("2)", d1.getTime() === d2.getTime()); // estamos comparando agora em valores absolutos, oq resulta em verdadeiro

console.log("3)", undefined == null);
console.log("4)", undefined === null);
