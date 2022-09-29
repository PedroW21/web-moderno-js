const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}};

console.log(JSON.stringify(obj));

const objJson = JSON.stringify(obj)

console.log(JSON.parse(objJson));
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))

// Formato json invalido = "{a: 1, b:2, c:3}"
// Outro formato json invalido = "{'a': 1, 'b':2, 'c':3}"
// Formato valido = '{"a": 1, "b":2, "c":3}'

