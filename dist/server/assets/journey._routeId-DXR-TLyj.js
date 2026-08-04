import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { a as Route, b as ROUTES, m as mathuraTempleVideo, c as mathuraSculptorVideo, t as templeBtn, s as sculptorBtnMathura, d as mathuraAnswer1, e as mathuraAnswer2, f as mathuraAnswer3 } from "./router-Cao_d0qy.js";
import { i as indiaMap } from "./glowing route map-wdyIznJr.js";
import { motion } from "framer-motion";
import { b as boy1, a as boy2, g as girl1, d as girl2, c as continueBtn } from "./continuebutton-8ceKZ89G.js";
import "@tanstack/react-query";
const q1Audio = "/assets/lotusqstn-BmciPVGK.mp3";
const q2Audio = "/assets/boatqstn-CfewmEcl.mp3";
const q3Audio = "/assets/stoneqstn-DWyZ3z_M.mp3";
const taxilaStanding = "/assets/scholars-CBKMRoWL.png";
const taxilaWaving = "/assets/scholarw-wMoFyMgk.png";
const mathuraStanding = "/assets/sculptors-COg4yKKG.png";
const mathuraWaving = "/assets/sculptorw-CsYt-6gx.png";
const kausambiStanding = "/assets/merchants-B_Q9IPV7.png";
const kausambiWaving = "/assets/merchantw-DZtB34JO.png";
const pataliputraStanding = "/assets/ministers-M2innyyR.png";
const pataliputraWaving = "/assets/ministerw-BhwaxRly.png";
const tamraliptiStanding = "/assets/fishermans-7oRp64hZ.png";
const tamraliptiWaving = "/assets/fishermanw-Carmdvaf.png";
const QUESTIONS = [
  {
    id: 1,
    text: "Can you find the lotus flower?",
    answer: "mathura"
  },
  {
    id: 2,
    text: "Can you find the little boat?",
    answer: "tamralipti"
  },
  {
    id: 3,
    text: "Can you find the stone tablet?",
    answer: "taxila"
  }
];
const QUESTION_AUDIO = [
  q1Audio,
  q2Audio,
  q3Audio
];
const ELDERS = [
  {
    id: "taxila",
    standing: taxilaStanding,
    waving: taxilaWaving
  },
  {
    id: "mathura",
    standing: mathuraStanding,
    waving: mathuraWaving
  },
  {
    id: "kausambi",
    standing: kausambiStanding,
    waving: kausambiWaving
  },
  {
    id: "pataliputra",
    standing: pataliputraStanding,
    waving: pataliputraWaving
  },
  {
    id: "tamralipti",
    standing: tamraliptiStanding,
    waving: tamraliptiWaving
  }
];
function UttarapathTreasureGame() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctElder, setCorrectElder] = useState("");
  const [completed, setCompleted] = useState(false);
  const [questionAudio, setQuestionAudio] = useState(null);
  const navigate = useNavigate();
  const currentQuestion = QUESTIONS[questionIndex];
  const handleTap = (elderId) => {
    if (elderId === currentQuestion.answer) {
      setCorrectElder(elderId);
      setTimeout(() => {
        if (questionIndex < QUESTIONS.length - 1) {
          setQuestionIndex((p) => p + 1);
          setCorrectElder("");
        } else {
          setCompleted(true);
        }
      }, 2e3);
    } else {
      if (questionAudio) {
        questionAudio.currentTime = 0;
        questionAudio.play().catch(() => {
        });
      }
    }
  };
  useEffect(() => {
    const audio = new Audio(QUESTION_AUDIO[questionIndex]);
    setQuestionAudio(audio);
    audio.play().catch(() => {
    });
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [questionIndex]);
  if (completed) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-amber-50 p-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-4 flex-wrap justify-center mb-8", children: ELDERS.map((elder) => /* @__PURE__ */ jsx(
        motion.img,
        {
          src: elder.waving,
          className: "w-40 h-auto object-contain",
          animate: {
            y: [0, -10, 0],
            rotate: [-2, 2, -2]
          },
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        },
        elder.id
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-2xl p-8 max-w-md", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", children: "🎉 Congratulations!" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg mb-6", children: "You did it! You found all the correct answers." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => navigate({ to: "/select" }),
            className: "px-6 py-3 rounded-full bg-green-500 text-white font-bold hover:scale-105 transition",
            children: "Continue →"
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-amber-50 p-6 flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-lg p-6 text-center mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-sm mb-2", children: [
        "Question ",
        questionIndex + 1,
        "/3"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold", children: currentQuestion.text })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-8 flex-wrap", children: ELDERS.map((elder) => /* @__PURE__ */ jsx(
      motion.button,
      {
        onClick: () => handleTap(elder.id),
        animate: correctElder === elder.id ? { scale: [1, 1.1, 1] } : {},
        transition: {
          duration: 1,
          repeat: correctElder === elder.id ? Infinity : 0
        },
        className: `rounded-3xl p-4 bg-white shadow-xl min-w-[160px] ${correctElder === elder.id ? "ring-8 ring-yellow-400" : ""}`,
        children: /* @__PURE__ */ jsx(
          motion.img,
          {
            src: correctElder === elder.id ? elder.waving : elder.standing,
            className: `w-56 h-auto object-contain transition-all duration-500 ${correctElder === elder.id ? "drop-shadow-[0_0_15px_gold] brightness-125" : ""}`,
            animate: correctElder === elder.id ? {
              rotate: [-5, 5, -5, 5, 0],
              scale: [1, 1.05, 1]
            } : {},
            transition: {
              duration: 1,
              repeat: correctElder === elder.id ? Infinity : 0
            }
          }
        )
      },
      elder.id
    )) })
  ] });
}
const uttarapathIntroVideo = "/assets/through%20gateway-Cztnj93u.mp4";
const boy1Intro = "/assets/traditional%20boy1-CYS1FHAL.png";
const boy2Intro = "/assets/modern%20boy2-BBiOL0jR.png";
const girl1Intro = "/assets/traditional%20girl1-CAExV7Jp.png";
const girl2Intro = "/assets/modern%20girl2-Cj7vIR5X.png";
const scholarHoldingTablet = "/assets/scholar%20holds%20tablet%20up-NFW_YX58.webm";
const tapToLearnMore = "/assets/learnmore-BCEfL0XM.mp3";
function useCharacter() {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    const saved = localStorage.getItem("selectedCharacter");
    if (saved) {
      setCharacter(JSON.parse(saved));
    }
  }, []);
  return character;
}
const boy1Animation = "/assets/boy1%20curious%20excitement-UfdJZAkT.webm";
const boy2Animation = "/assets/boy2%20curious%20excitement-D95_HjGW.webm";
const girl1Animation = "/assets/girl1%20curious%20excitement-gdWWz3xt.webm";
const girl2Animation = "/assets/girl2%20curious%20excitement-lcH15f2l.webm";
const scholarAnimation = "/assets/scholar%20speaking-DHy5BLB3.webm";
const closedPalm = "/assets/glowing%20palm%20leaf%20scroll%20closed-B60FJ1UY.png";
const beginWalkingBtn = "/assets/begin%20walking!-CcCnd64h.png";
const taxilachoice = "/assets/whatwouldyouliketosee-BUJ7wUBX.mp4";
const taxilaStudy = "/assets/university%20choice%20vid-2eg9IaAZ.mp4";
const taxilaMarket = "/assets/market%20choice%20video-Cj47VCss.mp4";
const studyBtn = "/assets/the%20great%20%20university%20button-ChYSbHGn.png";
const marketBtn = "/assets/the%20market%20button-DeLOyZsP.png";
const taxilaRetentionVideo = "/assets/question-puHIMxpi.mp4";
const answer1Img = "/assets/BOOKS_%20SCROLLS%20AND%20STARS-CQxFq2n9.png";
const answer2Img = "/assets/COOKING%20POTS%20AND%20SPICES-CdOyGgh-.png";
const answer3Img = "/assets/FISHING%20NETS%20AND%20BOATS-DNtz2eKO.png";
const scholarHandsdown = "/assets/scholar%20puts%20hands%20down-D-697L9n.webm";
const mathuraSpeak = "/assets/sculptor%20speaking-B8AJdBeo.webm";
const mathuraHold = "/assets/holds%20up%20lotus-DVJQTfeB.webm";
const mathuraDown = "/assets/sculptor%20puts%20hands%20down-t4gly_v3.webm";
const mathuraChoiceVideo = "/assets/mathura%20choice%20video-B329hDcR.mp4";
const mathuraQuestionVideo = "/assets/mathura%20question%20board-Bq3nGkPe.mp4";
const getCharacterVideo = (characterId) => {
  switch (characterId) {
    case "boy1":
      return boy1Animation;
    case "boy2":
      return boy2Animation;
    case "girl1":
      return girl1Animation;
    case "girl2":
      return girl2Animation;
    default:
      return boy1Animation;
  }
};
const scholarAnimations = {
  mathura: {
    speak: mathuraSpeak,
    hold: mathuraHold,
    down: mathuraDown
  }
  // varanasi: { ... },
  // kausambi: { ... },
  // pataliputra: { ... },
  // tamralipti: { ... },
};
function JourneyPage() {
  const params = Route.useParams();
  const character = useCharacter();
  const route = ROUTES[params.routeId];
  if (!route) {
    return null;
  }
  const [phase, setPhase] = useState({
    kind: "intro"
  });
  const [showTreasureGame, setShowTreasureGame] = useState(false);
  const [collected, setCollected] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const goToStop = (i) => {
    setPhase({
      kind: "stop",
      stopIndex: i,
      step: "arrival"
    });
  };
  const onStopComplete = (i) => {
    if (i + 1 < route.stops.length) {
      setPhase({
        kind: "travel",
        fromStopIndex: i,
        toStopIndex: i + 1
      });
    } else {
      setPhase({
        kind: "complete"
      });
    }
  };
  const addToken = (name, image) => {
    setCollected((c) => c.some((t) => t.name === name) ? c : [...c, {
      name,
      image
    }]);
  };
  if (showTreasureGame) {
    return /* @__PURE__ */ jsx(UttarapathTreasureGame, {});
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedCharacter");
      if (saved) {
        setSelectedCharacter(JSON.parse(saved));
      }
    }
  }, []);
  selectedCharacter?.characterId === "boy1" ? boy1 : selectedCharacter?.characterId === "boy2" ? boy2 : selectedCharacter?.characterId === "girl1" ? girl1 : selectedCharacter?.characterId === "girl2" ? girl2 : boy1;
  if (phase.kind === "intro") {
    return /* @__PURE__ */ jsx(IntroScreen, { route, onStart: () => {
      goToStop(0);
    } });
  }
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(TopBar, { route, collected }),
    phase.kind === "interlude" && /* @__PURE__ */ jsx(InterludeScreen, { route, interlude: route.stops[phase.beforeStopIndex].interlude, onContinue: () => goToStop(phase.beforeStopIndex) }),
    phase.kind === "stop" && /* @__PURE__ */ jsx(StopScreen, { route, stopIndex: phase.stopIndex, step: phase.step, character, setStep: (step) => setPhase({
      kind: "stop",
      stopIndex: phase.stopIndex,
      step
    }), onTokenCollected: addToken, onComplete: () => onStopComplete(phase.stopIndex) }, phase.stopIndex),
    phase.kind === "travel" && /* @__PURE__ */ jsx(TravelScreen, { route, fromIndex: phase.fromStopIndex, toIndex: phase.toStopIndex, character, onArrive: () => {
      goToStop(phase.toStopIndex);
    } })
  ] });
}
function TopBar({
  route,
  collected
}) {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-30 border-b-2 border-border bg-card/90 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/select", className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "←" }),
      " Map"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "block h-3 w-3 rounded-full", style: {
        backgroundColor: route.hex
      } }),
      /* @__PURE__ */ jsx("span", { className: "font-bold", children: route.name })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5", "aria-label": "Treasures collected", children: route.stops.map((s) => /* @__PURE__ */ jsx("span", { className: `grid h-8 w-8 place-items-center rounded-full border-2 text-base transition ${collected.some((t) => t.name === s.token.name) ? "bg-secondary border-foreground scale-100" : "bg-muted border-border opacity-40"}`, title: s.token.name, children: (() => {
      const token = collected.find((t) => t.name === s.token.name);
      return token ? /* @__PURE__ */ jsx("img", { src: token.image, alt: token.name, className: "h-6 w-6 object-contain" }) : "·";
    })() }, s.id)) })
  ] }) });
}
function IntroScreen({
  route,
  onStart
}) {
  const [videoFinished, setVideoFinished] = useState(false);
  const [currentDot, setCurrentDot] = useState(0);
  const [showButton, setShowButton] = useState(false);
  useRef(null);
  useRef(null);
  useEffect(() => {
    if (!videoFinished) return;
    let index = 0;
    const timer = setInterval(() => {
      index++;
      if (index >= route.pathDots.length) {
        clearInterval(timer);
        return;
      }
      setCurrentDot(index);
    }, 1200);
    return () => clearInterval(timer);
  }, [videoFinished]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "fixed inset-0 z-[99999] overflow-hidden bg-black", style: {
    width: "100vw",
    height: "100vh"
  }, children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
    /* @__PURE__ */ jsx("video", { src: uttarapathIntroVideo, autoPlay: true, playsInline: true, style: {
      position: "fixed",
      inset: 0,
      width: "100vw",
      height: "100vh",
      objectFit: "cover"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[10001] pointer-events-none", children: [
      /* @__PURE__ */ jsx("p", { className: "absolute top-5 left-5 text-white text-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 right-8 pointer-events-auto", children: /* @__PURE__ */ jsx("button", { onClick: onStart, children: /* @__PURE__ */ jsx("img", { src: beginWalkingBtn, className: "w-72" }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 flex min-h-[80vh] flex-col justify-end p-4 sm:p-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 flex items-center justify-between gap-3", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold drop-shadow-lg", style: {
        color: "#fff",
        textShadow: "0 2px 8px rgba(0,0,0,0.8)"
      } }) }),
      videoFinished && showButton && /* @__PURE__ */ jsx("button", { onClick: onStart, style: {
        position: "fixed",
        top: "100px",
        left: "100px",
        width: "300px",
        height: "100px",
        background: "red",
        color: "white",
        fontSize: "30px",
        zIndex: 999999
      }, children: "CLICK ME" })
    ] }) })
  ] }) }) });
}
function InterludeScreen({
  route,
  interlude,
  onContinue
}) {
  return /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-4 py-12", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border-4 border-border bg-card p-8 text-center shadow-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 grid h-24 w-24 place-items-center rounded-full bg-secondary text-6xl animate-shimmer", style: {
      color: route.hex
    }, children: interlude.emoji }),
    /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold", style: {
      color: route.hex
    }, children: interlude.title }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-xl text-lg leading-relaxed text-foreground/90", children: interlude.narration }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center justify-center gap-3", children: /* @__PURE__ */ jsx("button", { onClick: onContinue, className: "transition-transform hover:scale-105", children: /* @__PURE__ */ jsx("img", { src: continueBtn, alt: "Continue", className: "w-56 h-auto" }) }) })
  ] }) });
}
function StopScreen({
  route,
  stopIndex,
  step,
  setStep,
  onTokenCollected,
  onComplete,
  character
}) {
  const stop = route.stops[stopIndex];
  const scholar = scholarAnimations[stop.id] ?? {
    speak: scholarAnimation,
    hold: scholarHoldingTablet,
    down: scholarHandsdown
  };
  const [showHandsDown, setShowHandsDown] = useState(false);
  const [showTablet, setShowTablet] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const videoRef = useRef(null);
  const [taxilaVideoEnded, setTaxilaVideoEnded] = useState(stop.id !== "taxila" && stop.id !== "mathura");
  const [showScholar, setShowScholar] = useState(false);
  const [keepScholarVisible, setKeepScholarVisible] = useState(false);
  useEffect(() => {
    setShowScholar(false);
    const timer = setTimeout(() => {
      setShowScholar(true);
    }, 1e4);
    return () => clearTimeout(timer);
  }, [stopIndex]);
  useEffect(() => {
    setTaxilaVideoEnded(stop.id !== "taxila" && stop.id !== "mathura");
  }, [stop.id]);
  const [showVideoContinue, setShowVideoContinue] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: stop.id === "taxila" || stop.id === "mathura" ? "relative w-screen h-screen overflow-hidden" : "relative mx-auto w-full max-w-5xl min-h-[80vh] overflow-hidden rounded-3xl border-4 border-border shadow-2xl", children: [
    stop.video ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("video", { ref: videoRef, src: stop.video, autoPlay: true, playsInline: true, className: stop.id === "taxila" || stop.id === "mathura" ? "fixed inset-0 w-screen h-screen object-cover" : "absolute inset-0 w-screen h-screen object-cover", onEnded: () => {
        setShowVideoContinue(true);
      } }),
      showVideoContinue && /* @__PURE__ */ jsx("div", { className: "fixed bottom-8 right-8 z-[10050]", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => {
        setShowVideoContinue(false);
        setStep("heritage");
      } }) })
    ] }) : /* @__PURE__ */ jsx("img", { src: stop.scene, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    step !== "video" && /* @__PURE__ */ jsx("div", { className: "fixed z-[100100] pointer-events-none", style: {
      left: "-180px",
      bottom: "0px"
    }, children: /* @__PURE__ */ jsx("video", { src: getCharacterVideo(character?.characterId), autoPlay: true, loop: true, muted: true, playsInline: true, className: "h-96 w-auto object-contain" }) }),
    showScholar && /* @__PURE__ */ jsx("div", { className: stop.id === "taxila" || stop.id === "mathura" ? "fixed z-[1] pointer-events-none" : "absolute z-20 pointer-events-none", style: {
      right: "30px",
      bottom: "0px"
    }, children: step !== "goodbye" ? /* @__PURE__ */ jsx("video", { src: scholar.speak, autoPlay: true, loop: true, muted: true, playsInline: true, className: "h-96 w-auto object-contain" }) : /* @__PURE__ */ jsx(ScholarGoodbye, { tokenImage: stop.token.image, holdVideo: scholar.hold, downVideo: scholar.down }) }),
    stop.id === "taxila" && /* @__PURE__ */ jsx(Fragment, {}),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 rounded-2xl bg-card/95 px-4 py-2", children: [
      "          ",
      /* @__PURE__ */ jsxs("p", { className: "text-xs uppercase", children: [
        "Stop ",
        stopIndex + 1,
        " of ",
        route.stops.length
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", style: {
        color: route.hex
      }, children: stop.name })
    ] }),
    /* @__PURE__ */ jsx("div", { className: stop.id === "taxila" || stop.id === "mathura" ? "absolute inset-0 z-[10002] pointer-events-auto" : "absolute inset-0 z-[100] pointer-events-auto", children: /* @__PURE__ */ jsx(StopBody, { taxilaVideoEnded, route, stop, step, character, setStep, onTokenCollected, onComplete, videoRef }) })
  ] }) });
}
function ScholarGoodbye({
  tokenImage,
  holdVideo,
  downVideo
}) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (stage !== 1) return;
    const timer = setTimeout(() => {
      setStage(2);
    }, 2e4);
    return () => clearTimeout(timer);
  }, [stage]);
  useEffect(() => {
    setTimeout(() => {
      setStage(1);
    }, 1500);
    setTimeout(() => {
      setStage(2);
    }, 4e4);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    stage === 0 && /* @__PURE__ */ jsx("video", { src: holdVideo, autoPlay: true, muted: true, playsInline: true, className: "h-96 w-auto object-contain", onEnded: () => setStage(1) }),
    stage === 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("video", { src: downVideo, autoPlay: true, muted: true, playsInline: true, className: "h-96 w-auto object-contain" }),
      /* @__PURE__ */ jsx("div", { className: "fixed z-[9999]", style: {
        left: "50%",
        top: "45%",
        transform: "translate(-50%, -50%)"
      }, children: /* @__PURE__ */ jsx("img", { src: tokenImage, alt: "Stone Tablet", className: "animate-tokenGlow", style: {
        width: "200px"
        // change size here
      } }) })
    ] })
  ] });
}
function ElderBubble({
  emoji,
  name,
  lines,
  color
}) {
  lines.join(" ");
  return /* @__PURE__ */ jsx("div", { className: "flex gap-4 animate-float-up", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-2 flex items-center justify-between gap-2", children: /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-wider", style: {
      color: "#fff",
      textShadow: "0 1px 4px rgba(0,0,0,0.8)"
    }, children: name }) }),
    lines.map((l, i) => /* @__PURE__ */ jsx("p", { className: "mb-2 text-lg leading-relaxed last:mb-0", style: {
      color: "#fff",
      textShadow: "0 2px 6px rgba(0,0,0,0.8)"
    }, children: l }, i))
  ] }) });
}
function StopBody({
  route,
  stop,
  step,
  character,
  setStep,
  onTokenCollected,
  onComplete,
  videoRef,
  taxilaVideoEnded
}) {
  const choiceVideoRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState("choice");
  stop.id === "taxila" ? selectedVideo === "choice" ? taxilachoice : selectedVideo === "option1" ? taxilaStudy : selectedVideo === "option2" ? taxilaMarket : taxilaRetentionVideo : stop.id === "mathura" ? selectedVideo === "choice" ? mathuraChoiceVideo : selectedVideo === "option1" ? mathuraTempleVideo : selectedVideo === "option2" ? mathuraSculptorVideo : mathuraQuestionVideo : "";
  useEffect(() => {
    const video = choiceVideoRef.current;
    if (!video) return;
    video.load();
    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Video autoplay blocked:", err);
      }
    };
    playVideo();
  }, [selectedVideo]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
  const [showHandsDown, setShowHandsDown] = useState(false);
  const [showTablet, setShowTablet] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [wrongTries, setWrongTries] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showHeritage, setShowHeritage] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState(stop.retention.options);
  const [choiceVideoEnded, setChoiceVideoEnded] = useState(false);
  const [selectedVideoEnded, setSelectedVideoEnded] = useState(false);
  const audioRef = useRef(null);
  const [canContinue, setCanContinue] = useState(true);
  const [showGoodbyeContinue, setShowGoodbyeContinue] = useState(false);
  useEffect(() => {
    if (step === "goodbye") {
      setShowGoodbyeContinue(false);
      const timer = setTimeout(() => {
        setShowGoodbyeContinue(true);
      }, 3e3);
      return () => clearTimeout(timer);
    }
  }, [step]);
  useEffect(() => {
    console.log("selectedVideo changed to:", selectedVideo);
  }, [selectedVideo]);
  const heritageAudioMap = {
    //taxila:taxiladialogue2 ,
    // mathura: mathuraHeritageAudio,
    //varanasi: varanasiHeritageAudio,
  };
  const playAudio = (src) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(src);
    audioRef.current.play().catch((err) => {
      console.error("Audio play failed:", err);
    });
  };
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  useEffect(() => {
    if (step === "greet") {
      setCanContinue(true);
    }
  }, [step]);
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);
  useEffect(() => {
    if (step === "heritage" && !showHeritage) {
      playAudio(tapToLearnMore);
    }
  }, [step, showHeritage]);
  if (step === "greet") {
    return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
      /* @__PURE__ */ jsx(ElderBubble, { emoji: stop.elderEmoji, name: stop.elder, lines: stop.intro, color: route.hex }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 right-8 z-50", children: canContinue && /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => {
        stopAudio();
        setStep("heritage");
      } }) })
    ] });
  }
  if (step === "heritage") {
    return /* @__PURE__ */ jsx(Fragment, { children: !showHeritage ? (
      // Closed Palm
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center z-30", children: /* @__PURE__ */ jsx("img", { src: closedPalm, alt: "Closed Palm", className: "h-36 w-auto cursor-pointer animate-pulse", style: {
        filter: `
                drop-shadow(0 0 10px ${route.hex})
                drop-shadow(0 0 25px ${route.hex})
                drop-shadow(0 0 45px ${route.hex})
              `
      }, onClick: () => {
        setShowHeritage(true);
        const audio = heritageAudioMap[stop.id];
        if (audio) playAudio(audio);
      } }) })
    ) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/80", children: [
      /* @__PURE__ */ jsx("video", { src: stop.heritageVideo, autoPlay: true, playsInline: true, className: "w-[80%] h-[80%] object-contain animate-float-up", onEnded: () => {
        stopAudio();
        setShowHeritage(false);
        setStep("video");
      } }),
      /* @__PURE__ */ jsx("div", { className: "fixed bottom-8 left-0 right-0 flex justify-center z-[10000]", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => {
        stopAudio();
        setShowHeritage(false);
        setStep("video");
      } }) })
    ] }) }) });
  }
  if (step === "scholar") {
    return /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-50", children: [
      /* @__PURE__ */ jsx("img", { src: stop.scene, className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-10 bottom-0 flex flex-col items-center", children: !showHandsDown ? /* @__PURE__ */ jsx("video", { src: scholarHoldingTablet, autoPlay: true, muted: true, playsInline: true, className: "h-[420px]", onEnded: () => {
        setShowHandsDown(true);
        setShowTablet(true);
        setShowContinue(true);
      } }) : /* @__PURE__ */ jsx("video", { src: scholarHandsdown, autoPlay: true, loop: true, muted: true, playsInline: true, className: "h-[420px]" }) }),
      showTablet && /* @__PURE__ */ jsx("img", { src: stop.token.image, alt: stop.token.name, className: "\r\n      absolute\r\n      left-1/2\r\n      top-1/2\r\n      -translate-x-1/2\r\n      -translate-y-1/2\r\n      w-56\r\n      animate-pulse\r\n      drop-shadow-[0_0_20px_gold]\r\n      z-[100]\r\n    " }),
      showContinue && /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 right-8 z-[120]", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => {
        setStep("token");
      } }) })
    ] });
  }
  if (step === "token") {
    return /* @__PURE__ */ jsxs("div", { className: "space-y-4  mt-75", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border-2 border-border bg-card p-8 text-center shadow-md animate-token-pop", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-3 grid h-32 w-32 place-items-center rounded-full text-6xl shadow-2xl", style: {
          backgroundColor: route.hex + "33",
          color: route.hex,
          border: `4px solid ${route.hex}`
        }, children: [
          /* @__PURE__ */ jsx("img", { src: stop.token.image, alt: stop.token.name, className: "h-24 w-24 object-contain" }),
          "          "
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-muted-foreground", children: "You collected" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", style: {
          color: route.hex
        }, children: stop.token.name })
      ] }),
      /* @__PURE__ */ jsx(ElderBubble, { emoji: stop.elderEmoji, name: stop.elder, lines: [stop.token.line], color: route.hex }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-21 right-18 z-50", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => {
        stopAudio();
        onTokenCollected(stop.token.name, stop.token.image);
        onComplete();
      } }) })
    ] });
  }
  if (step === "video") {
    let currentVideo2 = "";
    if (stop.id === "taxila") {
      currentVideo2 = selectedVideo === "choice" ? taxilachoice : selectedVideo === "option1" ? taxilaStudy : selectedVideo === "option2" ? taxilaMarket : taxilaRetentionVideo;
    }
    if (stop.id === "mathura") {
      currentVideo2 = selectedVideo === "choice" ? mathuraChoiceVideo : selectedVideo === "option1" ? mathuraTempleVideo : selectedVideo === "option2" ? mathuraSculptorVideo : mathuraQuestionVideo;
    }
    return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[10000] pointer-events-none", children: [
      /* @__PURE__ */ jsx("video", { ref: choiceVideoRef, src: currentVideo2, autoPlay: true, playsInline: true, muted: false, preload: "auto", className: "absolute inset-0 h-full w-full object-cover z-0 pointer-events-none", onEnded: () => {
        console.log("ENDED:", selectedVideo);
        if (selectedVideo === "choice") {
          console.log("Choice ended");
          setChoiceVideoEnded(true);
        } else if (selectedVideo === "option1" || selectedVideo === "option2") {
          console.log("Study/Market ended");
          setSelectedVideoEnded(true);
        } else if (selectedVideo === "retention") {
          console.log("Retention ended");
          setSelectedVideoEnded(true);
        }
      } }, `${stop.id}-${selectedVideo}`),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-[100000] pointer-events-auto", children: [
        selectedVideo === "choice" && /* @__PURE__ */ jsxs(Fragment, { children: [
          stop.id === "taxila" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("button", { onClick: () => {
              setSelectedVideo("option1");
              setChoiceVideoEnded(false);
              setSelectedVideoEnded(false);
            }, className: "fixed left-[20%] bottom-[30%] z-[9999999]", children: /* @__PURE__ */ jsx("img", { src: studyBtn, className: "w-48" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              setSelectedVideo("option2");
              setChoiceVideoEnded(false);
              setSelectedVideoEnded(false);
            }, className: "fixed right-[20%] bottom-[30%] z-[9999999]", children: /* @__PURE__ */ jsx("img", { src: marketBtn, className: "w-48" }) })
          ] }),
          stop.id === "mathura" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("button", { onClick: () => {
              setSelectedVideo("option1");
              setChoiceVideoEnded(false);
              setSelectedVideoEnded(false);
            }, className: "fixed left-[20%] bottom-[30%] z-[9999999]", children: /* @__PURE__ */ jsx("img", { src: templeBtn, className: "w-48" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              setSelectedVideo("option2");
              setChoiceVideoEnded(false);
              setSelectedVideoEnded(false);
            }, className: "fixed right-[20%] bottom-[30%] z-[9999999]", children: /* @__PURE__ */ jsx("img", { src: sculptorBtnMathura, className: "w-48" }) })
          ] })
        ] }),
        selectedVideoEnded && selectedVideo !== "choice" && selectedVideo !== "retention" && /* @__PURE__ */ jsx("div", { className: "fixed bottom-8 right-8 z-[100000]", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => {
          setSelectedVideo("retention");
          setSelectedVideoEnded(false);
        } }) }),
        selectedVideo === "retention" && /* @__PURE__ */ jsxs(Fragment, { children: [
          stop.id === "taxila" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setAnsweredCorrectly(true), className: "absolute left-[12%] bottom-[30%] z-[99999]", children: /* @__PURE__ */ jsx("img", { src: answer1Img, alt: "Books, Scrolls and Stars", className: "w-52" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => setAnsweredCorrectly(false), className: "absolute left-[44%] bottom-[30%] z-[99999]", children: /* @__PURE__ */ jsx("img", { src: answer2Img, alt: "Cooking Pots and Spices", className: "w-52" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => setAnsweredCorrectly(false), className: "absolute right-[12%] bottom-[30%] z-[99999]", children: /* @__PURE__ */ jsx("img", { src: answer3Img, alt: "Fishing Nets and Boats", className: "w-52" }) })
          ] }),
          stop.id === "mathura" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setAnsweredCorrectly(false), className: "absolute left-[12%] bottom-[30%] z-[99999]", children: /* @__PURE__ */ jsx("img", { src: mathuraAnswer1, alt: "Fields of Cotton", className: "w-52" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => setAnsweredCorrectly(true), className: "absolute left-[44%] bottom-[30%] z-[99999]", children: /* @__PURE__ */ jsx("img", { src: mathuraAnswer2, alt: "Beautiful Stone Sculptures", className: "w-52" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => setAnsweredCorrectly(false), className: "absolute right-[12%] bottom-[30%] z-[99999]", children: /* @__PURE__ */ jsx("img", { src: mathuraAnswer3, alt: "Great Sailing Ships", className: "w-52" }) })
          ] }),
          answeredCorrectly === true && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-[100000]", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold text-yellow-300 animate-bounce", children: "🎉 Congratulations! 🎉" }),
            /* @__PURE__ */ jsx("div", { className: "fixed bottom-8 right-8 z-[100000]", children: /* @__PURE__ */ jsx("button", { onClick: () => setStep("goodbye"), children: /* @__PURE__ */ jsx("img", { src: continueBtn, alt: "Continue", className: "w-52" }) }) })
          ] }),
          answeredCorrectly === false && /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-1/2 -translate-x-1/2 z-[100000]", children: /* @__PURE__ */ jsx("p", { className: "rounded-xl bg-red-600 px-6 py-3 text-2xl font-bold text-white", children: "❌ Try Again!" }) })
        ] })
      ] })
    ] });
  }
  if (step === "goodbye") {
    return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx(ElderBubble, { emoji: stop.elderEmoji, name: stop.elder, lines: [stop.goodbye], color: route.hex }),
      showGoodbyeContinue && /* @__PURE__ */ jsx("div", { className: "absolute bottom-25 right-18 z-50", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => {
        stopAudio();
        setStep("token");
      } }) })
    ] });
  }
  return null;
}
function TravelScreen({
  route,
  fromIndex,
  toIndex,
  character,
  onArrive
}) {
  const [progress, setProgress] = useState(0);
  const start = route.pathDots[fromIndex];
  const end = route.pathDots[toIndex];
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);
  const x = start.x + (end.x - start.x) * progress / 100;
  const y = start.y + (end.y - start.y) * progress / 100;
  return /* @__PURE__ */ jsx("section", { className: "fixed inset-0 w-screen h-screen", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ jsx("video", { src: indiaMap, autoPlay: true, loop: true, muted: true, playsInline: true, className: "absolute inset-0 w-full h-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20" }),
    route.pathDots.map((dot, i) => /* @__PURE__ */ jsx("div", { className: `absolute h-4 w-4 rounded-full ${i === toIndex ? "bg-yellow-400 animate-pulse" : "bg-white"}`, style: {
      left: `${dot.x}%`,
      top: `${dot.y}%`,
      transform: "translate(-50%, -50%)"
    } }, i)),
    /* @__PURE__ */ jsx("div", { className: "absolute animate-bounce z-20", style: {
      left: `${x}%`,
      top: `${y}%`,
      transform: "translate(-50%, -90%)"
    }, children: /* @__PURE__ */ jsx("img", { src: character?.characterId === "boy1" ? boy1Intro : character?.characterId === "boy2" ? boy2Intro : character?.characterId === "girl1" ? girl1Intro : character?.characterId === "girl2" ? girl2Intro : boy1Intro, className: "w-16 h-auto" }) }),
    progress >= 100 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 right-8 z-30", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: onArrive }) })
  ] }) });
}
function PrimaryButton({
  onClick,
  disabled = false
}) {
  return /* @__PURE__ */ jsx("button", { onClick, disabled, className: `transition-transform hover:scale-105 ${disabled ? "opacity-50 pointer-events-none" : ""}`, children: /* @__PURE__ */ jsx("img", { src: continueBtn, alt: "Continue", className: "w-50 h-15" }) });
}
export {
  JourneyPage as component
};
