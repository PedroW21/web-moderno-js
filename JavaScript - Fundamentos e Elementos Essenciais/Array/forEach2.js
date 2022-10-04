Array.prototype.forEach2 = function(func)
{
    for (let i = 0; i < this.length; i++) 
    {
        func(this[i], i, this)
    }
}


const aprovados = ["Pierre", "Mathias", "Vitao Bolado"];

aprovados.forEach2(function(element, idx)
{
    console.log(`${idx+1}: ${element}`);
});
