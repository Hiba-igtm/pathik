let bgMusic: HTMLAudioElement | null = null;

export function startBackgroundMusic(src: string) {
  if (!bgMusic) {
    bgMusic = new Audio(src);
    bgMusic.loop = true;
  }

  bgMusic.src = src;
  bgMusic.play().catch(console.error);
}

export function stopBackgroundMusic() {
  if (bgMusic) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
}