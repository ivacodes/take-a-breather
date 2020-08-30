const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 10000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

console.log(breathTime);
console.log(holdTime);

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