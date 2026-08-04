import type { Character } from "./types";

// BOY IMAGES
import boyLightShort from "../../assets/Characters/Characters/Boy Characters/boy lightskin long.png";
import boyLightLong from "../../assets/Characters/Characters/Boy Characters/boy lightskin long.png";
import boyLightCurly from "../../assets/Characters/Characters/Boy Characters/boy lightskin curly.png";

import boyMedShort from "../../assets/Characters/Characters/Boy Characters/boy.png";
import boyMedLong from "../../assets/Characters/Characters/Boy Characters/boy medskin long.png";
import boyMedCurly from "../../assets/Characters/Characters/Boy Characters/boy medskin curly.png";

import boyDarkShort from "../../assets/Characters/Characters/Boy Characters/boy darkskin short.png";
import boyDarkLong from "../../assets/Characters/Characters/Boy Characters/boy darkskin long.png";
import boyDarkCurly from "../../assets/Characters/Characters/Boy Characters/boy darkskin curly.png";

// GIRL IMAGES
import girlLightShort from "../../assets/Characters/Characters/Boy Characters/boy lightskin long.png";
import girlLightLong from "../../assets/Characters/Characters/Girl Characters/girl lightskin long.png";
import girlLightCurly from "../../assets/Characters/Characters/Girl Characters/girl lightskin curly.png";

import girlMedShort from "../../assets/Characters/Characters/Girl Characters/girl.png";
import girlMedLong from "../../assets/Characters/Characters/Girl Characters/girl medskin long.png";
import girlMedCurly from "../../assets/Characters/Characters/Girl Characters/girl medskin curly.png";

import girlDarkShort from "../../assets/Characters/Characters/Girl Characters/girl darkskin short.png";
import girlDarkLong from "../../assets/Characters/Characters/Girl Characters/girl darkskin long.png";
import girlDarkCurly from "../../assets/Characters/Characters/Girl Characters/girl darkskin curly.png";
interface Props {
  character?: Partial<Character>;
  size?: number;
}

export function Avatar({
  character,
  size = 200,
}: Props) {

  const gender = character?.gender || "boy";
  const skin = character?.skin || "light";
  const hair = character?.hair || "short";

  let image =
    gender === "girl"
      ? girlLightShort
      : boyLightShort;

  // BOY
  if (gender === "boy") {

    if (skin === "light") {
      if (hair === "short") image = boyLightShort;
      if (hair === "long") image = boyLightLong;
      if (hair === "curly") image = boyLightCurly;
    }

    if (skin === "medium") {
      if (hair === "short") image = boyMedShort;
      if (hair === "long") image = boyMedLong;
      if (hair === "curly") image = boyMedCurly;
    }

    if (skin === "dark") {
      if (hair === "short") image = boyDarkShort;
      if (hair === "long") image = boyDarkLong;
      if (hair === "curly") image = boyDarkCurly;
    }
  }

  // GIRL
  if (gender === "girl") {

    if (skin === "light") {
      if (hair === "short") image = girlLightShort;
      if (hair === "long") image = girlLightLong;
      if (hair === "curly") image = girlLightCurly;
    }

    if (skin === "medium") {
      if (hair === "short") image = girlMedShort;
      if (hair === "long") image = girlMedLong;
      if (hair === "curly") image = girlMedCurly;
    }

    if (skin === "dark") {
      if (hair === "short") image = girlDarkShort;
      if (hair === "long") image = girlDarkLong;
      if (hair === "curly") image = girlDarkCurly;
    }
  }

  return (
    <img
      src={image}
      alt="Avatar"
      style={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}