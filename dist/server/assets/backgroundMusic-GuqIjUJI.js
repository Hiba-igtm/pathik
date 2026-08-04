let bgMusic = null;
function startBackgroundMusic(src) {
  if (!bgMusic) {
    bgMusic = new Audio(src);
    bgMusic.loop = true;
  }
  bgMusic.src = src;
  bgMusic.play().catch(console.error);
}
function stopBackgroundMusic() {
  if (bgMusic) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
}
export {
  startBackgroundMusic as a,
  stopBackgroundMusic as s
};
