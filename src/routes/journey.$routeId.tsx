import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import taxilaIntro from "@/assets/audio/taxila intro.mp3";
//import taxiladialogue1 from "@/assets/audio/td1.mp3";
//import taxiladialogue2 from "@/assets/audio/td2.mp3";
//import taxilachoice1 from "@/assets/audio/tc1.mp3";
//import taxilachoice2 from "@/assets/audio/tc2.mp3";
//import taxilaquestion1 from "@/assets/audio/tq1.mp3";
import dakshinapathIntro from "@/assets/audio/dakshinapath intro.mp3";
import pubbantapathIntro from "@/assets/audio/pubbantapath intro.mp3";
import apparantapathIntro from "@/assets/audio/apparantapath intro.mp3";
import tapToLearnMore from "@/assets/audio/learnmore.mp3";
import { useEffect, useMemo, useState, useRef } from "react";
import { ROUTES, type RouteId, type Stop, type Route as RouteData } from "@/lib/routes-data";
import { useNarrator } from "@/hooks/use-narrator";
import indiaMap from "@/assets/glowing route map.mp4";
//import scholarCharacter from "@/assets/scholar.png";
import { useCharacter } from "@/hooks/useCharacter";
import { Avatar } from "@/components/game/Avatar";
import UttarapathTreasureGame from "@/components/game/UttarapathGame3";
import boy1Animation from "@/assets/boy1 curious excitement.webm";
import boy2Animation from "@/assets/boy2 curious excitement.webm";
import girl1Animation from "@/assets/girl1 curious excitement.webm";
import girl2Animation from "@/assets/girl2 curious excitement.webm";
import uttarapathIntroVideo from "@/assets/through gateway.mp4";
import boy1Intro from "@/assets/traditional boy1.png";
import boy2Intro from "@/assets/modern boy2.png";
import girl1Intro from "@/assets/traditional girl1.png";
import girl2Intro from "@/assets/modern girl2.png";
import scholarAnimation from "@/assets/scholar speaking.webm";
import age34Img from "@/assets/activity1.jpg";
import age56Img from "@/assets/activity2.png";
import age78Img from "@/assets/activity3.jpg";
import closedPalm from "@/assets/glowing palm leaf scroll closed.png";
import palmOpenVideo from "@/assets/palm leaf scroll vid.mp4";
import mathuraHeritageVideo from "@/assets/mathura heritage moment.mp4";
import beginWalkingBtn from "@/assets/begin walking!.png";
import continueBtn from "@/assets/continuebutton.png";
import taxilachoice from "@/assets/whatwouldyouliketosee.mp4";
import taxilaStudy from "@/assets/university choice vid.mp4";
import taxilaMarket from "@/assets/market choice video.mp4";
import studyBtn from "@/assets/the great  university button.png";
import marketBtn from "@/assets/the market button.png";
import taxilaRetentionVideo from "@/assets/question.mp4";
import answer1Img from "@/assets/BOOKS, SCROLLS AND STARS.png";
import answer2Img from "@/assets/COOKING POTS AND SPICES.png";
import answer3Img from "@/assets/FISHING NETS AND BOATS.png";
import scholarHoldingTablet from "@/assets/scholar holds tablet up.webm";
import scholarWaving from "@/assets/scholar waves bye.webm";
import scholarHandsdown from "@/assets/scholar puts hands down.webm";
import mathuraSpeak from "@/assets/sculptor speaking.webm";
import mathuraHold from "@/assets/holds up lotus.webm";
import mathuraDown from "@/assets/sculptor puts hands down.webm";
import mathuraChoiceVideo from "@/assets/mathura choice video.mp4";
import mathuraTempleVideo from "@/assets/mathura temple choice video.mp4";
import mathuraSculptorVideo from "@/assets/mathura sculpting choice videos.mp4";
import mathuraQuestionVideo from "@/assets/mathura question board.mp4";
import lotusToken from "@/assets/lotus motif glowing (1).png";
import templeBtn from "@/assets/the temple.png";
import sculptorBtnMathura from "@/assets/sculptor_.png";
import type { RefObject } from "react";
import mathuraAnswer1 from "@/assets/FIELDS OF COTTON.png";
import mathuraAnswer2 from "@/assets/BEAUTIFUL STONE SCULPTURES.png";
import mathuraAnswer3 from "@/assets/GREAT SAILING SHIPS.png";


import kausambiSpeak from "@/assets/kausambi/scholar speaking.webm";
import kausambiHold from "@/assets/kausambi/scholar holds tablet up.webm";
import kausambiDown from "@/assets/kausambi/scholar puts hands down.webm";

import varanasiSpeak from "@/assets/varanasi/scholar speaking.webm";
import varanasiHold from "@/assets/varanasi/scholar holds tablet up.webm";
import varanasiDown from "@/assets/varanasi/scholar puts hands down.webm";

import pataliputraSpeak from "@/assets/pataliputra/scholar speaking.webm";
import pataliputraHold from "@/assets/pataliputra/scholar holds tablet up.webm";
import pataliputraDown from "@/assets/pataliputra/scholar puts hands down.webm";

