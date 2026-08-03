/** Primary search terms the site targets across metadata and on-page copy. */
export const PRIMARY_KEYWORDS = [
  "dayz cheats",
  "dayz esp",
  "dayz aimbot",
  "dayz wallhack",
  "dayz triggerbot",
  "dayz radar",
  "dayz player esp",
  "dayz loot esp",
  "dayz hack",
  "dayz cheat",
  "DayZ cheats",
  "DayZ ESP",
  "DayZ aimbot",
  "dayzcheat.net",
] as const;

export type KeywordTopic = {
  term: string;
  description: string;
  href: string;
  linkLabel: string;
};

/** Visible homepage topics mapped to internal guides and feature pages. */
export const KEYWORD_TOPICS: KeywordTopic[] = [
  {
    term: "DayZ ESP",
    description:
      "Player ESP, loot ESP, and container highlights help you read the map before contact — the core visibility layer behind most DayZ cheats.",
    href: "/blog/dayz-esp-setup-basics/",
    linkLabel: "DayZ ESP setup guide",
  },
  {
    term: "DayZ Aimbot",
    description:
      "Configurable FOV, smoothing, and bone selection for controlled PvP. Tune profiles instead of running obvious snap settings.",
    href: "/blog/aimbot-fov-and-smoothing/",
    linkLabel: "DayZ aimbot settings",
  },
  {
    term: "DayZ Radar",
    description:
      "2D radar tracks nearby players and loot clusters when the main overlay is crowded — useful for rotations and compound clears.",
    href: "/blog/how-to-use-dayz-2d-radar/",
    linkLabel: "DayZ radar guide",
  },
  {
    term: "DayZ Wallhack",
    description:
      "ESP visibility through terrain and structures works like a practical wallhack layer for players, infected, and storage points.",
    href: "/features/",
    linkLabel: "View ESP features",
  },
  {
    term: "DayZ Loot ESP",
    description:
      "Filter weapons, medical gear, and high-value loot so scavenging routes stay fast without cluttering your overlay.",
    href: "/blog/dayz-loot-esp-filter-guide/",
    linkLabel: "Loot ESP filters",
  },
  {
    term: "DayZ Triggerbot",
    description:
      "Recoil assist and aim profiles focus on controlled shots. The product emphasizes smoothing and FOV limits over reckless automation.",
    href: "/blog/dayz-aimbot-recoil-assist-basics/",
    linkLabel: "Recoil assist basics",
  },
];
