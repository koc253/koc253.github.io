var myAudio = document.getElementById("mysong");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};