let comparaComThis = function(param)
{
    console.log(this === param); // apontando pro objeto global do node (global)
}
comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj); // aponta pro obj criado, não o global;
comparaComThis(global);
comparaComThis(obj);  // true

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports); // esta no contexto do arquivo (cada arquivo no node é um modulo);