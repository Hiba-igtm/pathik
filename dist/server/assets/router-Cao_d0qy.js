import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-Cj5l018K.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex h-screen items-center justify-center overflow-hidden bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-sm text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-lg font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105",
        children: "Go Home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$3 = () => import("./select-CvJzkkRj.js");
const Route$3 = createFileRoute("/select")({
  head: () => ({
    meta: [{
      title: "Choose Your Route — Yatra"
    }, {
      name: "description",
      content: "Pick one of four illustrated routes across ancient India and begin your journey."
    }, {
      property: "og:title",
      content: "Choose Your Route — Yatra"
    }, {
      property: "og:description",
      content: "Four glowing trade routes across ancient India."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/select"
    }],
    links: [{
      rel: "canonical",
      href: "/select"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./activity56-DUVcy9ho.js");
const Route$2 = createFileRoute("/activity56")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-C7v9nfmo.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The Heritage Route Traveler — A Journey Across Ancient India"
    }, {
      name: "description",
      content: "A playful kids' adventure across the four great ancient routes of India: Uttarapath, Dakshinapath, Pubbantapath, and Aparantapath."
    }, {
      property: "og:title",
      content: "The Heritage Route Traveler"
    }, {
      property: "og:description",
      content: "Travel the great heritage routes of ancient India with your own little explorer."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const iconicUttarapath = "/assets/iconic-uttarapath-D5V8sKw5.jpg";
const sceneTaxila = "/assets/scene-taxila-DcBhHZ5-.jpg";
const sceneMathura = "/assets/scene-mathura-Bw9xxXFC.jpg";
const stoneTabletImg = "/assets/stone%20tablet-BHq81tDA.png";
const lotusToken = "/assets/lotus%20motif%20glowing%20(1)-BbaAqajw.png";
const palmOpenVideo = "/assets/palm%20leaf%20scroll%20vid-BCaB175U.mp4";
const mathuraHeritageVideo = "/assets/mathura%20heritage%20moment-BwL9juLS.mp4";
const taxilaVideo = "/assets/taxilavideo1-aMBq2tKT.mp4";
const mathuraVideo = "/assets/welcome%20mathura-8pIM5C75.mp4";
const taxilaStudyVideo = "/assets/taxila-study-CE4JpjfL.mp4";
const taxilaMarketVideo = "/assets/taxila-market-BdbvVbmf.mp4";
const taxilaStudentsChoice = "/assets/taxila-students-D3zv1AQf.jpg";
const taxilaMarketChoice = "/assets/taxila-market-DuqgT8l0.avif";
const cookingImg = "/assets/cooking-CLtixtmk.webp";
const fishingImg = "/assets/fishing-oY9COo5D.jpg";
const booksImg = "/assets/books-BRH9LCRs.webp";
const diaryTaxilabcImage = "/assets/taxilabc-MwFiMoW0.jpg";
const diaryTaxilapakImage = "/assets/taxilapak-DGW8OKKi.jpg";
const mathuraTempleVideo = "/assets/mathura%20temple%20choice%20video-BaNib34Z.mp4";
const mathuraSculptorVideo = "/assets/mathura%20sculpting%20choice%20videos-DTxCS0w8.mp4";
const templeBtn = "/assets/the%20temple-Dg3bRrYQ.png";
const sculptorBtnMathura = "/assets/sculptor_-CFvu6E0L.png";
const mathuraAnswer1 = "/assets/FIELDS%20OF%20COTTON-B02qo6z1.png";
const mathuraAnswer2 = "/assets/BEAUTIFUL%20STONE%20SCULPTURES-CjUdCRLL.png";
const mathuraAnswer3 = "/assets/GREAT%20SAILING%20SHIPS-CrQlLykq.png";
const UTTARAPATH = {
  id: "uttarapath",
  name: "Uttarapath",
  tagline: "The Great Northern Path",
  region: "north",
  iconicImage: iconicUttarapath,
  // intro: ["", ""]
  iconicCaption: "",
  color: "route-north",
  hex: "#E5B100",
  glow: "#FFD24D",
  mapDot: { x: 50, y: 13 },
  pathDots: [
    { x: 44, y: 11 },
    { x: 53, y: 32 },
    { x: 59, y: 38 },
    { x: 66, y: 38 },
    { x: 71, y: 49 }
  ],
  stops: [
    {
      id: "taxila",
      name: "",
      scene: sceneTaxila,
      video: taxilaVideo,
      elder: "",
      elderEmoji: "",
      intro: ["", ""],
      introVoices: [
        //taxiladialogue1,
        //taxiladialogue2,
      ],
      //questionVoice: taxilaquestion1,
      choiceVoices: [
        //taxilachoice1,
        //taxilachoice2,
      ],
      heritageObject: "Palm Leaf Scroll",
      heritageEmoji: "📜",
      heritageLine: "",
      heritageVideo: palmOpenVideo,
      choices: [
        {
          label: "Students studying under a tree",
          reply: "",
          visual: "",
          image: taxilaStudentsChoice,
          video: taxilaStudyVideo
        },
        {
          label: "Merchants trading at the market",
          reply: "",
          visual: "",
          image: taxilaMarketChoice,
          video: taxilaMarketVideo
        }
      ],
      retention: {
        question: "What did students come to Taxila to learn?",
        correctHint: "",
        options: [
          {
            label: "Books, scrolls and stars",
            image: booksImg,
            correct: true
          },
          {
            label: "Fishing nets and boats",
            image: fishingImg
          },
          {
            label: "Cooking pots and spices",
            image: cookingImg
          }
        ]
      },
      token: {
        name: "Stone Tablet",
        image: stoneTabletImg,
        line: ""
      },
      goodbye: "",
      diary: {
        ancientImage: diaryTaxilabcImage,
        modernImage: diaryTaxilapakImage,
        ancient: "Ancient Taxila — great university city",
        modern: "Taxila, Pakistan — it still exists today!",
        narration: "Taxila still stands today in Pakistan — people visit its ancient ruins from all over the world!"
      }
    },
    {
      id: "mathura",
      name: "",
      scene: sceneMathura,
      video: mathuraVideo,
      elder: "",
      elderEmoji: "",
      intro: ["", ""],
      introVoices: [
        // mathuraDialogue1,
        // mathuraDialogue2,
      ],
      heritageObject: "Stone Sculpture",
      heritageEmoji: "🪷",
      heritageLine: "",
      heritageVideo: mathuraHeritageVideo,
      questionVoice: (
        // mathuraQuestion1
        void 0
      ),
      choiceVoices: [
        // mathuraChoice1,
        // mathuraChoice2,
      ],
      choices: [
        {
          label: "Visit the Temple",
          reply: "",
          visual: "",
          image: templeBtn,
          video: mathuraTempleVideo
        },
        {
          label: "Watch the Sculptor",
          reply: "",
          visual: "",
          image: sculptorBtnMathura,
          video: mathuraSculptorVideo
        }
      ],
      token: {
        name: "Carved Lotus",
        image: lotusToken,
        line: ""
      },
      retention: {
        question: "What is Mathura famous for?",
        correctHint: "",
        options: [
          {
            label: "Beautiful Stone Sculptures",
            image: mathuraAnswer2,
            correct: true
          },
          {
            label: "Great Sailing Ships",
            image: mathuraAnswer3
          },
          {
            label: "Fields of Cotton",
            image: mathuraAnswer1
          }
        ]
      },
      goodbye: "",
      diary: {
        ancientImage: void 0,
        modernImage: void 0,
        ancient: "Ancient Mathura",
        modern: "Modern Mathura",
        narration: ""
      }
    }
    //     {
    //       id: "kausambi",
    //       name: "Kausambi",
    //       scene: sceneKausambi,
    //       elder: "River Merchant of Kausambi",
    //       elderEmoji: "🪙",
    //       introVoices: [
    //   // kausambiDialogue1,
    //   // kausambiDialogue2,
    // ],
    // questionVoice:
    //   // kausambiQuestion1
    //   undefined,
    // choiceVoices: [
    //   // kausambiChoice1,
    //   // kausambiChoice2,
    // ],
    // heritageVoice:
    //   // kausambiHeritageVoice
    //   undefined,
    //       intro: [
    //         "Ah! Welcome to Kausambi little traveler! See where the two great rivers meet? This is why merchants love this city!",
    //         "Everything that travels by river must pass through Kausambi — we are the crossroads of the northern road!",
    //       ],
    //       heritageObject: "Ancient Copper Coin",
    //       heritageEmoji: "🪙",
    //       heritageLine:
    //         "This coin was made right here in Kausambi! When traders meet they use coins like this to buy and sell goods from across India!",
    //       choices: [
    //         {
    //           label: "The busy river trading post",
    //           reply: "Come! See the merchants from a dozen different lands buying and selling!",
    //           visual: "Market stalls bloom with colorful cloth, spices, and people from far away.",
    //        // image: kausambiMarketImg,
    //        // video: kausambiMarketVideo,
    //         },
    //         {
    //           label: "The Buddhist monastery on the hill",
    //           reply: "The monks here are very wise — they will share a story with us!",
    //           visual: "A stone monastery sits on a quiet hill. A monk waves you in with a smile.",
    //               // image: kausambiMonasteryImg,
    //               // video: kausambiMonasteryVideo,
    //         },
    //       ],
    //       token: {
    //         name: "Copper Coin",
    //         image: "🪙",
    //         line: "Every traveler who passes through Kausambi carries a coin to remember the crossing! This one is yours!",
    //       },
    //       retention: {
    //         question: "Why is Kausambi an important city?",
    //         correctHint: "Kausambi sits where two rivers meet — that is why all the traders come here!",
    //         options: [
    //           { label: "Two rivers meeting", correct: true },
    //           { label: "A tall snow mountain" },
    //           { label: "A golden desert" },
    //         ],
    //       },
    //       goodbye:
    //         "You are more than halfway now brave traveler! The great capital Pataliputra awaits you — city of Emperor Ashoka himself!",
    //       diary: {
    //         // ancientImage: diaryKausambiAncient,
    //         // modernImage: diaryKausambiModern,
    //         ancient: "Ancient Kausambi — river crossing and trading city",
    //         modern: "Near Prayagraj, Uttar Pradesh",
    //         narration:
    //           "Kausambi is now a quiet village near Prayagraj — but archaeologists still dig up its ancient treasures!",
    //       },
    //       interlude: {
    //         title: "An Ashokan Rock Edict",
    //         emoji: "🪨",
    //         narration:
    //           "Look! A message from the great emperor — carved into this rock for all travelers to read! Emperor Ashoka wanted everyone to be kind to people and animals!",
    //       },
    //     },
    //     {
    //       id: "pataliputra",
    //       name: "Pataliputra",
    //       scene: scenePataliputra,
    //       elder: "Royal Mauryan Minister",
    //       elderEmoji: "🦁",
    //       introVoices: [
    //   // pataliputraDialogue1,
    //   // pataliputraDialogue2,
    // ],
    // questionVoice:
    //   // pataliputraQuestion1
    //   undefined,
    // choiceVoices: [
    //   // pataliputraChoice1,
    //   // pataliputraChoice2,
    // ],
    // heritageVoice:
    //   // pataliputraHeritageVoice
    //   undefined,
    //       intro: [
    //         "Welcome to Pataliputra — capital of the great Mauryan empire! This is the most powerful city in all of India!",
    //         "Our emperor Ashoka has sent stone pillars to every corner of the land — each one carries a message of kindness and peace!",
    //       ],
    //       heritageObject: "Ashokan Pillar",
    //       heritageEmoji: "🦁",
    //       heritageLine:
    //         "This is Ashoka's pillar — see the four lions on top? This symbol now belongs to all of India — you will see it everywhere even today!",
    //       choices: [
    //         {
    //           label: "The great Ashokan pillar up close",
    //           reply: "Come close — see what the emperor has carved for all the people of India!",
    //           visual: "The pillar's carved letters glow softly. A dove and a lotus appear in stone.",
    //             // image: pataliputraPillarImg,
    //   // video: pataliputraPillarVideo,
    //         },
    //         {
    //           label: "The royal palace gardens",
    //           reply: "The palace gardens are the most beautiful in the whole land — come and see!",
    //           visual: "Green gardens with flowering trees open up. Peacocks walk in the background.",
    //            // image: pataliputraGardenImg,
    //   // video: pataliputraGardenVideo,
    //         },
    //       ],
    //       token: {
    //         name: "Lion Capital",
    //         image: "🦁",
    //         line: "This is the lion of Ashoka — symbol of strength and peace together. Guard it well little traveler!",
    //       },
    //       retention: {
    //         question: "What did Emperor Ashoka put on his stone pillars?",
    //         correctHint: "Ashoka wrote messages of kindness and peace on his pillars for all people to read!",
    //         options: [
    //           { label: "Messages of peace and kindness", correct: true },
    //           { label: "Maps of trade routes" },
    //           { label: "Pictures of food and spices" },
    //         ],
    //       },
    //       goodbye:
    //         "One last stop little traveler — Tamralipti awaits you at the edge of the sea! The great port where ships sail to distant lands!",
    //       diary: {
    //           // ancientImage: diaryPataliputraAncient,
    //   // modernImage: diaryPataliputraModern,
    //         ancient: "Ancient Pataliputra — Mauryan imperial capital",
    //         modern: "Patna, Bihar — capital of Bihar today",
    //         narration: "Pataliputra is now called Patna — it is still the capital city of Bihar today!",
    //       },
    //     },
    //     {
    //       id: "tamralipti",
    //       name: "Tamralipti",
    //       scene: sceneTamralipti,
    //       elder: "Fisherman Elder of Tamralipti",
    //       elderEmoji: "⛵",
    //       introVoices: [
    //   // tamraliptiDialogue1,
    //   // tamraliptiDialogue2,
    // ],
    // questionVoice:
    //   // tamraliptiQuestion1
    //   undefined,
    // choiceVoices: [
    //   // tamraliptiChoice1,
    //   // tamraliptiChoice2,
    // ],
    // heritageVoice:
    //   // tamraliptiDialogue2
    //   undefined,
    //       intro: [
    //         "Welcome to Tamralipti little traveler — you have walked the whole Uttarapath! Now you stand at the edge of the great sea!",
    //         "From this port ships carry silk, cotton and Buddhist monks to lands far across the water!",
    //       ],
    //       heritageObject: "Trading Ship",
    //       heritageEmoji: "⛵",
    //       heritageLine:
    //         "See those monks on the ship? They are carrying the Buddha's teachings to lands far far away across the eastern sea!",
    //       choices: [
    //         {
    //           label: "Watch the trading ship being loaded",
    //           reply: "Come — see the merchants load silk, cotton and spices onto the great wooden ship!",
    //           visual: "Merchants carry colorful bundles up the gangplank under a salty sea breeze.",
    //           // image: tamraliptiShipImg,
    //   // video: tamraliptiShipVideo,
    //         },
    //         {
    //           label: "See what goods the merchants are carrying",
    //           reply: "Every bundle tells a story — silk from Mathura, cotton from the Deccan, spices from the south!",
    //           visual: "Bales of silk, cotton and spice glow softly as the elder names each one.",
    //           // image: tamraliptiGoodsImg,
    //   // video: tamraliptiGoodsVideo,
    //         },
    //       ],
    //       token: {
    //         name: "Cotton Bale",
    //         image: "🧶",
    //         line: "This is Tamralipti cotton — the finest in the land! Ships carry this cloth to the whole wide world.",
    //       },
    //       retention: {
    //         question: "What did the ships carry from Tamralipti?",
    //         correctHint: "From Tamralipti the ships carried monks, silk and cotton to faraway lands!",
    //         options: [
    //           { label: "Monks, silk and cotton goods", correct: true },
    //           { label: "Snow and blocks of ice" },
    //           { label: "Desert sand and camels" },
    //         ],
    //       },
    //       goodbye:
    //         "You have completed the great Uttarapath! From Taxila all the way to the sea — you have walked the whole northern road!",
    //       diary: {
    //           // ancientImage: diaryTamraliptiAncient,
    //   // modernImage: diaryTamraliptiModern,
    //         ancient: "Ancient Tamralipti — busy eastern port",
    //         modern: "Tamluk, West Bengal",
    //         narration: "Tamralipti is now called Tamluk — a small town near the sea in West Bengal.",
    //       },
    //     },
    //   ],
    // };
    // const DAKSHINAPATH: Route = {
    //   id: "dakshinapath",
    //   name: "Dakshinapath",
    //   tagline: "The Great Southern Path",
    //   region: "south",
    //   intro: [
    //     "This is Dakshinapath — the southern path! Traders and pilgrims walked this road through forests, rivers and ancient kingdoms!",
    //     "This was the time of the pilgrim monks — when great stupas were being built and cotton cloth was traded across the Deccan.",
    //   ],
    //   iconicImage: iconicDakshinapath,
    //   iconicCaption: "A white stupa with monks walking around it",
    //   color: "route-south",
    //   hex: "#B91C1C",
    //   glow: "#FF6B6B",
    //   mapDot: { x: 58, y: 47 },
    //   pathDots: [
    //     { x: 55, y: 50 },
    //     { x: 50, y: 60 },
    //     { x: 45, y: 70 },
    //     { x: 50, y: 80 },
    //     { x: 55, y: 90 },
    //   ],
    //   stops: [
    //     {
    //       id: "ujjain",
    //       name: "Ujjain",
    //       scene: sceneDakshinapath,
    //       elder: "Old Astronomer of Ujjain",
    //       elderEmoji: "🌟",
    //       intro: [
    //         "Welcome little traveler! Ujjain is the city of stars — astronomers here measure the whole sky!",
    //         "From this city the southern path begins — many monks and merchants start their journey here.",
    //       ],
    //       heritageObject: "Star Chart",
    //       heritageEmoji: "🌟",
    //       heritageLine: "From Ujjain we measure time itself — our astronomers have mapped every star above India!",
    //       choices: [
    //         {
    //           label: "Visit the temple of Mahakal",
    //           reply: "Come — the bells of Mahakal can be heard across the whole city!",
    //           visual: "An ancient stone temple opens before you, lamps flickering in the dusk.",
    //         },
    //         {
    //           label: "Climb to the observatory",
    //           reply: "Up here we touch the sky — let me show you the stars!",
    //           visual: "Stone instruments point to the sky. Stars begin to twinkle one by one.",
    //         },
    //       ],
    //       token: { name: "Star Disc", image: "🌟", line: "Take this star disc — it carries the night sky of Ujjain!" },
    //       retention: {
    //         question: "What is Ujjain famous for?",
    //         correctHint: "Ujjain is famous for its astronomers who measure the stars!",
    //         options: [
    //           { label: "Astronomers and the stars", correct: true },
    //           { label: "Big sailing ships" },
    //           { label: "Mountains of snow" },
    //         ],
    //       },
    //       goodbye: "The path leads south little traveler — to Vidisha, city of beautiful stupas!",
    //       diary: {
    //         ancient: "Ancient Ujjain — city of astronomers",
    //         modern: "Ujjain, Madhya Pradesh",
    //         narration: "Ujjain is still a holy city today on the river Shipra in Madhya Pradesh!",
    //       },
    //     },
    //     {
    //       id: "vidisha",
    //       name: "Vidisha",
    //       scene: sceneDakshinapath,
    //       elder: "Stupa Builder of Vidisha",
    //       elderEmoji: "🏛️",
    //       intro: [
    //         "Welcome traveler! Near Vidisha rises the great Sanchi Stupa — a dome of white stone for the Buddha!",
    //         "Pilgrims come from all of India to walk around this stupa and offer flowers.",
    //       ],
    //       heritageObject: "Stupa Model",
    //       heritageEmoji: "🏛️",
    //       heritageLine: "We build stupas like little hills — inside rest the relics of the Buddha himself!",
    //       choices: [
    //         {
    //           label: "Walk around the great stupa",
    //           reply: "Come — walking around the stupa fills the heart with peace!",
    //           visual: "You walk gently around the white dome as the sun sets behind it.",
    //         },
    //         {
    //           label: "See the carved stone gateways",
    //           reply: "Every stone gate tells a story from the Buddha's life — look carefully!",
    //           visual: "Carved elephants, lions and dancers come alive on the stone gateways.",
    //         },
    //       ],
    //       token: { name: "Stupa Token", image: "🏛️", line: "Take this tiny stupa to remember the great Sanchi!" },
    //       retention: {
    //         question: "What did pilgrims do at the stupa?",
    //         correctHint: "Pilgrims walked around the stupa to honor the Buddha!",
    //         options: [
    //           { label: "Walk around to honor the Buddha", correct: true },
    //           { label: "Catch fish in the river" },
    //           { label: "Race horses in the desert" },
    //         ],
    //       },
    //       goodbye: "Now south to Pratishthana — capital of the great Satavahana kings!",
    //       diary: {
    //         ancient: "Ancient Vidisha — near the great Sanchi Stupa",
    //         modern: "Vidisha, Madhya Pradesh",
    //         narration: "The Sanchi Stupa still stands today — visitors come from all over the world!",
    //       },
    //     },
    //     {
    //       id: "pratishthana",
    //       name: "Pratishthana",
    //       scene: sceneDakshinapath,
    //       elder: "Satavahana Queen's Cousin",
    //       elderEmoji: "👑",
    //       intro: [
    //         "Welcome to Pratishthana — capital of the Satavahana kings on the river Godavari!",
    //         "From this city the southern trade routes spread to every coast of India!",
    //       ],
    //       heritageObject: "Royal Seal",
    //       heritageEmoji: "👑",
    //       heritageLine: "Our kings stamp every trade letter with this seal — it travels with goods to many lands!",
    //       choices: [
    //         {
    //           label: "See the royal court",
    //           reply: "Come quietly — the king is hearing the people's troubles today!",
    //           visual: "Pillars rise around a grand hall. The king listens with a kind face.",
    //         },
    //         {
    //           label: "Watch elephants at the river",
    //           reply: "Elephants bathe at sunset — a beautiful sight on the Godavari!",
    //           visual: "Great elephants splash playfully in the golden river.",
    //         },
    //       ],
    //       token: { name: "Royal Seal", image: "👑", line: "Take this seal — a gift from the Satavahana court!" },
    //       retention: {
    //         question: "Who ruled Pratishthana?",
    //         correctHint: "The Satavahana kings ruled from Pratishthana!",
    //         options: [
    //           { label: "The Satavahana kings", correct: true },
    //           { label: "Roman emperors" },
    //           { label: "Chinese travelers" },
    //         ],
    //       },
    //       goodbye: "Now east to Amaravati — city of marble and great Buddhist art!",
    //       diary: {
    //         ancient: "Ancient Pratishthana — Satavahana capital",
    //         modern: "Paithan, Maharashtra",
    //         narration: "Pratishthana is now Paithan — still famous for its silk sarees!",
    //       },
    //     },
    //     {
    //       id: "amaravati",
    //       name: "Amaravati",
    //       scene: sceneDakshinapath,
    //       elder: "Marble Carver of Amaravati",
    //       elderEmoji: "🕊️",
    //       intro: [
    //         "Welcome to Amaravati — our great stupa is covered in carved white marble!",
    //         "Monks and artists from many lands come here to learn and to pray.",
    //       ],
    //       heritageObject: "Marble Carving",
    //       heritageEmoji: "🕊️",
    //       heritageLine: "Each marble panel shows a moment from the Buddha's long journey — stone full of stories!",
    //       choices: [
    //         {
    //           label: "Touch a carved marble panel",
    //           reply: "Run your hand softly — feel how the artist has shaped the story!",
    //           visual: "Smooth white marble shows dancers, elephants and a sacred tree.",
    //         },
    //         {
    //           label: "Sit with the monks",
    //           reply: "The monks will share a calm story with you — come!",
    //           visual: "Monks in saffron robes sit in a circle as a soft chant begins.",
    //         },
    //       ],
    //       token: { name: "Marble Lotus", image: "🕊️", line: "A tiny marble lotus — light as a feather, like our art!" },
    //       retention: {
    //         question: "What was Amaravati's stupa covered in?",
    //         correctHint: "Amaravati's stupa was covered in beautiful carved white marble!",
    //         options: [
    //           { label: "Carved white marble", correct: true },
    //           { label: "Sea shells" },
    //           { label: "Gold coins" },
    //         ],
    //       },
    //       goodbye: "Far south now — to Kanchipuram, city of a thousand temples!",
    //       diary: {
    //         ancient: "Ancient Amaravati — great Buddhist stupa",
    //         modern: "Amaravati, Andhra Pradesh",
    //         narration: "Amaravati's marble carvings are now in museums across the world!",
    //       },
    //     },
    //     {
    //       id: "kanchipuram",
    //       name: "Kanchipuram",
    //       scene: sceneDakshinapath,
    //       elder: "Silk Weaver of Kanchi",
    //       elderEmoji: "🧵",
    //       intro: [
    //         "Welcome to Kanchipuram — city of temples and the finest silk in the south!",
    //         "Here the southern path ends and our cloth travels by ship to faraway kingdoms!",
    //       ],
    //       heritageObject: "Silk Cloth",
    //       heritageEmoji: "🧵",
    //       heritageLine: "Our silk shines like sunlight on water — traders carry it across many seas!",
    //       choices: [
    //         {
    //           label: "Watch the silk being woven",
    //           reply: "Thread by thread the cloth grows — a slow and beautiful art!",
    //           visual: "A loom clicks softly. Bright threads of red and gold come together.",
    //         },
    //         {
    //           label: "Visit a great temple",
    //           reply: "Come — our temples reach the sky like stone mountains!",
    //           visual: "A towering carved temple rises above the city, full of color.",
    //         },
    //       ],
    //       token: { name: "Silk Thread", image: "🧵", line: "A bright silk thread — soft as the southern wind!" },
    //       retention: {
    //         question: "What is Kanchipuram famous for?",
    //         correctHint: "Kanchipuram is famous for its temples and beautiful silk cloth!",
    //         options: [
    //           { label: "Temples and silk cloth", correct: true },
    //           { label: "Snow and ice" },
    //           { label: "Camels and deserts" },
    //         ],
    //       },
    //       goodbye: "You have walked the whole Dakshinapath, brave traveler!",
    //       diary: {
    //         ancient: "Ancient Kanchipuram — city of a thousand temples",
    //         modern: "Kanchipuram, Tamil Nadu",
    //         narration: "Kanchipuram is still famous for its silk sarees and ancient temples!",
    //       },
    //     },
    //   ],
    // };
    // const PUBBANTAPATH: Route = {
    //   id: "pubbantapath",
    //   name: "Pubbantapath",
    //   tagline: "The Eastern Coastal Road",
    //   region: "east",
    //   intro: [
    //     "This is Pubbantapath — the eastern coastal road! Traders and monks walked along the shores of India from port to port!",
    //     "This was the time of the sailing ships — when brave travelers from Odisha set sail across the sea carrying Indian art and stories.",
    //   ],
    //   iconicImage: iconicPubbantapath,
    //   iconicCaption: "Votive boats with oil lamps floating on water",
    //   color: "route-east",
    //   hex: "#166534",
    //   glow: "#34D399",
    //   mapDot: { x: 74, y: 60 },
    //   pathDots: [
    //     { x: 75, y: 55 },
    //     { x: 72, y: 62 },
    //     { x: 70, y: 70 },
    //     { x: 68, y: 78 },
    //     { x: 65, y: 85 },
    //   ],
    //   stops: [
    //     {
    //       id: "tamralipti-e",
    //       name: "Tamralipti",
    //       scene: scenePubbantapath,
    //       elder: "Sea Captain of Tamralipti",
    //       elderEmoji: "⛵",
    //       intro: [
    //         "Welcome to Tamralipti — the gateway to the eastern sea!",
    //         "From here our ships sail to Suvarnabhumi — the golden land far across the water!",
    //       ],
    //       heritageObject: "Ship's Compass Shell",
    //       heritageEmoji: "🐚",
    //       heritageLine: "By the stars and the shells we find our way across the dark and shining sea!",
    //       choices: [
    //         {
    //           label: "See the great ship loaded",
    //           reply: "Come — feel the salt wind and the busy port!",
    //           visual: "Sailors shout and sing as bundles climb the gangplank.",
    //         },
    //         {
    //           label: "Listen to a sailor's tale",
    //           reply: "Sit close — our sailors have seen islands of gold and dragons!",
    //           visual: "A sailor draws strange islands in the sand with a stick.",
    //         },
    //       ],
    //       token: { name: "Sea Shell", image: "🐚", line: "A shell from the eastern sea — hold it to your ear!" },
    //       retention: {
    //         question: "Where did the ships sail from Tamralipti?",
    //         correctHint: "Ships sailed from Tamralipti to Suvarnabhumi across the eastern sea!",
    //         options: [
    //           { label: "Across the eastern sea", correct: true },
    //           { label: "Up into the mountains" },
    //           { label: "Into the great desert" },
    //         ],
    //       },
    //       goodbye: "South along the coast now — to Dantapura!",
    //       diary: {
    //         ancient: "Ancient Tamralipti — sea port of the east",
    //         modern: "Tamluk, West Bengal",
    //         narration: "Tamralipti is now called Tamluk — a quiet coastal town today!",
    //       },
    //     },
    //     {
    //       id: "dantapura",
    //       name: "Dantapura",
    //       scene: scenePubbantapath,
    //       elder: "Tooth Relic Keeper",
    //       elderEmoji: "🦷",
    //       intro: [
    //         "Welcome to Dantapura — the city of the sacred tooth relic of the Buddha!",
    //         "Pilgrims from across India come to bow before this holy gift.",
    //       ],
    //       heritageObject: "Relic Casket",
    //       heritageEmoji: "🪷",
    //       heritageLine: "Inside this small casket rests a tooth of the Buddha — kept safe for hundreds of years!",
    //       choices: [
    //         {
    //           label: "Light a lamp at the shrine",
    //           reply: "A small lamp lights the heart as much as the room — come!",
    //           visual: "You set a little oil lamp glowing among many others.",
    //         },
    //         {
    //           label: "Hear a Jataka story",
    //           reply: "The old stories of the Buddha's past lives — full of clever animals!",
    //           visual: "A monk tells of a wise hare under a glowing moon.",
    //         },
    //       ],
    //       token: { name: "Lotus Bud", image: "🪷", line: "A small lotus bud — opens slowly like wisdom itself!" },
    //       retention: {
    //         question: "What sacred thing was kept at Dantapura?",
    //         correctHint: "Dantapura kept the sacred tooth relic of the Buddha!",
    //         options: [
    //           { label: "A tooth relic of the Buddha", correct: true },
    //           { label: "A great pile of gold" },
    //           { label: "A magic sword" },
    //         ],
    //       },
    //       goodbye: "Further south to Kalinganagara — the capital of mighty Kalinga!",
    //       diary: {
    //         ancient: "Ancient Dantapura — city of the tooth relic",
    //         modern: "Near Srikakulam, Andhra Pradesh",
    //         narration: "The tooth relic later traveled to Sri Lanka — where it is honored to this day!",
    //       },
    //     },
    //     {
    //       id: "kalinganagara",
    //       name: "Kalinganagara",
    //       scene: scenePubbantapath,
    //       elder: "Kalinga Wood Carver",
    //       elderEmoji: "🛶",
    //       intro: [
    //         "Welcome to Kalinganagara — capital of Kalinga, land of brave sailors and shipbuilders!",
    //         "Our wooden ships are the strongest in all of India's eastern coast!",
    //       ],
    //       heritageObject: "Ship Plank",
    //       heritageEmoji: "🛶",
    //       heritageLine: "From these great trees we shape ships that cross the sea — strong and proud!",
    //       choices: [
    //         {
    //           label: "See the shipyard at the river",
    //           reply: "Come — listen to the hammers and the songs of the shipbuilders!",
    //           visual: "Workers shape a new hull beside the river, hammers tapping in rhythm.",
    //         },
    //         {
    //           label: "Watch the Bali Yatra festival",
    //           reply: "Today we float tiny boats with lamps — for our sailors far away!",
    //           visual: "Hundreds of small lamp-boats glow softly on the dark river water.",
    //         },
    //       ],
    //       token: { name: "Tiny Boat", image: "🛶", line: "A tiny boat with a lamp — for travelers like you!" },
    //       retention: {
    //         question: "What is Kalinganagara famous for?",
    //         correctHint: "Kalinganagara is famous for its strong wooden ships!",
    //         options: [
    //           { label: "Strong wooden ships", correct: true },
    //           { label: "Snow leopards" },
    //           { label: "Mountain caves" },
    //         ],
    //       },
    //       goodbye: "South again — to busy Pithunda!",
    //       diary: {
    //         ancient: "Ancient Kalinganagara — Kalinga's capital",
    //         modern: "Near Jaipur (Odisha) area",
    //         narration: "Odisha still celebrates Bali Yatra each year — remembering the brave sailors!",
    //       },
    //     },
    //     {
    //       id: "pithunda",
    //       name: "Pithunda",
    //       scene: scenePubbantapath,
    //       elder: "Pearl Merchant of Pithunda",
    //       elderEmoji: "🦪",
    //       intro: [
    //         "Welcome to Pithunda — our markets shine with pearls from the deep sea!",
    //         "Sailors and divers bring treasures from the ocean floor to our shore!",
    //       ],
    //       heritageObject: "Pearl",
    //       heritageEmoji: "🦪",
    //       heritageLine: "Each pearl is a tiny moon found inside a shell — a gift from the deep sea!",
    //       choices: [
    //         {
    //           label: "Watch the pearl divers",
    //           reply: "Brave divers swim deep — they hold their breath like fish!",
    //           visual: "Divers slip into shining blue water and rise with glowing shells.",
    //         },
    //         {
    //           label: "Shop in the pearl market",
    //           reply: "Strings of pearls hang like falling rain — come and see!",
    //           visual: "Stalls glitter with shimmering necklaces and tiny carved boxes.",
    //         },
    //       ],
    //       token: { name: "Single Pearl", image: "🦪", line: "A single pearl — round and gleaming like the moon!" },
    //       retention: {
    //         question: "What treasure came from Pithunda?",
    //         correctHint: "Pearls from the deep sea were the great treasure of Pithunda!",
    //         options: [
    //           { label: "Pearls from the sea", correct: true },
    //           { label: "Snow from the mountains" },
    //           { label: "Sand from the desert" },
    //         ],
    //       },
    //       goodbye: "One last stop — Masulipatnam, port of many sails!",
    //       diary: {
    //         ancient: "Ancient Pithunda — pearl port of the east",
    //         modern: "Near coastal Andhra Pradesh",
    //         narration: "Pearl diving on the eastern coast still happens today, just like long ago!",
    //       },
    //     },
    //     {
    //       id: "masulipatnam",
    //       name: "Masulipatnam",
    //       scene: scenePubbantapath,
    //       elder: "Cotton Printer of Masulipatnam",
    //       elderEmoji: "🪡",
    //       intro: [
    //         "Welcome to Masulipatnam — our printed cotton travels by sail to many distant kingdoms!",
    //         "Here the eastern road meets the great sea of ships and stories!",
    //       ],
    //       heritageObject: "Printed Cloth",
    //       heritageEmoji: "🪡",
    //       heritageLine: "We press wooden blocks into ink and onto cloth — flowers and birds bloom on every piece!",
    //       choices: [
    //         {
    //           label: "Watch block printing",
    //           reply: "Each stamp leaves a flower — soon a whole garden grows on the cloth!",
    //           visual: "A printer presses a carved wooden block; bright flowers bloom on white cotton.",
    //         },
    //         {
    //           label: "Wave goodbye to a ship",
    //           reply: "The sails are rising — wave with me as the ship sets out!",
    //           visual: "A great ship glides slowly out of the bay as sailors wave back.",
    //         },
    //       ],
    //       token: { name: "Printed Cloth", image: "🪡", line: "A small piece of printed cotton — sunny as the sea breeze!" },
    //       retention: {
    //         question: "What did Masulipatnam send across the sea?",
    //         correctHint: "Masulipatnam's printed cotton cloth sailed to many faraway kingdoms!",
    //         options: [
    //           { label: "Printed cotton cloth", correct: true },
    //           { label: "Ice and snow" },
    //           { label: "Wild horses" },
    //         ],
    //       },
    //       goodbye: "You have walked the whole Pubbantapath, brave traveler!",
    //       diary: {
    //         ancient: "Ancient Masulipatnam — sailing port of the east",
    //         modern: "Machilipatnam, Andhra Pradesh",
    //         narration: "Machilipatnam is still famous for its hand-printed Kalamkari cloth!",
    //       },
    //     },
    //   ],
    // };
    // const APARANTAPATH: Route = {
    //   id: "aparantapath",
    //   name: "Aparantapath",
    //   tagline: "The Western Road",
    //   region: "west",
    //   intro: [
    //     "This is Aparantapath — the western road! From the mountains to the sea, this path connected India to the whole wide world!",
    //     "This was the time of the sea traders — when Roman ships came all the way to India looking for spices, gems and cotton.",
    //   ],
    //   iconicImage: iconicAparantapath,
    //   iconicCaption: "A Roman ship docking at a busy port",
    //   color: "route-west",
    //   hex: "#1D4ED8",
    //   glow: "#60A5FA",
    //   mapDot: { x: 53 , y: 50 },
    //   pathDots: [
    //     { x: 22, y: 45 },
    //     { x: 20, y: 55 },
    //     { x: 18, y: 65 },
    //     { x: 16, y: 75 },
    //     { x: 25, y: 88 },
    //   ],
    //   stops: [
    //     {
    //       id: "barbarikon",
    //       name: "Barbarikon",
    //       scene: sceneAparantapath,
    //       elder: "Old Sea Trader of Barbarikon",
    //       elderEmoji: "🌊",
    //       intro: [
    //         "Welcome to Barbarikon — our port at the mouth of the great Indus!",
    //         "From here goods sail to Persia, Arabia and even to Rome!",
    //       ],
    //       heritageObject: "Trade Amphora",
    //       heritageEmoji: "🏺",
    //       heritageLine: "Roman ships fill these great clay jars with our spices and oils!",
    //       choices: [
    //         {
    //           label: "Watch the ships come in",
    //           reply: "Come — every ship brings news from a faraway land!",
    //           visual: "Tall sails appear on the horizon; sailors call out in many tongues.",
    //         },
    //         {
    //           label: "Visit the spice market",
    //           reply: "Smell the air — pepper, cinnamon, cardamom from every coast!",
    //           visual: "Mountains of colorful spices fill the busy market stalls.",
    //         },
    //       ],
    //       token: { name: "Tiny Amphora", image: "🏺", line: "A tiny clay jar — full of the smell of distant lands!" },
    //       retention: {
    //         question: "Where did ships from Barbarikon sail?",
    //         correctHint: "Ships sailed from Barbarikon to Persia, Arabia and Rome!",
    //         options: [
    //           { label: "To Persia, Arabia and Rome", correct: true },
    //           { label: "Up to the snowy mountains" },
    //           { label: "Into the deep desert" },
    //         ],
    //       },
    //       goodbye: "South now — to Bharukaccha, our greatest western port!",
    //       diary: {
    //         ancient: "Ancient Barbarikon — port at the Indus mouth",
    //         modern: "Near Karachi, Pakistan",
    //         narration: "Barbarikon's exact ruins are lost — but Karachi is still a great sea port today!",
    //       },
    //     },
    //     {
    //       id: "bharukaccha",
    //       name: "Bharukaccha",
    //       scene: sceneAparantapath,
    //       elder: "Harbour Master of Bharukaccha",
    //       elderEmoji: "⚓",
    //       intro: [
    //         "Welcome to Bharukaccha — the greatest port of western India!",
    //         "Roman traders come here in summer winds and leave in winter ones!",
    //       ],
    //       heritageObject: "Roman Coin",
    //       heritageEmoji: "🪙",
    //       heritageLine: "This is a Roman coin — paid for our pepper, our gems and our fine cotton!",
    //       choices: [
    //         {
    //           label: "See a Roman ship",
    //           reply: "A Roman ship has just docked — let's go and see!",
    //           visual: "A tall ship with red sails rests at the busy stone dock.",
    //         },
    //         {
    //           label: "Visit the gem traders",
    //           reply: "Our gems sparkle like little stars — come and look!",
    //           visual: "Sapphires and beryls glitter on dark cloth at the gem stall.",
    //         },
    //       ],
    //       token: { name: "Roman Coin", image: "🪙", line: "A small Roman coin — proof of journeys across the sea!" },
    //       retention: {
    //         question: "Who came to trade at Bharukaccha?",
    //         correctHint: "Roman traders came across the sea to buy from Bharukaccha!",
    //         options: [
    //           { label: "Roman sea traders", correct: true },
    //           { label: "Snow leopards" },
    //           { label: "Desert nomads only" },
    //         ],
    //       },
    //       goodbye: "South to Sopara — another shining western port!",
    //       diary: {
    //         ancient: "Ancient Bharukaccha — great Roman trade port",
    //         modern: "Bharuch, Gujarat",
    //         narration: "Bharukaccha is now called Bharuch — still a port city in Gujarat today!",
    //       },
    //     },
    //     {
    //       id: "sopara",
    //       name: "Sopara",
    //       scene: sceneAparantapath,
    //       elder: "Old Stupa Keeper of Sopara",
    //       elderEmoji: "🛕",
    //       intro: [
    //         "Welcome to Sopara — busy port and city of an Ashokan rock edict!",
    //         "Even our rocks speak the words of the great emperor!",
    //       ],
    //       heritageObject: "Edict Rock",
    //       heritageEmoji: "🪨",
    //       heritageLine: "Ashoka sent his message of kindness even here, far on the western coast!",
    //       choices: [
    //         {
    //           label: "Read the rock edict",
    //           reply: "Come — read the emperor's kind words with me!",
    //           visual: "Old letters carved in rock glow softly as the elder reads aloud.",
    //         },
    //         {
    //           label: "Climb to the small stupa",
    //           reply: "From up here you can see the sea — and many ships!",
    //           visual: "A breezy hill opens up wide views of the deep blue Arabian Sea.",
    //         },
    //       ],
    //       token: { name: "Edict Pebble", image: "🪨", line: "A tiny pebble — carrying the emperor's kind words!" },
    //       retention: {
    //         question: "What did Sopara have carved on its rocks?",
    //         correctHint: "Sopara's rocks carried Ashoka's messages of kindness!",
    //         options: [
    //           { label: "Ashoka's messages of peace", correct: true },
    //           { label: "Roman war stories" },
    //           { label: "Pirate maps" },
    //         ],
    //       },
    //       goodbye: "On to Kalyan — busy market of the western coast!",
    //       diary: {
    //         ancient: "Ancient Sopara — port and Ashokan edict site",
    //         modern: "Nala Sopara, Maharashtra",
    //         narration: "Sopara is now Nala Sopara — a part of Mumbai today!",
    //       },
    //     },
    //     {
    //       id: "kalyan",
    //       name: "Kalyan",
    //       scene: sceneAparantapath,
    //       elder: "Spice Trader of Kalyan",
    //       elderEmoji: "🌶️",
    //       intro: [
    //         "Welcome to Kalyan — our market overflows with pepper and ginger from the south!",
    //         "Caravans bring spices down from the mountains and ships carry them across the sea!",
    //       ],
    //       heritageObject: "Spice Sack",
    //       heritageEmoji: "🌶️",
    //       heritageLine: "A handful of pepper is worth a handful of silver — that is how precious it is!",
    //       choices: [
    //         {
    //           label: "Smell a basket of pepper",
    //           reply: "Take a deep breath — sharp and warm like sunshine!",
    //           visual: "A great basket of black peppercorns fills the air with spice.",
    //         },
    //         {
    //           label: "Watch a caravan arrive",
    //           reply: "Hear the bells! Camels and oxen come down from the hills!",
    //           visual: "A long caravan winds slowly into the market, bells gently ringing.",
    //         },
    //       ],
    //       token: { name: "Pepper Pouch", image: "🌶️", line: "A small pouch of pepper — worth a coin of silver!" },
    //       retention: {
    //         question: "What did Kalyan trade with the world?",
    //         correctHint: "Kalyan traded spices like pepper and ginger across the sea!",
    //         options: [
    //           { label: "Spices like pepper and ginger", correct: true },
    //           { label: "Snow and ice" },
    //           { label: "Pirate flags" },
    //         ],
    //       },
    //       goodbye: "One last stop — far south to Muziris on the spice coast!",
    //       diary: {
    //         ancient: "Ancient Kalyan — busy western spice market",
    //         modern: "Kalyan, near Mumbai, Maharashtra",
    //         narration: "Kalyan is now part of greater Mumbai — still a busy city today!",
    //       },
    //     },
    //     {
    //       id: "muziris",
    //       name: "Muziris",
    //       scene: sceneAparantapath,
    //       elder: "Chera Spice Merchant",
    //       elderEmoji: "🌿",
    //       intro: [
    //         "Welcome to Muziris — jewel of the spice coast, where Romans come for black pepper!",
    //         "Here Roman gold pours in and Indian spice flows out across the sea!",
    //       ],
    //       heritageObject: "Roman Wine Jar",
    //       heritageEmoji: "🍷",
    //       heritageLine: "Romans bring wine and gold; we send back pepper, cinnamon and pearls!",
    //       choices: [
    //         {
    //           label: "Visit the Roman warehouse",
    //           reply: "Roman amphoras line our shore — let me show you inside!",
    //           visual: "Rows of tall clay jars stand inside a cool stone warehouse.",
    //         },
    //         {
    //           label: "Walk the spice gardens",
    //           reply: "Pepper vines climb the trees — like green ropes full of treasure!",
    //           visual: "Green vines hang heavy with black peppercorns under tall trees.",
    //         },
    //       ],
    //       token: { name: "Pepper Vine Leaf", image: "🌿", line: "A green pepper-vine leaf — the source of Muziris' gold!" },
    //       retention: {
    //         question: "Why did Roman ships come to Muziris?",
    //         correctHint: "Roman ships came to Muziris for spices like black pepper!",
    //         options: [
    //           { label: "For spices like black pepper", correct: true },
    //           { label: "For ice from the mountains" },
    //           { label: "For wild tigers" },
    //         ],
    //       },
    //       goodbye: "You have walked the whole Aparantapath, brave traveler!",
    //       diary: {
    //         ancient: "Ancient Muziris — Roman trade port of the spice coast",
    //         modern: "Near Kodungallur, Kerala",
    //         narration: "Muziris is being uncovered today by archaeologists in Kerala — its secrets coming back to life!",
    //       },
    //     },
    //   ],
    // };
  ]
};
const ROUTES = {
  uttarapath: UTTARAPATH
};
const ROUTE_LIST = [
  UTTARAPATH
];
const $$splitNotFoundComponentImporter = () => import("./journey._routeId-Bjn_BoH9.js");
const $$splitComponentImporter = () => import("./journey._routeId-DXR-TLyj.js");
const Route = createFileRoute("/journey/$routeId")({
  head: ({
    params
  }) => {
    const r = ROUTES[params.routeId];
    return {
      meta: [{
        title: r ? `${r.name} — ${r.tagline} — Yatra` : "Journey — Yatra"
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  loader: ({
    params
  }) => {
    if (!(params.routeId in ROUTES)) throw notFound();
    return null;
  }
});
const SelectRoute = Route$3.update({
  id: "/select",
  path: "/select",
  getParentRoute: () => Route$4
});
const Activity56Route = Route$2.update({
  id: "/activity56",
  path: "/activity56",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const JourneyRouteIdRoute = Route.update({
  id: "/journey/$routeId",
  path: "/journey/$routeId",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  Activity56Route,
  SelectRoute,
  JourneyRouteIdRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ROUTE_LIST as R,
  Route as a,
  ROUTES as b,
  mathuraSculptorVideo as c,
  mathuraAnswer1 as d,
  mathuraAnswer2 as e,
  mathuraAnswer3 as f,
  mathuraTempleVideo as m,
  router as r,
  sculptorBtnMathura as s,
  templeBtn as t
};
