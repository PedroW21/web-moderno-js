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

async function executar()
{
    await esperarPor()
    console.log("Async/Await 1")
    await esperarPor()
    console.log("Async/Await 2")
    await esperarPor()
    console.log("Async/Await 3")
}

executar();