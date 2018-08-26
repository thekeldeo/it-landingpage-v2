function restartVideo() {
  var video = document.getElementById('intro-video');
  video.pause();
  video.currentTime = 0;
  video.play();
}