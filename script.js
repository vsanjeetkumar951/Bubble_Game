var timmer = 20;
var score = 0;
var hitrn = 0;

function inserseScore() {
  score += 10;
  document.getElementById("scoreVal").textContent = score;
}

function hitBubble() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#th").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (let i = 1; i <= 96; i++) {
    var cl = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${cl}</div>`;
  }
  document.getElementById("pbtn").innerHTML = clutter;
}

function runTimer() {
  var ttr = setInterval(function () {
    if (timmer > 0) {
      timmer--;
      document.getElementById("tr").innerHTML = timmer;
    } else {
      clearInterval(ttr);
      document.querySelector("#pbtn").innerHTML=`<h1>Game Over<h1/>`
    }
  }, 1000);
}

document.querySelector("#pbtn").addEventListener("click", function (dets) {
  var cliclNum = Number(dets.target.textContent);
  if (cliclNum === hitrn) {

inserseScore();
makeBubble();
hitBubble();
  }
});

runTimer();
makeBubble();
hitBubble();
