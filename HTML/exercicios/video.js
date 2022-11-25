const play = document.querySelector("[wm-play]");
const pause = document.querySelector("[wm-pause]");
const video = document.getElementById("meuVideo")
const timeBar = document.querySelector("[wm-progresso] > div");

video.oncontextmenu = () => false; // desativa o botao direito

play.addEventListener("click", () => {
    video.play();
});

pause.addEventListener("click", () => {
    video.pause();
});

let videoTime = setInterval(() => {

    let currentTime = video.currentTime;
    let videoTotal = video.duration;

    let percentual = (currentTime / videoTotal)  * 100;

    timeBar.style.width = percentual + '%';;
    timeBar.style.textAlign = 'center';
    timeBar.innerHTML = `${percentual.toFixed(2)}%`;
    if(currentTime == videoTotal) clearInterval(videoTime);
}, 500);