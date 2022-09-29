function Youtube(title, videoId)
{
    this.title = title;
    this.videoId = videoId;
}

const video = new Youtube("O NOVO MUNDO!", 3345421);
const video2 = new Youtube("O VELHO MUNOD!", 3221323);

// Simulando operador new (por baixo dos panos);

function novo(f, ...params)
{
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);

    return obj;
}

const aula3 = novo(Youtube, "VEGAPUNK?????????????", 4212394);
const aula4 = novo(Youtube, "O ONE PIECE!!!!!!!!!!!!!!!!!!!!!", 65643321);

console.log(aula3, aula4);