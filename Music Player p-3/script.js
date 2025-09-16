let play = document.querySelector(".playbtn");
let song = document.querySelector("#song")
let cu
play.addEventListener("click", () => {
    if (play.innerHTML.includes("pause.svg")) {
        play.innerHTML = '<img id="play" src="play.svg" alt="">';
        song.pause();
    }
    else if (play.innerHTML.includes("play.svg")) {
        play.innerHTML = '<img id="pause" src="pause.svg" alt="">';
        song.play();

    }

})
let sideimg = document.querySelector("#play1");
