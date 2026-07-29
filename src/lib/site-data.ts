import {
  Activity,
  Bone,
  Boxes,
  Car,
  CircleDot,
  Crosshair,
  Eye,
  Filter,
  Focus,
  Gauge,
  Package,
  Radar,
  Ruler,
  Skull,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { DISCORD_URL } from "@/lib/discord";
import { CHECKOUT_URL } from "@/lib/checkout";

export type Feature = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  image: string;
  highlight: string;
};

export const features: Feature[] = [
  {
    slug: "player-esp",
    title: "Player ESP",
    highlight: "SEE BEFORE CONTACT",
    description:
      "See player positions, distance, and key status cues through terrain and structures so you can plan approaches before contact.",
    icon: Eye,
    tags: ["Distance", "Visibility", "Filterable"],
    image: "/images/cheat-01-esp.jpg",
  },
  {
    slug: "loot-esp",
    title: "Loot ESP",
    highlight: "FIND VALUE FASTER",
    description:
      "Highlight valuable gear and supplies across buildings and open ground, with filters that keep the overlay readable.",
    icon: Package,
    tags: ["Gear", "Filters", "Priority loot"],
    image: "/images/cheat-02-loot.jpg",
  },
  {
    slug: "containers",
    title: "Containers",
    highlight: "CLEAR YOUR ROUTE",
    description:
      "Locate crates, barrels, and storage points faster so scavenging routes stay efficient on large maps.",
    icon: Boxes,
    tags: ["Crates", "Storage", "Routes"],
    image: "/images/cheat-05-containers.jpg",
  },
  {
    slug: "aimbot",
    title: "Aimbot",
    highlight: "CONTROL THE FIGHT",
    description:
      "Configurable aiming assistance with smoothing, FOV control, and bone selection for deliberate PvP setups.",
    icon: Crosshair,
    tags: ["Smoothing", "FOV ring", "Bone select"],
    image: "/images/cheat-03-aimbot.jpg",
  },
  {
    slug: "2d-radar",
    title: "2D Radar",
    highlight: "READ THE FIELD",
    description:
      "Track nearby activity on a compact radar view for quicker decisions when the main overlay is busy.",
    icon: Radar,
    tags: ["Minimap style", "Awareness", "Range"],
    image: "/images/cheat-04-radar.jpg",
  },
  {
    slug: "aim-configuration",
    title: "Aim Configuration",
    highlight: "TUNE YOUR PROFILE",
    description:
      "Tune FOV ring size, target bone, and smoothing independently so settings match your play style and server pace.",
    icon: Target,
    tags: ["Profiles", "Hotkeys", "Precision"],
    image: "/images/cheat-06-players.jpg",
  },
];

