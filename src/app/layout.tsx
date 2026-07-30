import type { Metadata } from "next";
import { Exo_2, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DayZ Cheats – ESP & Aimbot | DayZ",
    template: "%s | DayZ Cheats",
  },
  description:
    "Explore DayZ Cheats featuring ESP and Aimbot. View features, pricing plans, blog guides, updates, and support information on dayzcheat.net.",
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  icons: {
    icon: [{ url: "/images/zadeyo-logo.webp", type: "image/webp" }],
    apple: [{ url: "/images/zadeyo-logo.webp", type: "image/webp" }],
    shortcut: ["/images/zadeyo-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DayZ Cheats – ESP & Aimbot | DayZ",
    description:
      "Explore DayZ Cheats featuring ESP and Aimbot. View features, pricing plans, updates, and support information.",
    url: `${SITE_URL}/`,
    siteName: "DayZ Cheats",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "DayZ Cheats – ESP and Aimbot for DayZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DayZ Cheats – ESP & Aimbot | DayZ",
    description:
      "Explore DayZ Cheats featuring ESP and Aimbot on dayzcheat.net.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DayZ Cheats",
  url: SITE_URL,
  logo: `${SITE_URL}/images/zadeyo-logo.webp`,
};

const themeBootstrapScript = `(function(){try{var t=localStorage.getItem("dayz-theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}else{document.documentElement.dataset.theme="dark";document.documentElement.style.colorScheme="dark";}}catch(e){document.documentElement.dataset.theme="dark";document.documentElement.style.colorScheme="dark";}})();`;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      className={`${exo2.variable} ${plexMono.variable} h-full overflow-x-hidden antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[var(--background)] font-sans text-[var(--foreground)] transition-colors duration-300">
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