import tamraliptiSpeak from "@/assets/tamralipti/scholar speaking.webm";
import tamraliptiHold from "@/assets/tamralipti/scholar holds tablet up.webm";
import tamraliptiDown from "@/assets/tamralipti/scholar puts hands down.webm";
import boy1 from "@/assets/boy1 (1).png";
import boy2 from "@/assets/boy2 (1).png";
import girl1 from "@/assets/girl1 (1).png";
import girl2 from "@/assets/girl2.png";
import { stopBackgroundMusic } from "@/lib/backgroundMusic";
//import { speakText } from "@/lib/elevenlabs";
const getIntroCharacter = (characterId?: string) => {
  switch (characterId) {
    case "boy1":
      return boy1Intro;

    case "boy2":
      return boy2Intro;

    case "girl1":
      return girl1Intro;

    case "girl2":
      return girl2Intro;

    default:
      return boy1Intro;
  }
};
const getCharacterVideo = (characterId?: string) => {
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
const getRouteIntroVideo = (routeId: string) => {
  switch (routeId) {
    case "uttarapath":
      return uttarapathIntroVideo;

    //case "dakshinapath":
      //return dakshinapathIntroVideo;

    //case "pubbantapath":
      //return pubbantapathIntroVideo;

    //case "aparantapath":
      //return aparantapathIntroVideo;

    default:
      return indiaMap;
  }
};
const scholarAnimations: Record<
  string,
  {
    speak: string;
    hold: string;
    down: string;
  }
> = {
  mathura: {
    speak: mathuraSpeak,
    hold: mathuraHold,
    down: mathuraDown,
  },

  // varanasi: { ... },
  // kausambi: { ... },
  // pataliputra: { ... },
  // tamralipti: { ... },
};
export const Route = createFileRoute("/journey/$routeId")({
  head: ({ params }) => {
    const r = ROUTES[params.routeId as RouteId];
    return {
    meta: [
  { title: r ? `${r.name} — ${r.tagline} — Yatra` : "Journey — Yatra" },
],
    };
  },
  component: JourneyPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background p-8 text-center">
      <div>
        <p className="mb-4 text-lg">That route is not in our story.</p>
        <Link to="/select" className="rounded-full bg-primary px-6 py-3 text-primary-foreground">
          Back to map
        </Link>
      </div>
    </div>
  ),
  loader: ({ params }) => {
    if (!(params.routeId in ROUTES)) throw notFound();
    return null;
  },
});

type Phase =
  | { kind: "intro" }
  | { kind: "travel"; fromStopIndex: number; toStopIndex: number }
  | { kind: "interlude"; beforeStopIndex: number }
  | { kind: "stop"; stopIndex: number; step: StopStep }
  | { kind: "diary"; stopIndex: number }
  | { kind: "complete" }
  | { kind: "activities" };

type StopStep =
  | "arrival"
  | "greet"
  | "heritage"
  | "video"
  | "retention"
  | "goodbye"
  | "token"
  | "scholar";
function JourneyPage() {
  const params = Route.useParams();
  const character = useCharacter();

  const route = ROUTES[params.routeId as RouteId];

if (!route) {
  return null;
}

const [phase, setPhase] = useState<Phase>({ kind: "intro" });
const [showTreasureGame, setShowTreasureGame] = useState(false);
const [collected, setCollected] = useState<
  { name: string; image: string }[]
>([]);
const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const goToStop = (i: number) => {
    setPhase({
    kind:"stop",
    stopIndex:i,
    step:"arrival"
})
  };

  const onStopComplete = (i: number) => {
  if (i + 1 < route.stops.length) {
    setPhase({
      kind: "travel",
      fromStopIndex: i,
      toStopIndex: i + 1,
    });
  } else {
    setPhase({
      kind: "complete",
    });
  }
};

 const advanceFromDiary = (i: number) => {
  if (i + 1 < route.stops.length) {
    setPhase({
      kind: "travel",
      fromStopIndex: i,
      toStopIndex: i + 1,
    });
  } else {
    setPhase({
      kind: "complete",
    });
  }
};

const addToken = (name: string, image: string) => {
  setCollected((c) =>
    c.some((t) => t.name === name)
      ? c
      : [...c, { name, image }]
  );
};
if (showTreasureGame) {
  return <UttarapathTreasureGame />;
}

useEffect(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("selectedCharacter");

    if (saved) {
      setSelectedCharacter(JSON.parse(saved));
    }
  }
}, []);

const characterImage =
  selectedCharacter?.characterId === "boy1"
    ? boy1
    : selectedCharacter?.characterId === "boy2"
    ? boy2
    : selectedCharacter?.characterId === "girl1"
    ? girl1
    : selectedCharacter?.characterId === "girl2"
    ? girl2
    : boy1;
  if (phase.kind === "intro") {
  return (
    <IntroScreen
      route={route}
      onStart={() => {
        goToStop(0);
      }}
    />
  );
}

