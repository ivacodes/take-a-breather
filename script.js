const container = document.getElementById("container");
const text = document.getElementById("text");
const soundEl = document.getElementById("sound-toggle");

const totalTime = 10000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// console.log(breathTime);
// console.log(holdTime);

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe in";
  container.className = "container grow";

  setTimeout(() => {
    (text.innerText = "Hold"),
      setTimeout(() => {
        text.innerText = "Breathe out";
        container.className = "container shrink";
      }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);

// audio element

var audioElement = new Audio("./sound/forest.wav");
//set loop
audioElement.loop = true;

// check if audio playing, if not, on click will start it. Changes button style

soundEl.addEventListener("click", (e) => {
  if (audioElement.duration > 0 && !audioElement.paused) {
    audioElement.pause();
    soundEl.className = "fas fa-play-circle";
  } else {
    audioElement.play();
    soundEl.className = "fas fa-pause-circle";
  }
});
