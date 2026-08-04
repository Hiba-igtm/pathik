import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import kidsVideo from "@/assets/video1.mp4";
import travelIcon from "@/assets/let's travel!.png";
import startBtn from "@/assets/START.png";
import bgMusic from "@/assets/background-music.mp3";
import { startBackgroundMusic } from "@/lib/backgroundMusic";
export function Intro({ onStart }: { onStart: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoStarted, setVideoStarted] = useState(false);
  const [showButton, setShowButton] = useState(false);

 const handleStartVideo = async () => {
  const video = videoRef.current;

  if (!video) return;

  setVideoStarted(true);

  try {
    await video.play();
startBackgroundMusic(bgMusic);
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background Video */}
      <video
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover"
  src={kidsVideo}
  onTimeUpdate={(e) => {
    if (e.currentTarget.currentTime >= 5 && !showButton) {
      setShowButton(true);
    }
  }}
/>

      {/* START BUTTON */}
    {!videoStarted && (
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleStartVideo}
    className="relative z-20z bg-transparent border-none p-0"
  >
    <img
      src={startBtn}
      alt="Start"
      className="w-64 h-auto"
    />
  </motion.button>
)}

      {/* LET'S TRAVEL BUTTON */}
      {videoStarted && showButton && (
        <motion.button
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  onClick={onStart}
className="absolute bottom-60 right-160 z-20">
  <img
    src={travelIcon}
    alt="Let's Travel"
    className="w-75 h-25"
  />
</motion.button>
      )}

    </div>
  );
}