return (
  <main className="min-h-screen bg-background text-foreground">
    <TopBar route={route} collected={collected} />

    {phase.kind === "interlude" && (
      <InterludeScreen
        route={route}
        interlude={route.stops[phase.beforeStopIndex].interlude!}
        onContinue={() => goToStop(phase.beforeStopIndex)}
      />
    )}

    {phase.kind === "stop" && (
      <StopScreen
        key={phase.stopIndex}
        route={route}
        stopIndex={phase.stopIndex}
        step={phase.step}
        character={character}
        setStep={(step) =>
          setPhase({
            kind: "stop",
            stopIndex: phase.stopIndex,
            step,
          })
        }
        onTokenCollected={addToken}
        onComplete={() => onStopComplete(phase.stopIndex)}
      />
    )}
{phase.kind === "travel" && (
  <TravelScreen
    route={route}
    fromIndex={phase.fromStopIndex}
    toIndex={phase.toStopIndex}
    character={character}
    onArrive={() => {
      goToStop(phase.toStopIndex);
    }}
  />
)}
    {/* Keep your travel, diary, complete, activities screens here */}
  </main>
);
}
function TopBar({
  route,
  collected,
}: {
  route: RouteData;
  collected: { name: string; image: string }[];
}) {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/select" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <span aria-hidden>←</span> Map
        </Link>
        <div className="flex items-center gap-2">
          <span className="block h-3 w-3 rounded-full" style={{ backgroundColor: route.hex }} />
          <span className="font-bold">{route.name}</span>
        </div>
        <div className="flex items-center gap-1.5" aria-label="Treasures collected">
          {route.stops.map((s) => (
            <span
              key={s.id}
              className={`grid h-8 w-8 place-items-center rounded-full border-2 text-base transition ${
                collected.some((t) => t.name === s.token.name) ? "bg-secondary border-foreground scale-100" : "bg-muted border-border opacity-40"
              }`}
              title={s.token.name}
            >
{(() => {
  const token = collected.find(
    (t) => t.name === s.token.name
  );

  return token ? (
    <img
      src={token.image}
      alt={token.name}
      className="h-6 w-6 object-contain"
    />
  ) : (
    "·"
  );
})()}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

//function NarratorButton({ text, label = "Read aloud" }: { text: string; label?: string }) {
  //const { speak, stop, isSpeaking, isLoading } = useNarrator();
  //return (
    //<button
      //onClick={() => (isSpeaking ? stop() : speak(text))}
      //className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-3 py-1.5 text-xs font-medium shadow-sm hover:bg-secondary"
      //aria-label={label}
    //>
      //<span aria-hidden>{isSpeaking ? "⏸" : isLoading ? "⋯" : "🔊"}</span>
      //{isSpeaking ? "Stop" : isLoading ? "Loading…" : label}
    //</button>
  //);
//}



 function IntroScreen({
  route,
  onStart,
}: {
  route: RouteData;
  onStart: () => void;
}) {
const [videoFinished, setVideoFinished] = useState(false);
const [currentDot, setCurrentDot] = useState(0);
const [showButton, setShowButton] = useState(false);

const audioRef = useRef<HTMLAudioElement | null>(null);
const videoRef = useRef<HTMLVideoElement | null>(null);


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
 return (
  <>

<section
  className="fixed inset-0 z-[99999] overflow-hidden bg-black"
  style={{
    width: "100vw",
    height: "100vh",
  }}
>
  <div className="absolute inset-0">
    <video
  src={uttarapathIntroVideo}
  autoPlay
  
  playsInline
  style={{
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  }}
/>

<div className="fixed inset-0 z-[10001] pointer-events-none">

  <p className="absolute top-5 left-5 text-white text-3xl">
    
  </p>

  <div className="absolute bottom-8 right-8 pointer-events-auto">
    <button onClick={onStart}>
      <img src={beginWalkingBtn} className="w-72" />
    </button>
  </div>

</div>
 

        {/* Iconic image fade 
        <div className="absolute right-4 top-4 w-40 sm:w-56 overflow-hidden rounded-2xl border-4 border-card shadow-2xl animate-float-up">

<img
  src={route.iconicImage}
  alt={route.name}
/>

          <p className="bg-card/95 px-2 py-1 text-center text-[10px] font-medium">{route.iconicCaption}</p>
        </div>*/}
{/* Dialogue overlaid on the map */}
        <div className="relative z-10 flex min-h-[80vh] flex-col justify-end p-4 sm:p-6">
           <div className="mx-auto w-full max-w-2xl">
            <div className="mb-3 flex items-center justify-between gap-3">
<h2 className="text-2xl font-bold drop-shadow-lg" style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
{/* {route.name} — {route.tagline} */}
              </h2>
            </div>


{videoFinished && showButton && (
  <button
    onClick={onStart}
    style={{
      position: "fixed",
      top: "100px",
      left: "100px",
      width: "300px",
      height: "100px",
      background: "red",
      color: "white",
      fontSize: "30px",
      zIndex: 999999,
    }}
  >
    CLICK ME
  </button>
)}
          </div>
        </div>
      </div>
    </section>
  </>
);
}

function InterludeScreen({
  route,
  interlude,
  onContinue,
}: {
  route: RouteData;
  interlude: { title: string; narration: string; emoji: string };
  onContinue: () => void;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <div className="rounded-3xl border-4 border-border bg-card p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-full bg-secondary text-6xl animate-shimmer" style={{ color: route.hex }}>
          {interlude.emoji}
        </div>
        <h2 className="mb-3 text-2xl font-bold" style={{ color: route.hex }}>
          {interlude.title}
        </h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-foreground/90">{interlude.narration}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
       <button
  onClick={onContinue}
  className="transition-transform hover:scale-105"
>
  <img
    src={continueBtn}
    alt="Continue"
    className="w-56 h-auto"
  />
</button>
        </div>
      </div>
    </section>
  );
}

function StopScreen({
  route,
  stopIndex,
  step,
  setStep,
  onTokenCollected,
  onComplete,
  character,
}: {
  route: RouteData;
  stopIndex: number;
  step: StopStep;
  setStep: (s: StopStep) => void;
onTokenCollected: (
  name: string,
  image: string
) => void;
  onComplete: () => void;
  character: any;
}) {
    const stop = route.stops[stopIndex];
const scholar =
  scholarAnimations[stop.id] ?? {
    speak: scholarAnimation,
    hold: scholarHoldingTablet,
    down: scholarHandsdown,
  };
const [showHandsDown, setShowHandsDown] = useState(false);
const [showTablet, setShowTablet] = useState(false);
const [showContinue, setShowContinue] = useState(false);const videoRef = useRef<HTMLVideoElement | null>(null);
const [taxilaVideoEnded, setTaxilaVideoEnded] =
  useState(
    stop.id !== "taxila" &&
    stop.id !== "mathura"
  );
  const [showScholar, setShowScholar] = useState(false);
const [keepScholarVisible, setKeepScholarVisible] = useState(false);
useEffect(() => {
  setShowScholar(false);

  const timer = setTimeout(() => {
    setShowScholar(true);
  }, 10000); // 3 seconds

  return () => clearTimeout(timer);
}, [stopIndex]);
useEffect(() => {
  setTaxilaVideoEnded(
    stop.id !== "taxila" &&
    stop.id !== "mathura"
  );
}, [stop.id]);
const [showVideoContinue, setShowVideoContinue] = useState(false);
 return (
  <div className="space-y-4">

    {/* Scene */}
<div
  className={
  stop.id === "taxila" || stop.id === "mathura"
  ? "relative w-screen h-screen overflow-hidden"
    : "relative mx-auto w-full max-w-5xl min-h-[80vh] overflow-hidden rounded-3xl border-4 border-border shadow-2xl"
}
>
{stop.video ? (
  <>
    <video
      ref={videoRef}
      src={stop.video}
      autoPlay
      playsInline
      className={
  stop.id === "taxila" || stop.id === "mathura"
    ? "fixed inset-0 w-screen h-screen object-cover"
    : "absolute inset-0 w-screen h-screen object-cover"
}
      onEnded={() => {
        setShowVideoContinue(true);
      }}
    />

    {showVideoContinue && (
  <div className="fixed bottom-8 right-8 z-[10050]">
    <PrimaryButton
      onClick={() => {
        setShowVideoContinue(false);
        setStep("heritage");
      }}
    />
  </div>
)}
  </>
) : (
  <img
    src={stop.scene}
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />
)}
{step !== "video" && (
  <div
   className="fixed z-[100100] pointer-events-none"
style={{
  left: "-180px",
  bottom: "0px",
}}
  >
    <video
      src={getCharacterVideo(character?.characterId)}
      autoPlay
      loop
      muted
      playsInline
      className="h-96 w-auto object-contain"
    />
  </div>
)}

{showScholar && (
<div
className={
  stop.id === "taxila" || stop.id === "mathura"
    ? "fixed z-[1] pointer-events-none"
    : "absolute z-20 pointer-events-none"
}
style={{
  right: "30px",
  bottom: "0px",
}}
>


{step !== "goodbye" ? (

     <video
src={scholar.speak}
  autoPlay
  loop
  muted
  playsInline
  className="h-96 w-auto object-contain"
/>

    ) : (

   <ScholarGoodbye
  tokenImage={stop.token.image}
  holdVideo={scholar.hold}
downVideo={scholar.down}
/>

    )}
  </div>
)}


        {/* Taxila characters ONLY */}
        {stop.id === "taxila" && (
         <>
  {/*
  <img
    src={scholarCharacter}
    className="absolute left-6 bottom-4 h-36 w-auto"
    style={{ transform: "translateX(20px)" }}
  />
  */}
</>
        )}



<div className="absolute top-4 right-4 rounded-2xl bg-card/95 px-4 py-2">          <p className="text-xs uppercase">
            Stop {stopIndex + 1} of {route.stops.length}
          </p>
          <h2 className="text-2xl font-bold" style={{ color: route.hex }}>
            {stop.name}
          </h2>
        </div>
<div
  className={
  stop.id === "taxila" || stop.id === "mathura"
    ? "absolute inset-0 z-[10002] pointer-events-auto"
    : "absolute inset-0 z-[100] pointer-events-auto"
}
>
  <StopBody
  taxilaVideoEnded={taxilaVideoEnded}
  route={route}
  stop={stop}
  step={step}
  character={character}
  setStep={setStep}
  onTokenCollected={onTokenCollected}
  onComplete={onComplete}
  videoRef={videoRef}
/>
</div>
      </div>

      {/* BODY */}
   {/* BODY */}


</div>
  );
}
function ScholarGoodbye({
  tokenImage,
  holdVideo,
  downVideo,
}: {
  tokenImage: string;
  holdVideo: string;
  downVideo: string;
}) {
  const [stage, setStage] = useState(0);
useEffect(() => {
  if (stage !== 1) return;

  const timer = setTimeout(() => {
    setStage(2);
  }, 20000); // tablet stays for 2 seconds

  return () => clearTimeout(timer);
}, [stage]);
  useEffect(() => {
    // After 1.5 seconds, show the glowing tablet
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1500);

    // After 4 seconds, play hands-down animation
    const t2 = setTimeout(() => {
      setStage(2);
    }, 40000);

   
  }, []);

return (
  <>
    {/* Holding animation */}
    {stage === 0 && (
      <video
        src={holdVideo}
        autoPlay
        muted
        playsInline
        className="h-96 w-auto object-contain"
        onEnded={() => setStage(1)}
      />
    )}

    {/* Hands down animation */}
    {stage === 1 && (
      <>
        <video
          src={downVideo}
          autoPlay
          muted
          playsInline
          className="h-96 w-auto object-contain"
        />

        {/* Glowing Stone Tablet */}
        <div
          className="fixed z-[9999]"
          style={{
            left: "50%",
            top: "45%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={tokenImage}
            alt="Stone Tablet"
            className="animate-tokenGlow"
            style={{
              width: "200px", // change size here
            }}
          />
        </div>
      </>
    )}
  </>
);
}
function ElderBubble({ emoji, name, lines, color }: { emoji: string; name: string; lines: string[]; color: string }) {
  const text = lines.join(" ");
  return (
    <div className="flex gap-4 animate-float-up">
     
<div className="flex-1 text-white">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>{name}</p>
        </div>
        {lines.map((l, i) => (
        <p key={i} className="mb-2 text-lg leading-relaxed last:mb-0" style={{ color: "#fff", textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}>{l}</p>
        ))}
      </div>
    </div>
  );
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
  taxilaVideoEnded,
}: {
  route: RouteData;
  stop: Stop;
  step: StopStep;
  character: any;
  setStep: (s: StopStep) => void;
onTokenCollected: (name: string, image: string) => void;
  onComplete: () => void;
taxilaVideoEnded: boolean;
videoRef: RefObject<HTMLVideoElement | null>;
}) {
const choiceVideoRef = useRef<HTMLVideoElement | null>(null);

const [selectedVideo, setSelectedVideo] = useState<
  "choice" | "option1" | "option2" | "retention"
>("choice");
const currentVideo =
  stop.id === "taxila"
    ? selectedVideo === "choice"
      ? taxilachoice
      : selectedVideo === "option1"
      ? taxilaStudy
      : selectedVideo === "option2"
      ? taxilaMarket
      : taxilaRetentionVideo

    : stop.id === "mathura"
    ? selectedVideo === "choice"
      ? mathuraChoiceVideo
      : selectedVideo === "option1"
      ? mathuraTempleVideo
      : selectedVideo === "option2"
      ? mathuraSculptorVideo
      : mathuraQuestionVideo

    : "";
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
    const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);
    const [showHandsDown, setShowHandsDown] = useState(false);
const [showTablet, setShowTablet] = useState(false);
const [showContinue, setShowContinue] = useState(false);
  const [wrongTries, setWrongTries] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showHeritage, setShowHeritage] = useState(false);const [shuffledOptions, setShuffledOptions] = useState(stop.retention.options);
const [choiceVideoEnded, setChoiceVideoEnded] = useState(false);
const [selectedVideoEnded, setSelectedVideoEnded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
const [canContinue, setCanContinue] = useState(true);

const [showGoodbyeContinue, setShowGoodbyeContinue] = useState(false);
useEffect(() => {
  if (step === "goodbye") {
    setShowGoodbyeContinue(false);

    const timer = setTimeout(() => {
      setShowGoodbyeContinue(true);
    }, 3000); // wait for both animations

    return () => clearTimeout(timer);
  }
}, [step]);

useEffect(() => {
  console.log("selectedVideo changed to:", selectedVideo);
}, [selectedVideo]);
const playChoiceAudio = (index: number, video?: string) => {
  const choiceAudioMap: Record<number, string> = {
   // 0: taxilachoice1,
    //1: taxilachoice2,
  };
const audioSrc =
  stop.id === "taxila"
    ? choiceAudioMap[index]
    : undefined;

if (!audioSrc) return;
  

  

  const audio = new Audio(audioSrc);

  audio.play().catch(console.error);

  audio.onended = () => {
   
  };
};
const heritageAudioMap: Record<string, string> = {
  //taxila:taxiladialogue2 ,
 // mathura: mathuraHeritageAudio,
  //varanasi: varanasiHeritageAudio,
};
const playAudio = (src: string) => {
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

// console.log({
//   step,
//   stop: stop.id,
//   taxilaVideoEnded,
// });

 if (step === "greet") {

  // Hide everything while the Taxila video is playing


  return (
<div className="relative w-full h-full">
      <ElderBubble
        emoji={stop.elderEmoji}
        name={stop.elder}
        lines={stop.intro}
        color={route.hex}
      />

      <div className="absolute bottom-8 right-8 z-50">
  {canContinue && (
   <PrimaryButton
  onClick={() => {
    stopAudio();
    setStep("heritage");
  }}
/>
  )}
</div>
    </div>
  );
}

if (step === "heritage") {
  return (
    <>
      {!showHeritage ? (
        // Closed Palm
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <img
            src={closedPalm}
            alt="Closed Palm"
            className="h-36 w-auto cursor-pointer animate-pulse"
            style={{
              filter: `
                drop-shadow(0 0 10px ${route.hex})
                drop-shadow(0 0 25px ${route.hex})
                drop-shadow(0 0 45px ${route.hex})
              `,
            }}
            onClick={() => {
              setShowHeritage(true);

              const audio = heritageAudioMap[stop.id];
              if (audio) playAudio(audio);
            }}
          />
        </div>
      ) : (
                <>
<div
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
>
        <video
src={stop.heritageVideo}
autoPlay
  playsInline
  className="w-[80%] h-[80%] object-contain animate-float-up"
  onEnded={() => {
    stopAudio();
    setShowHeritage(false);
    setStep("video");
  }}
/>

<div className="fixed bottom-8 left-0 right-0 flex justify-center z-[10000]">
             <PrimaryButton
  onClick={() => {
    

    stopAudio();
    setShowHeritage(false);

    // Go to the next screen
    setStep("video");
  }}
/>
            </div>
          </div>
        </>
      )}
    </>
  );
}

  if (step === "scholar") {
  return (
    <div className="absolute inset-0 z-50">
      <img
        src={stop.scene}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Scholar */}
     <div
  className="absolute right-10 bottom-0 flex flex-col items-center"
>
  {!showHandsDown ? (
    <video
      src={scholarHoldingTablet}
      autoPlay
      muted
      playsInline
      className="h-[420px]"
      onEnded={() => {
        setShowHandsDown(true);
        setShowTablet(true);
        setShowContinue(true);
      }}
    />
  ) : (
    <video
      src={scholarHandsdown}
      autoPlay
      loop
      muted
      playsInline
      className="h-[420px]"
    />
  )}
</div>
      {/* Glowing Stone Tablet */}
      {showTablet && (
  <img
    src={stop.token.image}
    alt={stop.token.name}
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-56
      animate-pulse
      drop-shadow-[0_0_20px_gold]
      z-[100]
    "
  />
)}

      {/* Continue Button */}
  {/* Continue Button */}
{showContinue && (
  <div className="absolute bottom-8 right-8 z-[120]">
    <PrimaryButton
      onClick={() => {
        setStep("token");
      }}
    />
  </div>
)}
    </div>
  );
}
  if (step === "token") {
    return (
<div className="space-y-4  mt-75">
  <div className="rounded-3xl border-2 border-border bg-card p-8 text-center shadow-md animate-token-pop">
          <div className="mx-auto mb-3 grid h-32 w-32 place-items-center rounded-full text-6xl shadow-2xl" style={{ backgroundColor: route.hex + "33", color: route.hex, border: `4px solid ${route.hex}` }}>
<img
  src={stop.token.image}
  alt={stop.token.name}
  className="h-24 w-24 object-contain"
/>          </div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">You collected</p>
          <p className="text-2xl font-bold" style={{ color: route.hex }}>{stop.token.name}</p>
        </div>
        <ElderBubble emoji={stop.elderEmoji} name={stop.elder} lines={[stop.token.line]} color={route.hex} />
<div className="absolute bottom-21 right-18 z-50">
            <PrimaryButton
  onClick={() => {
    stopAudio();

    onTokenCollected(
      stop.token.name,
      stop.token.image
    );

    onComplete();
  }}
/>
        </div>
      </div>
    );
  }
if (step === "video") {

 let currentVideo = "";
if (stop.id === "taxila") {
  currentVideo =
    selectedVideo === "choice"
      ? taxilachoice
      : selectedVideo === "option1"
      ? taxilaStudy
      : selectedVideo === "option2"
      ? taxilaMarket
      : taxilaRetentionVideo;
}

if (stop.id === "mathura") {
  currentVideo =
    selectedVideo === "choice"
      ? mathuraChoiceVideo
      : selectedVideo === "option1"
      ? mathuraTempleVideo
      : selectedVideo === "option2"
      ? mathuraSculptorVideo
      : mathuraQuestionVideo;
}

return (
  <div className="fixed inset-0 z-[10000] pointer-events-none">
<video
  key={`${stop.id}-${selectedVideo}`}
  ref={choiceVideoRef}
  src={currentVideo}
  autoPlay
  playsInline
  muted={false}
  preload="auto"
className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none"
   onEnded={() => {
  console.log("ENDED:", selectedVideo);

  if (selectedVideo === "choice") {
    console.log("Choice ended");
    setChoiceVideoEnded(true);
  } else if (
  selectedVideo === "option1" ||
selectedVideo === "option2"
  ) {
    console.log("Study/Market ended");
    setSelectedVideoEnded(true);
  } else if (selectedVideo === "retention") {
    console.log("Retention ended");
    setSelectedVideoEnded(true);
  }
}}
      />
      
<div className="absolute inset-0 z-[100000] pointer-events-auto">
        {/* Show buttons only after Choice Video finishes */}
{/* Taxila Choice Buttons */}

{selectedVideo === "choice" && (
  <>
    {stop.id === "taxila" && (
      <>
        <button
          onClick={() => {
            setSelectedVideo("option1");
            setChoiceVideoEnded(false);
            setSelectedVideoEnded(false);
          }}
          className="fixed left-[20%] bottom-[30%] z-[9999999]"
        >
          <img src={studyBtn} className="w-48" />
        </button>

        <button
          onClick={() => {
            setSelectedVideo("option2");
            setChoiceVideoEnded(false);
            setSelectedVideoEnded(false);
          }}
          className="fixed right-[20%] bottom-[30%] z-[9999999]"
        >
          <img src={marketBtn} className="w-48" />
        </button>
      </>
    )}

    {stop.id === "mathura" && (
      <>
        <button
          onClick={() => {
            setSelectedVideo("option1");
            setChoiceVideoEnded(false);
            setSelectedVideoEnded(false);
          }}
          className="fixed left-[20%] bottom-[30%] z-[9999999]"
        >
          <img src={templeBtn} className="w-48" />
        </button>

        <button
          onClick={() => {
            setSelectedVideo("option2");
            setChoiceVideoEnded(false);
            setSelectedVideoEnded(false);
          }}
          className="fixed right-[20%] bottom-[30%] z-[9999999]"
        >
          <img src={sculptorBtnMathura} className="w-48" />
        </button>
      </>
    )}
  </>
)}
{selectedVideoEnded &&
 selectedVideo !== "choice" &&
 selectedVideo !== "retention" && (
  <div className="fixed bottom-8 right-8 z-[100000]">
    <PrimaryButton
      onClick={() => {
        setSelectedVideo("retention");
        setSelectedVideoEnded(false);
      }}
    />
  </div>
)}
{selectedVideo === "retention" && (
  <>
    {/* ---------------- TAXILA QUESTION ---------------- */}
    {stop.id === "taxila" && (
      <>
        <button
          onClick={() => setAnsweredCorrectly(true)}
          className="absolute left-[12%] bottom-[30%] z-[99999]"
        >
          <img
            src={answer1Img}
            alt="Books, Scrolls and Stars"
            className="w-52"
          />
        </button>

        <button
          onClick={() => setAnsweredCorrectly(false)}
          className="absolute left-[44%] bottom-[30%] z-[99999]"
        >
          <img
            src={answer2Img}
            alt="Cooking Pots and Spices"
            className="w-52"
          />
        </button>

        <button
          onClick={() => setAnsweredCorrectly(false)}
          className="absolute right-[12%] bottom-[30%] z-[99999]"
        >
          <img
            src={answer3Img}
            alt="Fishing Nets and Boats"
            className="w-52"
          />
        </button>
      </>
    )}

    {/* ---------------- MATHURA QUESTION ---------------- */}
    {stop.id === "mathura" && (
      <>
        <button
          onClick={() => setAnsweredCorrectly(false)}
          className="absolute left-[12%] bottom-[30%] z-[99999]"
        >
          <img
            src={mathuraAnswer1}
            alt="Fields of Cotton"
            className="w-52"
          />
        </button>

        <button
          onClick={() => setAnsweredCorrectly(true)}
          className="absolute left-[44%] bottom-[30%] z-[99999]"
        >
          <img
            src={mathuraAnswer2}
            alt="Beautiful Stone Sculptures"
            className="w-52"
          />
        </button>

        <button
          onClick={() => setAnsweredCorrectly(false)}
          className="absolute right-[12%] bottom-[30%] z-[99999]"
        >
          <img
            src={mathuraAnswer3}
            alt="Great Sailing Ships"
            className="w-52"
          />
        </button>
      </>
    )}

    {/* CORRECT ANSWER */}
    {answeredCorrectly === true && (
      <div className="absolute inset-0 flex flex-col items-center justify-center z-[100000]">
        <h2 className="text-5xl font-bold text-yellow-300 animate-bounce">
          🎉 Congratulations! 🎉
        </h2>

        <div className="fixed bottom-8 right-8 z-[100000]">
  <button
    onClick={() => setStep("goodbye")}
  >
    <img
      src={continueBtn}
      alt="Continue"
      className="w-52"
    />
  </button>
</div>
      </div>
    )}

    {/* WRONG ANSWER */}
  {answeredCorrectly === false && (
  <div className="absolute top-10 left-1/2 -translate-x-1/2 z-[100000]">
    <p className="rounded-xl bg-red-600 px-6 py-3 text-2xl font-bold text-white">
      ❌ Try Again!
    </p>
  </div>
)}

  </>
)}

      </div>
    </div>
  );
}
           


if (step === "goodbye") {
  return (
    <div className="space-y-4">
      <ElderBubble
        emoji={stop.elderEmoji}
        name={stop.elder}
        lines={[stop.goodbye]}
        color={route.hex}
      />

      {showGoodbyeContinue && (
        <div className="absolute bottom-25 right-18 z-50">
       
            <PrimaryButton
            onClick={() => {
              stopAudio();
              setStep("token");
            }}
          />
        
        </div>
      )}
    </div>
  );
}

return null;
}
function TravelScreen({
  route,
  fromIndex,
  toIndex,
  character,
  onArrive,
}: {
  route: RouteData;
  fromIndex: number;
  toIndex: number;
  character: any;
  onArrive: () => void;
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

  const x = start.x + ((end.x - start.x) * progress) / 100;
  const y = start.y + ((end.y - start.y) * progress) / 100;

  return (
    <section className="fixed inset-0 w-screen h-screen">
      <div className="relative w-full h-full overflow-hidden">

        {/* Background */}
        <video
          src={indiaMap}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Route dots */}
        {route.pathDots.map((dot, i) => (
          <div
            key={i}
            className={`absolute h-4 w-4 rounded-full ${
              i === toIndex ? "bg-yellow-400 animate-pulse" : "bg-white"
            }`}
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Character */}
        <div
          className="absolute animate-bounce z-20"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: "translate(-50%, -90%)",
          }}
        >
          <img
            src={
              character?.characterId === "boy1"
                ? boy1Intro
                : character?.characterId === "boy2"
                ? boy2Intro
                : character?.characterId === "girl1"
                ? girl1Intro
                : character?.characterId === "girl2"
                ? girl2Intro
                : boy1Intro
            }
            className="w-16 h-auto"
          />
        </div>

        {/* Continue Button */}
        {progress >= 100 && (
          <div className="absolute bottom-8 right-8 z-30">
            <PrimaryButton onClick={onArrive} />
          </div>
        )}
      </div>
    </section>
  );
}
function DiaryScreen({ route, stopIndex, onContinue }: any) {
  const stop = route.stops[stopIndex];
  const isLast = stopIndex === route.stops.length - 1;
const [showWave, setShowWave] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowWave(true);
  }, 3000); // show waving after 3 seconds

  return () => clearTimeout(timer);
}, []);
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="relative min-h-[80vh] overflow-hidden rounded-3xl border-4 border-border shadow-2xl">

        {/* Diary Image */}
        {/* Split Images */}
<div className="absolute inset-0 flex flex-col">
  {/* Ancient Image */}
  <div className="relative h-1/2">
    <img
      src={stop.diary.ancientImage}
      alt={stop.diary.ancient}
      className="h-full w-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white">
      <p className="font-bold">{stop.diary.ancient}</p>
    </div>
  </div>

  {/* Modern Image */}
  <div className="relative h-1/2">
    <img
      src={stop.diary.modernImage}
      alt={stop.diary.modern}
      className="h-full w-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white">
      <p className="font-bold">{stop.diary.modern}</p>
    </div>
  </div>
</div>
<div
  className="absolute right-10 bottom-0 z-20"
>
  {!showWave ? (
    <img
      src={scholarHoldingTablet}
      alt="Scholar"
      className="h-[420px] w-auto"
    />
  ) : (
    <video
      src={scholarWaving}
      autoPlay
      loop
      muted
      playsInline
      className="h-[420px] w-auto"
    />
  )}
</div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        {/* Diary Content */}
        <div className="relative z-10 flex min-h-[80vh] flex-col justify-end p-2">
            <div className="rounded-3xl bg-card/90 p-3 backdrop-blur-sm">
            <p className="ml-6 text-xs uppercase tracking-widest text-muted-foreground">
              Journey Diary
            </p>

            <h2
              className="mt-6 text-3xl font-bold"
              style={{ color: route.hex }}
            >
              {stop.name}
            </h2>

            <p className="mt-6 text-lg leading-relaxed">
              {stop.diary.narration}
            </p>

            <div className="mt-4 flex justify-end">
             
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function CompleteScreen({
  route,
  collected,
  onContinue,
}: {
  route: RouteData;
  collected: { name: string; image: string }[];
  onContinue: () => void;
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 text-center">
      <div className="rounded-3xl border-4 border-border bg-card p-8 shadow-2xl">
        <div
          className="mb-4 text-6xl animate-shimmer"
          style={{ color: route.hex }}
        >
          🎉
        </div>

        <h2
          className="mb-2 text-3xl font-bold"
          style={{ color: route.hex }}
        >
          You completed {route.name}!
        </h2>

        <p className="mb-6 text-lg text-foreground/90">
          From {route.stops[0].name} all the way to{" "}
          {route.stops[route.stops.length - 1].name}
        </p>

        <div className="mx-auto mb-8 grid max-w-2xl grid-cols-5 gap-3">
          {route.stops.map((s, i) => (
            <div
              key={s.id}
              className="flex flex-col items-center gap-2 rounded-2xl border-2 bg-secondary/40 p-3"
              style={{ borderColor: route.hex }}
            >
<img
  src={s.token.image}
  alt={s.token.name}
  className="h-12 w-12 object-contain"
/>
              <span className="text-xs font-semibold">
                {s.token.name}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={onContinue}
          className="rounded-full px-8 py-3 font-bold text-white"
          style={{ backgroundColor: route.hex }}
        >
          Continue to Activities →
        </button>

        <p className="mt-4 text-xs text-muted-foreground">
          {collected.length} of {route.stops.length} treasures collected
        </p>
      </div>
    </section>
  );
}
function ActivitiesScreen({
  route,
}: {
  route: RouteData;
}) {
  const [character, setCharacter] = useState<any>(null);

useEffect(() => {
  if (typeof window !== "undefined") {
    const savedCharacter =
      localStorage.getItem("selectedCharacter");

    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
    }
  }
}, []);




const age = Number(character?.age ?? 3);
  const [showTreasureGame, setShowTreasureGame] =
  useState(false);
  console.log(
  "showTreasureGame:",
  showTreasureGame
);
  if (showTreasureGame) {
  return <UttarapathTreasureGame />;
}
  

const unlocked34 =
  route.id === "uttarapath" &&
  (age === 3 || age === 4);

const unlocked56 =
  age === 5 || age === 6 || age === 7 || age === 8;

const unlocked78 =
  age === 7 || age === 8;

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="rounded-3xl border-4 border-border bg-card p-8 shadow-xl">

        <h2
          className="mb-8 text-center text-3xl font-bold"
          style={{ color: route.hex }}
        >
          Activities
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <ActivityCard
  image={age34Img}
  title="Age 3–4 Activities"
  unlocked={unlocked34}
  color={route.hex}
  onPlay={() => {
    setShowTreasureGame(true);
  }}
/>

          <ActivityCard
            image={age56Img}
            title="Age 5–6 Activities"
            unlocked={unlocked56}
            color={route.hex}
            onPlay={() => {
  window.location.href = "/activity56";
}}
          />

          <ActivityCard
            image={age78Img}
            title="Age 7–8 Activities"
            unlocked={unlocked78}
            color={route.hex}
          />

        </div>
      </div>
    </section>
  );
}
 function ActivityCard({
  image,
  title,
  unlocked,
  color,
  onPlay,
}: {
  image: string;
  title: string;
  unlocked: boolean;
  color: string;
  onPlay?: () => void;
}){
  return (
      <div className="relative overflow-hidden rounded-2xl border-4 shadow-lg w-full min-h-[500px]">
    <img
  src={image}
  alt={title}
  className={`h-64 w-full object-cover ${
    unlocked ? "" : "grayscale"
  }`}
/>

      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-7xl">
            🔒
          </div>
        </div>
      )}

        <div className="bg-card p-4 min-h-[140px]">
                  <h3
            className="text-base font-bold"
          style={{ color }}
        >
          {title}
        </h3>

        {unlocked ? (
  <button
    onClick={onPlay}
    className="mt-3 rounded-full px-6 py-2 text-white font-bold"
    style={{
      backgroundColor: color,
    }}
  >
    Play →
  </button>
) : (
          <p className="mt-3 text-sm text-muted-foreground">
            Locked for your age
          </p>
        )}
      </div>
    </div>
  );
}

function PrimaryButton({
  onClick,
  disabled = false,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`transition-transform hover:scale-105 ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <img
        src={continueBtn}
        alt="Continue"
        className="w-50 h-15"
      />
    </button>
  );
}