export type FeatureShowcase = {
  slug: string;
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

/** Zigzag feature rows for /features — 16 DayZ cheat visuals */
export const featureShowcases: FeatureShowcase[] = [
  {
    slug: "player-esp",
    label: "Feature 01",
    title: "Player ESP",
    description:
      "Outline players through walls and foliage with distance cues so you can decide whether to engage, avoid, or flank before contact.",
    ctaLabel: "View pricing",
    ctaHref: "/pricing/",
    icon: Eye,
    image: "/images/feat-01.jpg",
    imageAlt: "DayZ Player ESP overlay highlighting nearby survivors",
  },
  {
    slug: "loot-esp",
    label: "Feature 02",
    title: "Loot ESP",
    description:
      "Surface high-value gear across towns and compounds. Filter noise so only the loot that matters stays on screen.",
    ctaLabel: "Read FAQ",
    ctaHref: "/faq/",
    secondaryCtaLabel: "Get access",
    secondaryCtaHref: CHECKOUT_URL,
    icon: Package,
    image: "/images/feat-02.jpg",
    imageAlt: "DayZ Loot ESP highlighting gear and supplies",
  },
  {
    slug: "aimbot-controls",
    label: "Feature 03",
    title: "Aimbot Controls",
    description:
      "Configurable aim assist with smoothing and FOV so your profile matches deliberate PvP pacing instead of a blunt snap.",
    ctaLabel: "Tune profiles",
    ctaHref: "/blog/aimbot-fov-and-smoothing/",
    icon: Crosshair,
    image: "/images/feat-03.jpg",
    imageAlt: "DayZ Aimbot FOV ring and assist overlay",
  },
  {
    slug: "2d-radar",
    label: "Feature 04",
    title: "2D Radar",
    description:
      "Keep a compact radar read of nearby activity when the main overlay is busy — useful for rotations and compound clears.",
    ctaLabel: "See plans",
    ctaHref: "/pricing/",
    icon: Radar,
    image: "/images/feat-04.jpg",
    imageAlt: "DayZ 2D radar minimap style overlay",
  },
  {
    slug: "containers",
    label: "Feature 05",
    title: "Container ESP",
    description:
      "Locate crates, barrels, and storage faster so scavenging routes stay efficient across Chernarus-scale maps.",
    ctaLabel: "View features",
    ctaHref: "#feature-15",
    icon: Boxes,
    image: "/images/feat-05.jpg",
    imageAlt: "DayZ container and crate ESP highlights",
  },
  {
    slug: "zombie-awareness",
    label: "Feature 06",
    title: "Infected Awareness",
    description:
      "Spot infected clusters before they stack on your entry. Useful when quiet looting matters more than raw firefights.",
    ctaLabel: "Support",
    ctaHref: "/support/",
    icon: Skull,
    image: "/images/feat-06.jpg",
    imageAlt: "DayZ infected ESP awareness overlay",
  },
  {
    slug: "vehicle-esp",
    label: "Feature 07",
    title: "Vehicle ESP",
    description:
      "Mark vehicles and wrecks at range so you can plan extractions, ambushes, or long rotations with fewer surprises.",
    ctaLabel: "Get access",
    ctaHref: CHECKOUT_URL,
    icon: Car,
    image: "/images/feat-07.jpg",
    imageAlt: "DayZ vehicle ESP on open road",
  },
  {
    slug: "bone-selection",
    label: "Feature 08",
    title: "Bone Selection",
    description:
      "Choose head, chest, or center-mass targets independently so aim profiles match distance and fight chaos.",
    ctaLabel: "Aim guide",
    ctaHref: "/blog/aimbot-fov-and-smoothing/",
    icon: Bone,
    image: "/images/feat-08.jpg",
    imageAlt: "DayZ aimbot bone selection HUD",
  },
  {
    slug: "distance-esp",
    label: "Feature 09",
    title: "Distance Readouts",
    description:
      "Floating range markers help you judge engagements before committing — especially across fog and open hills.",
    ctaLabel: "ESP basics",
    ctaHref: "/blog/dayz-esp-setup-basics/",
    icon: Ruler,
    image: "/images/feat-09.jpg",
    imageAlt: "DayZ distance ESP numbers on distant player",
  },
  {
    slug: "medical-loot",
    label: "Feature 10",
    title: "Medical Loot ESP",
    description:
      "Prioritize bandages, blood bags, and meds in hospitals and clinics when survival pressure is highest.",
    ctaLabel: "View pricing",
    ctaHref: "/pricing/",
    icon: Activity,
    image: "/images/feat-10.jpg",
    imageAlt: "DayZ medical loot ESP in hospital interior",
  },
  {
    slug: "silent-aim",
    label: "Feature 11",
    title: "Target Lock Assist",
    description:
      "Lock markers and assist modes help hold pressure on distant targets during rooftop and hill fights.",
    ctaLabel: "FAQ",
    ctaHref: "/faq/",
    secondaryCtaLabel: "Discord",
    secondaryCtaHref: DISCORD_URL,
    icon: Focus,
    image: "/images/feat-11.jpg",
    imageAlt: "DayZ silent aim target lock concept",
  },
  {
    slug: "fov-ring",
    label: "Feature 12",
    title: "FOV Ring",
    description:
      "Control how wide aim assist searches. Smaller rings feel intentional; larger rings catch targets earlier.",
    ctaLabel: "Configure",
    ctaHref: "/blog/aimbot-fov-and-smoothing/",
    icon: CircleDot,
    image: "/images/feat-12.jpg",
    imageAlt: "DayZ FOV circle aimbot settings mockup",
  },
  {
    slug: "recoil-control",
    label: "Feature 13",
    title: "Recoil Assist",
    description:
      "Stability helpers keep spray readable in close fights without pretending any setup is risk-free from anti-cheat.",
    ctaLabel: "Updates",
    ctaHref: "/updates/",
    icon: Gauge,
    image: "/images/feat-13.jpg",
    imageAlt: "DayZ recoil control HUD overlay",
  },
  {
    slug: "night-vision",
    label: "Feature 14",
    title: "Night Visibility",
    description:
      "Low-light overlays keep players and paths readable after dark when vanilla visibility collapses.",
    ctaLabel: "Get access",
    ctaHref: CHECKOUT_URL,
    icon: Zap,
    image: "/images/feat-14.jpg",
    imageAlt: "DayZ night vision ESP forest scene",
  },
  {
    slug: "item-filters",
    label: "Feature 15",
    title: "Item Filters",
    description:
      "Checkbox-style filters for weapons, ammo, food, and gear keep overlays clean on busy official and community servers.",
    ctaLabel: "ESP guide",
    ctaHref: "/blog/dayz-esp-setup-basics/",
    icon: Filter,
    image: "/images/feat-15.jpg",
    imageAlt: "DayZ item filter menu over warehouse loot",
  },
  {
    slug: "prediction",
    label: "Feature 16",
    title: "Lead Prediction",
    description:
      "Visual lead trails help track moving targets across open fields — tune carefully to match your engagement style.",
    ctaLabel: "View pricing",
    ctaHref: "/pricing/",
    icon: Target,
    image: "/images/feat-16.jpg",
    imageAlt: "DayZ bullet path prediction overlay",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Is DayZ Cheats safe from BattlEye detection?",
    answer:
      "No product can truthfully promise permanent protection from BattlEye. Detection risk changes after game and anti-cheat updates. Review the latest status and update notes before each session, and understand that using cheats can still result in account penalties.",
  },
  {
    question: "What ESP and Aimbot features are included?",
    answer:
      "The toolkit focuses on Player ESP, Loot ESP, container visibility, Aimbot controls (smoothing, FOV ring, bone selection), and a 2D radar module. Exact options can change with updates — check the features page and changelog for the current build.",
  },
  {
    question: "Which systems are supported?",
    answer:
      "Support targets common Windows PC setups used for DayZ. Compatibility can depend on OS version, overlays, and security software. Contact support with your system details before purchase if you are unsure.",
  },
  {
    question: "How do updates and support work?",
    answer:
      "Product updates are published when maintenance is required after DayZ patches. Support is available for access, setup guidance, and billing questions. Response times can vary during major game updates.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Refund conditions depend on the package and whether access was delivered or used. Read the refund policy before checkout. If something fails during delivery, contact support with your order details.",
  },
  {
    question: "How do I buy DayZ Cheats?",
    answer:
      "Open the checkout product page, choose your access period, and complete payment. After purchase, follow the delivery instructions for access and setup. Keep your order confirmation for support requests.",
  },
  {
    question: "What access periods are available?",
    answer:
      "Common options are 1 Day, 1 Week, and 1 Month. Exact durations and pricing appear on the purchase page. Pick a shorter plan if you want to test first, or a longer plan if you play regularly.",
  },
  {
    question: "Can I use DayZ Cheats on official and community servers?",
    answer:
      "The product is built for DayZ on PC, but server rules and anti-cheat enforcement still apply. Using third-party tools can violate server or game terms and may lead to kicks, bans, or other penalties.",
  },
  {
    question: "Do I need to reinstall after every DayZ update?",
    answer:
      "Not always. Some patches only need a product update; others may need a fresh setup. Check the updates page or Discord notices after major DayZ or BattlEye maintenance before launching.",
  },
  {
    question: "How should I configure Player ESP for towns?",
    answer:
      "Use shorter distance limits and clearer filters in dense towns so overlays stay readable. Turn off low-priority categories until you need them, then expand range when rotating across open ground.",
  },
  {
    question: "What do Aimbot FOV and smoothing control?",
    answer:
      "FOV sets how wide assist searches for targets. Smoothing controls how quickly aim moves toward a lock. Smaller FOV and higher smoothing usually feel more deliberate; aggressive settings can look unnatural.",
  },
  {
    question: "Is spoofing or HWID protection included?",
    answer:
      "Do not assume any spoofing claim means permanent safety. Hardware bans and detection methods change. Ask support what the current build includes, and treat every session as carrying account risk.",
  },
  {
    question: "Will antivirus block the loader or overlay?",
    answer:
      "Some security tools flag game overlays and injectors as potentially unwanted. You may need temporary exclusions for installation folders. Only download from the official purchase delivery channel.",
  },
  {
    question: "Can multiple people share one license?",
    answer:
      "Access is intended for the purchaser’s use according to the product terms. Sharing credentials can cause lockouts, delivery issues, or revoked access. Contact support if you need help transferring a device.",
  },
  {
    question: "Where do I get help if setup fails?",
    answer:
      "Use the support page or Discord with your order details, Windows version, and a short description of the error. Screenshots of the failure step help the team respond faster during busy update windows.",
  },
];

export type Plan = {
  id: string;
  name: string;
  duration: string;
  priceLabel: string;
  description: string;
  features: string[];
  checkoutHref: string;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "1-day",
    name: "1 Day",
    duration: "24 hours access",
    priceLabel: "Checkout",
    description: "Short access for testing features on your current DayZ build.",
    features: ["ESP modules", "Aimbot controls", "2D Radar", "Support access"],
    checkoutHref: CHECKOUT_URL,
  },
  {
    id: "1-week",
    name: "1 Week",
    duration: "7 days access",
    priceLabel: "Checkout",
    description: "Balanced option for regular play sessions across a week.",
    features: [
      "All 1 Day features",
      "Priority update notices",
      "Config guidance",
      "Support access",
    ],
    checkoutHref: CHECKOUT_URL,
    highlighted: true,
  },
  {
    id: "1-month",
    name: "1 Month",
    duration: "30 days access",
    priceLabel: "Checkout",
    description: "Longer access for players who want fewer renewals.",
    features: [
      "All 1 Week features",
      "Extended update window",
      "Support access",
      "Refund policy applies",
    ],
    checkoutHref: CHECKOUT_URL,
  },
];

export type { BlogBlock, BlogLink, BlogPost } from "@/lib/blog/types";
export { blogPosts } from "@/lib/blog/index";
