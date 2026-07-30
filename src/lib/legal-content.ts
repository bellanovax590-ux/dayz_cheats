export type PolicySection = {
  heading: string;
  paragraphs: string[];
};

export const privacyPolicySections: PolicySection[] = [
  {
    heading: "Information we collect",
    paragraphs: [
      "dayzcheat.net is an informational website for DayZ cheats. We do not operate in-game software from this domain. When you browse this site, standard web logs may record your IP address, browser type, pages visited, and referral source for security and analytics.",
      "If you contact support or complete checkout on our payment partner (zadeyo.com), that provider processes payment and account data under its own privacy policy. We do not collect your Steam password or BattlEye credentials on dayzcheat.net.",
    ],
  },
  {
    heading: "How we use information",
    paragraphs: [
      "We use aggregated visit data to improve page performance, fix broken links, and understand which DayZ ESP, aimbot, and pricing guides are most useful. We do not sell personal data to third-party advertisers.",
      "Support messages are used only to resolve billing, access, or product questions related to DayZ cheats purchased through official checkout links listed on this site.",
    ],
  },
  {
    heading: "Cookies and local storage",
    paragraphs: [
      "This site may store a theme preference (light or dark mode) in your browser local storage. No advertising cookies are required to read our blog guides or feature pages.",
      "External checkout and Discord links are governed by those services' cookie policies once you leave dayzcheat.net.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can clear site data through your browser settings. For payment or license questions, contact support with the email used at checkout rather than submitting sensitive credentials in public channels.",
      "Questions about this policy can be directed through the support page on dayzcheat.net.",
    ],
  },
];

export const termsSections: PolicySection[] = [
  {
    heading: "Acceptance of terms",
    paragraphs: [
      "By using dayzcheat.net you agree to these terms. This website provides information about third-party DayZ cheats including ESP, aimbot, and radar tools. You must be of legal age in your jurisdiction to purchase or use such software.",
      "dayzcheat.net is not affiliated with Bohemia Interactive or the official DayZ game. Trademarks belong to their respective owners.",
    ],
  },
  {
    heading: "Product and risk disclosure",
    paragraphs: [
      "DayZ cheats are third-party tools that may violate the game's terms of service. BattlEye anti-cheat may detect unauthorized software and issue bans. We describe features honestly and publish update guidance, but we do not guarantee undetected or permanent access.",
      "You are responsible for how you use any software accessed through checkout links on this site. Using cheats on accounts you cannot afford to lose is at your own risk.",
    ],
  },
  {
    heading: "Website content",
    paragraphs: [
      "Blog guides, feature descriptions, and pricing summaries are provided for education. Feature availability can change after DayZ patches. Always read the latest updates page and FAQ before launching.",
      "You may link to our public pages with a descriptive anchor (for example, DayZ ESP setup guide). Do not scrape or republish full articles without permission.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "dayzcheat.net and its operators are not liable for game bans, data loss, hardware issues, or damages arising from use of third-party cheat software. Maximum liability for website errors is limited to the amount you paid for access in the preceding thirty days, where applicable law allows.",
    ],
  },
];

export const refundPolicySections: PolicySection[] = [
  {
    heading: "Eligible refund reasons",
    paragraphs: [
      "Refunds may be considered when a license key was never delivered, a duplicate charge occurred, or the product listed at checkout does not match what was provisioned. Contact support with your transaction ID and purchase email.",
      "BattlEye bans, voluntary account closures, or user misconfiguration are generally not refundable. Cheat products carry inherent enforcement risk disclosed on the FAQ and blog before purchase.",
    ],
  },
  {
    heading: "Non-refundable situations",
    paragraphs: [
      "Successful delivery of a working DayZ cheat loader for the advertised period is usually non-refundable even if you stop playing or receive a game ban. HWID resets follow the limits described in the FAQ.",
      "Chargebacks filed after successful delivery may result in permanent suspension from future purchases across affiliated services.",
    ],
  },
  {
    heading: "How to request a refund",
    paragraphs: [
      "Open a support ticket with your order ID, date, product name, and a factual description of the issue. Screenshots of portal errors help; rage messages without technical detail delay resolution.",
      "Approved refunds are processed through the original payment method when possible. Processing times depend on the payment provider and may take several business days.",
    ],
  },
];
