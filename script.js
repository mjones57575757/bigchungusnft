const audio = new Audio("bigchingus.mp3");
let time = 5;

btn.onclick = e => {
  // mark our audio element as approved by the user
  audio.play().then(() => { // pause directly
    audio.pause();
    audio.currentTime = 0;
  });
  countdown();
  btn.disabled = true;
};


function countdown() {
  pre.textContent = --time;
  if(time === 0) return onend();
  setTimeout(countdown, 1000);
}


function onend() {
  audio.play(); // now we're safe to play it
  time = 5;
  btn.disabled = false;
}