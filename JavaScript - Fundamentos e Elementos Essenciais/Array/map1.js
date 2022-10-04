const nums = [1,2,3,4,5];

// Map = for com proposito

let result = nums.map(function(e){
    return e * 2;
});

console.log(result);

const somar10 = e => e + 10;
const quadrado = e => e * e;
const transformDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

result = nums.map(somar10).map(quadrado).map(transformDinheiro);

console.log(result);
