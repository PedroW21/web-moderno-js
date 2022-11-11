// Old
// setTimeout(function(){
//     console.log("Hello baby!");

//     setTimeout(function() {
//         console.log("i'm inside another");
//     },1000)
// }, 2000)

// New
function esperarPor(tempo = 2000)
{
    return new Promise(function (resolve)
    {
        console.log("Im time stop, soon the resolve will appear...")
        setTimeout(() => {
            resolve("resolved XD")
        }, tempo)
    })
}

let p = esperarPor(3000).then((console.log));
