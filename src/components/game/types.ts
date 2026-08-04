export type SkinTone = "light" | "medium" | "dark";
export type Gender = "boy" | "girl";
export type HairStyle = "short" | "long" | "curly";

export type RouteId =
  | "uttarapath"
  | "dakshinapath"
  | "pubbantapath"
  | "aparantapath";

export interface Character {
  name: string;
  age: number;
  gender: Gender;
  skin: SkinTone;
  hair: HairStyle;
}

export const ROUTES: Record<RouteId, {
  name: string;
  tagline: string;
  blurb: string;
  color: string;
  cssVar: string;
  start: { x: number; y: number };
  cities: { x: number; y: number; name: string }[];
}> = {
  uttarapath: {
    name: "Uttarapath",
    tagline: "",
    blurb: "",
    color: "oklch(0.82 0.18 90)",
    cssVar: "var(--route-uttara)",
    start: { x: 38, y: 22 },
    cities: [
      { x: 32, y: 28, name: "Taxila" },
      { x: 42, y: 32, name: "Mathura" },
      { x: 52, y: 36, name: "Pataliputra" },
      { x: 62, y: 38, name: "Tamralipti" },
    ],
  },
  dakshinapath: {
    name: "Dakshinapath",
    tagline: "The southern path",
    blurb: "This is Dakshinapath — the southern path! Traders and pilgrims walked this road through forests, rivers and ancient kingdoms!",
    color: "oklch(0.6 0.22 25)",
    cssVar: "var(--route-dakshina)",
    start: { x: 48, y: 40 },
    cities: [
      { x: 45, y: 50, name: "Ujjain" },
      { x: 47, y: 60, name: "Pratishthana" },
      { x: 50, y: 72, name: "Hampi" },
      { x: 52, y: 84, name: "Madurai" },
    ],
  },
  pubbantapath: {
    name: "Pubbantapath",
    tagline: "The eastern journey",
    blurb: "This is Pubbantapath — the eastern journey! Ships and travelers sailed east from India, carrying stories and treasures far away!",
    color: "oklch(0.6 0.18 145)",
    cssVar: "var(--route-pubbanta)",
    start: { x: 58, y: 42 },
    cities: [
      { x: 65, y: 44, name: "Tamralipti" },
      { x: 74, y: 50, name: "Suvarnabhumi" },
      { x: 82, y: 58, name: "Sumatra" },
      { x: 88, y: 68, name: "Java" },
    ],
  },
  aparantapath: {
    name: "Aparantapath",
    tagline: "The western road",
    blurb: "This is Aparantapath — the western road! From the mountains to the sea, this path connected India to the whole wide world!",
    color: "oklch(0.6 0.18 230)",
    cssVar: "var(--route-aparanta)",
    start: { x: 40, y: 42 },
    cities: [
      { x: 34, y: 46, name: "Bharuch" },
      { x: 26, y: 52, name: "Sopara" },
      { x: 18, y: 58, name: "Arabia" },
      { x: 10, y: 64, name: "Rome" },
    ],
  },
};
