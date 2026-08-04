import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import q1Audio from "@/assets/audio/lotusqstn.mp3";
import q2Audio from "@/assets/audio/boatqstn.mp3";
import q3Audio from "@/assets/audio/stoneqstn.mp3";
import { useNavigate } from "@tanstack/react-router";
import taxilaStanding from "@/assets/scholars.png";
import taxilaWaving from "@/assets/scholarw.png";

import mathuraStanding from "@/assets/sculptors.png";
import mathuraWaving from "@/assets/sculptorw.png";

import kausambiStanding from "@/assets/merchants.png";
import kausambiWaving from "@/assets/merchantw.png";

import pataliputraStanding from "@/assets/ministers.png";
import pataliputraWaving from "@/assets/ministerw.png";

import tamraliptiStanding from "@/assets/fishermans.png";
import tamraliptiWaving from "@/assets/fishermanw.png";
const QUESTIONS = [
  {
    id: 1,
    text: "Can you find the lotus flower?",
    answer: "mathura",
    
  },
  {
    id: 2,
    text: "Can you find the little boat?",
    answer: "tamralipti",
  },
  {
    id: 3,
    text: "Can you find the stone tablet?",
    answer: "taxila",
  },
];
const QUESTION_AUDIO = [
  q1Audio,
  q2Audio,
  q3Audio,
];

const ELDERS = [
  {
    id: "taxila",
    standing: taxilaStanding,
    waving: taxilaWaving,
  },
  {
    id: "mathura",
    standing: mathuraStanding,
    waving: mathuraWaving,
  },
  {
    id: "kausambi",
    standing: kausambiStanding,
    waving: kausambiWaving,
  },
  {
    id: "pataliputra",
    standing: pataliputraStanding,
    waving: pataliputraWaving,
  },
  {
    id: "tamralipti",
    standing: tamraliptiStanding,
    waving: tamraliptiWaving,
  },
];
export default function UttarapathTreasureGame() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctElder, setCorrectElder] = useState("");
  const [completed, setCompleted] = useState(false);
  const [questionAudio, setQuestionAudio] = useState<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  const currentQuestion = QUESTIONS[questionIndex];

 const handleTap = (elderId: string) => {
  if (elderId === currentQuestion.answer) {
    setCorrectElder(elderId);

    setTimeout(() => {
      if (questionIndex < QUESTIONS.length - 1) {
        setQuestionIndex((p) => p + 1);
        setCorrectElder("");
      } else {
        setCompleted(true);
      }
    }, 2000);
  } else {
  if (questionAudio) {
    questionAudio.currentTime = 0;
    questionAudio.play().catch(() => {});
  }
}
};

useEffect(() => {
  const audio = new Audio(QUESTION_AUDIO[questionIndex]);

  setQuestionAudio(audio);

  audio.play().catch(() => {});

  return () => {
    audio.pause();
    audio.currentTime = 0;
  };
}, [questionIndex]);


  // ✅ COMPLETION SCREEN
  if (completed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-6 text-center">

        {/* waving characters */}
        <div className="flex gap-4 flex-wrap justify-center mb-8">
          {ELDERS.map((elder) => (
            <motion.img
              key={elder.id}
              src={elder.waving}
              className="w-40 h-auto object-contain"
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* popup card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            🎉 Congratulations!
          </h1>

          <p className="text-lg mb-6">
            You did it! You found all the correct answers.
          </p>

          <button
            onClick={() => navigate({ to: "/select" })}
            className="px-6 py-3 rounded-full bg-green-500 text-white font-bold hover:scale-105 transition"
          >
            Continue →
          </button>
        </div>
      </div>
    );
  }

  // ✅ GAME SCREEN
  return (
    <div className="min-h-screen bg-amber-50 p-6 flex flex-col">

      {/* Question box */}
      <div className="bg-white rounded-3xl shadow-lg p-6 text-center mb-8">
        <div className="text-sm mb-2">
          Question {questionIndex + 1}/3
        </div>

        <div className="text-3xl font-bold">
          {currentQuestion.text}
        </div>
      </div>

      {/* Elders */}
<div className="flex justify-center gap-8 flex-wrap">
        {ELDERS.map((elder) => (
          <motion.button
            key={elder.id}
            onClick={() => handleTap(elder.id)}
            animate={
              correctElder === elder.id
                ? { scale: [1, 1.1, 1] }
                : {}
            }
            transition={{
              duration: 1,
              repeat: correctElder === elder.id ? Infinity : 0,
            }}
            className={`rounded-3xl p-4 bg-white shadow-xl min-w-[160px] ${
              correctElder === elder.id
                ? "ring-8 ring-yellow-400"
                : ""
            }`}
          >
            <motion.img
              src={
                correctElder === elder.id
                  ? elder.waving
                  : elder.standing
              }
className={`w-56 h-auto object-contain transition-all duration-500 ${
  correctElder === elder.id
    ? "drop-shadow-[0_0_15px_gold] brightness-125"
    : ""
}`}
            animate={
  correctElder === elder.id
    ? {
        rotate: [-5, 5, -5, 5, 0],
        scale: [1, 1.05, 1],
      }
    : {}
}
transition={{
  duration: 1,
  repeat: correctElder === elder.id ? Infinity : 0,
}}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}