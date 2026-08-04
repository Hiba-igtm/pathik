import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { a as startBackgroundMusic } from "./backgroundMusic-GuqIjUJI.js";
import { useNavigate } from "@tanstack/react-router";
import { c as continueBtn, b as boy1, a as boy2, g as girl1, d as girl2 } from "./continuebutton-8ceKZ89G.js";
const kidsVideo = "/assets/video1-BMvbKaks.mp4";
const thisIsMeBtn = "/assets/let's%20travel!-Cq7R1LgX.png";
const startBtn = "/assets/START-D55LQKrx.png";
const bgMusic = "/assets/background-music-D6UZhbFV.mp3";
function Intro({ onStart }) {
  const videoRef = useRef(null);
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
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden flex items-center justify-center", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        ref: videoRef,
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "auto",
        className: "absolute inset-0 w-full h-full object-cover",
        src: kidsVideo,
        onTimeUpdate: (e) => {
          if (e.currentTarget.currentTime >= 5 && !showButton) {
            setShowButton(true);
          }
        }
      }
    ),
    !videoStarted && /* @__PURE__ */ jsx(
      motion.button,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        onClick: handleStartVideo,
        className: "relative z-20z bg-transparent border-none p-0",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: startBtn,
            alt: "Start",
            className: "w-64 h-auto"
          }
        )
      }
    ),
    videoStarted && showButton && /* @__PURE__ */ jsx(
      motion.button,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        onClick: onStart,
        className: "absolute bottom-60 right-160 z-20",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: thisIsMeBtn,
            alt: "Let's Travel",
            className: "w-75 h-25"
          }
        )
      }
    )
  ] });
}
const boySelect = "/assets/boySelect-Qm7ExRP5.png";
const girlSelect = "/assets/girlSelect-JyE75neL.png";
const characterBg = "/assets/pathik%20background-CQq9_L2O.png";
const AGES = [3, 4, 5, 6, 7, 8];
function CharacterCreator({
  onDone
}) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [c, setC] = useState({});
  const setField = (k, v) => {
    setC((prev) => ({ ...prev, [k]: v }));
    setTimeout(() => {
      setStep((s) => Math.min(s + 1, 3));
    }, 350);
  };
  const canFinish = c.name && c.age && c.gender && c.characterId;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "min-h-screen p-6 md:p-10 bg-cover bg-center bg-no-repeat",
      style: {
        backgroundImage: `url(${characterBg})`
      },
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          motion.h1,
          {
            initial: { y: -20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            className: "text-center text-3xl md:text-5xl font-display text-foreground mb-2",
            children: "Who is traveling today?"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground mb-8", children: "Tap to choose. You can change anything!" }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-card/70 backdrop-blur rounded-3xl p-6 md:p-10 shadow-xl border border-border space-y-8", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-center mb-2", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setStep(i),
              className: `h-3 w-10 rounded-full transition-all ${i === step ? "bg-primary w-16" : i < step ? "bg-accent" : "bg-border"}`
            },
            i
          )) }),
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "min-h-[260px] flex flex-col justify-center",
              children: [
                step === 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-2xl font-display text-center", children: "What's your name?" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      autoFocus: true,
                      value: c.name ?? "",
                      onChange: (e) => setC((p) => ({
                        ...p,
                        name: e.target.value
                      })),
                      placeholder: "Type your name...",
                      className: "w-full text-center text-2xl py-5 px-6 rounded-2xl border-4 border-primary/40 bg-background focus:border-primary outline-none font-display"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsx(
                    "button",
                    {
                      disabled: !c.name?.trim(),
                      onClick: () => setStep(1),
                      className: "transition-transform hover:scale-105 disabled:opacity-40",
                      children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: continueBtn,
                          alt: "Continue",
                          className: "w-52 h-auto"
                        }
                      )
                    }
                  ) })
                ] }),
                step === 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display text-center", children: "How old are you?" }),
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center flex-wrap gap-4", children: AGES.map((a) => /* @__PURE__ */ jsx(
                    motion.button,
                    {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.95 },
                      onClick: () => setField("age", a),
                      className: `w-24 h-24 rounded-3xl text-4xl font-display border-4 ${c.age === a ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`,
                      children: a
                    },
                    a
                  )) })
                ] }),
                step === 2 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display text-center", children: "Boy or Girl?" }),
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-6", children: ["boy", "girl"].map((g) => /* @__PURE__ */ jsxs(
                    motion.button,
                    {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      onClick: () => setField("gender", g),
                      className: `p-4 rounded-3xl border-4 ${c.gender === g ? "border-primary bg-primary/10" : "border-border bg-card"}`,
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: g === "boy" ? boySelect : girlSelect,
                            alt: g,
                            className: "w-[220px] h-[220px] object-contain"
                          }
                        ),
                        /* @__PURE__ */ jsx("div", { className: "text-xl font-display capitalize mt-2", children: g })
                      ]
                    },
                    g
                  )) })
                ] }),
                step === 3 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display text-center", children: "Choose Your Character" }),
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-6", children: c.gender === "boy" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      motion.button,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        onClick: () => setC((prev) => ({
                          ...prev,
                          characterId: "boy1"
                        })),
                        className: `p-4 rounded-3xl border-4 ${c.characterId === "boy1" ? "border-primary" : "border-border"}`,
                        children: /* @__PURE__ */ jsx("img", { src: boy1, className: "w-52 h-60" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.button,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        onClick: () => setC((prev) => ({
                          ...prev,
                          characterId: "boy2"
                        })),
                        className: `p-4 rounded-3xl border-4 ${c.characterId === "boy2" ? "border-primary" : "border-border"}`,
                        children: /* @__PURE__ */ jsx("img", { src: boy2, className: "w-52 h-60" })
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      motion.button,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        onClick: () => setC((prev) => ({
                          ...prev,
                          characterId: "girl1"
                        })),
                        className: `p-4 rounded-3xl border-4 ${c.characterId === "girl1" ? "border-primary" : "border-border"}`,
                        children: /* @__PURE__ */ jsx("img", { src: girl1, className: "w-52 h-60" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.button,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        onClick: () => setC((prev) => ({
                          ...prev,
                          characterId: "girl2"
                        })),
                        className: `p-4 rounded-3xl border-4 ${c.characterId === "girl2" ? "border-primary" : "border-border"}`,
                        children: /* @__PURE__ */ jsx("img", { src: girl2, className: "w-52 h-60" })
                      }
                    )
                  ] }) })
                ] })
              ]
            },
            step
          ) }),
          canFinish && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              className: "text-center pt-4",
              children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: async () => {
                    c.name || "Traveler";
                    ({
                      name: c.name,
                      age: c.age,
                      gender: c.gender,
                      skin: c.skin,
                      hair: c.hair
                    });
                    localStorage.setItem(
                      "selectedCharacter",
                      JSON.stringify({
                        ...c,
                        skin: "light",
                        hair: "short"
                      })
                    );
                    navigate({ to: "/select" });
                  },
                  className: "hover:scale-105 transition-transform",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: thisIsMeBtn,
                      alt: "This is me",
                      className: "w-64 h-auto"
                    }
                  )
                }
              )
            }
          )
        ] }) })
      ] })
    }
  );
}
function Index() {
  const [phase, setPhase] = useState("intro");
  const [character, setCharacter] = useState(null);
  const [route, setRoute] = useState(null);
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    duration: 0.5
  }, children: [
    phase === "intro" && /* @__PURE__ */ jsx(Intro, { onStart: () => setPhase("create") }),
    phase === "create" && /* @__PURE__ */ jsx(CharacterCreator, { onDone: (c) => {
      setCharacter(c);
      setPhase("map");
    } })
  ] }, phase) });
}
export {
  Index as component
};
