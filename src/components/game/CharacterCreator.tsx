import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar } from "./Avatar";
import type { Character, Gender } from "./types";
//import { speakText } from "@/lib/elevenlabs";
import { useNavigate } from "@tanstack/react-router";
import boySelect from "@/assets/boySelect.png";
import girlSelect from "@/assets/girlSelect.png";
import characterBg from "@/assets/pathik background.png";
import boy1 from "@/assets/boy1 (1).png";
import boy2 from "@/assets/boy2 (1).png";
import girl1 from "@/assets/girl1 (1).png";
import girl2 from "@/assets/girl2.png";
import continueBtn from "@/assets/continuebutton.png";
import thisIsMeBtn from "@/assets/let's travel!.png";
const AGES = [3, 4, 5, 6, 7, 8];



export function CharacterCreator({
  onDone,
}: {
  onDone: (c: Character) => void;
}) {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

const [c, setC] = useState<
  Partial<Character> & {
    characterId?: string;
  }
>({});
  const setField = <K extends keyof Character>(
    k: K,
    v: Character[K]
  ) => {
    setC((prev) => ({ ...prev, [k]: v }));

    setTimeout(() => {
      setStep((s) => Math.min(s + 1, 3));
    }, 350);
  };

  const canFinish =
  c.name &&
  c.age &&
  c.gender &&
  c.characterId;

  return (
<div
  className="min-h-screen p-6 md:p-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${characterBg})`,
  }}
>

<div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center text-3xl md:text-5xl font-display text-foreground mb-2"
        >
          Who is traveling today?
        </motion.h1>

        <p className="text-center text-muted-foreground mb-8">
          Tap to choose. You can change anything!
        </p>
<div className="max-w-3xl mx-auto">
          {/* LEFT SIDE */}
          <div className="bg-card/70 backdrop-blur rounded-3xl p-6 md:p-10 shadow-xl border border-border space-y-8">
            {/* Step Indicator */}
            <div className="flex gap-2 justify-center mb-2">
{[0, 1, 2, 3].map((i) => (
                  <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`h-3 w-10 rounded-full transition-all ${
                    i === step
                      ? "bg-primary w-16"
                      : i < step
                      ? "bg-accent"
                      : "bg-border"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="min-h-[260px] flex flex-col justify-center"
              >
                {/* STEP 0 */}
                {step === 0 && (
                  <div className="space-y-4">
                    <label className="block text-2xl font-display text-center">
                      What's your name?
                    </label>

                    <input
                      autoFocus
                      value={c.name ?? ""}
                      onChange={(e) =>
                        setC((p) => ({
                          ...p,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Type your name..."
                      className="w-full text-center text-2xl py-5 px-6 rounded-2xl border-4 border-primary/40 bg-background focus:border-primary outline-none font-display"
                    />

                 <div className="text-center mt-4">
  <button
    disabled={!c.name?.trim()}
    onClick={() => setStep(1)}
    className="transition-transform hover:scale-105 disabled:opacity-40"
  >
    <img
      src={continueBtn}
      alt="Continue"
      className="w-52 h-auto"
    />
  </button>
</div>
                  </div>
                )}

                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-display text-center">
                      How old are you?
                    </h2>

                    <div className="flex justify-center flex-wrap gap-4">
                      {AGES.map((a) => (
                        <motion.button
                          key={a}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setField("age", a)}
                          className={`w-24 h-24 rounded-3xl text-4xl font-display border-4 ${
                            c.age === a
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-card border-border"
                          }`}
                        >
                          {a}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-display text-center">
                      Boy or Girl?
                    </h2>

                    <div className="flex justify-center gap-6">
                      {(["boy", "girl"] as Gender[]).map((g) => (
                        <motion.button
                          key={g}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setField("gender", g)}
                          className={`p-4 rounded-3xl border-4 ${
                            c.gender === g
                              ? "border-primary bg-primary/10"
                              : "border-border bg-card"
                          }`}
                        >
<img
  src={g === "boy" ? boySelect : girlSelect}
  alt={g}
  className="w-[220px] h-[220px] object-contain"
/>

                          <div className="text-xl font-display capitalize mt-2">
                            {g}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
{/* STEP 3 */}
{step === 3 && (
  <div className="space-y-6">
    <h2 className="text-2xl font-display text-center">
      Choose Your Character
    </h2>

    <div className="flex justify-center gap-6">

      {c.gender === "boy" ? (
        <>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setC((prev) => ({
                ...prev,
                characterId: "boy1",
              }))
            }
            className={`p-4 rounded-3xl border-4 ${
              c.characterId === "boy1"
                ? "border-primary"
                : "border-border"
            }`}
          >
            <img src={boy1} className="w-52 h-60" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setC((prev) => ({
                ...prev,
                characterId: "boy2",
              }))
            }
            className={`p-4 rounded-3xl border-4 ${
              c.characterId === "boy2"
                ? "border-primary"
                : "border-border"
            }`}
          >
            <img src={boy2} className="w-52 h-60" />
          </motion.button>
        </>
      ) : (
        <>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setC((prev) => ({
                ...prev,
                characterId: "girl1",
              }))
            }
            className={`p-4 rounded-3xl border-4 ${
              c.characterId === "girl1"
                ? "border-primary"
                : "border-border"
            }`}
          >
            <img src={girl1} className="w-52 h-60" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setC((prev) => ({
                ...prev,
                characterId: "girl2",
              }))
            }
            className={`p-4 rounded-3xl border-4 ${
              c.characterId === "girl2"
                ? "border-primary"
                : "border-border"
            }`}
          >
            <img src={girl2} className="w-52 h-60" />
          </motion.button>
        </>
      )}

    </div>
  </div>
)}
              </motion.div>
            </AnimatePresence>
          {canFinish && (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="text-center pt-4"
  >

<button
  onClick={async () => {
    const childName = c.name || "Traveler";

    const characterData = {
      name: c.name,
      age: c.age,
      gender: c.gender,
      skin: c.skin,
      hair: c.hair,
    };

    localStorage.setItem(
      "selectedCharacter",
      JSON.stringify({
        ...c,
        skin: "light",
        hair: "short",
      })
    );

    navigate({ to: "/select" });
  }}
  className="hover:scale-105 transition-transform"
>
  <img
    src={thisIsMeBtn}
    alt="This is me"
    className="w-64 h-auto"
  />
</button>
  </motion.div>
)}
          </div>

         
          </div>
        </div>
      </div>
    
  );
}