const information = document.getElementById('info');

information.innerHTML = `Estamos usando o Chrome na versão ${versions.chrome()}, Node v${versions.node()}, and Electron v${versions.electron()}`;

const func = async () =>
{
    const response = await window.versions.ping();
    console.log(response)
}

func();

