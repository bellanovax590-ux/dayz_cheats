import type { Metadata } from "next";
import { Exo_2, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dayzcheat.net"),
  title: {
    default: "DayZ Cheats – ESP & Aimbot | DayZ",
    template: "%s | DayZ Cheats",
  },
  description:
    "Explore DayZ Cheats featuring ESP and Aimbot. View features, pricing plans, updates, and support information on dayzcheat.net.",
  icons: {
    icon: [{ url: "/images/zadeyo-logo.webp", type: "image/webp" }],
    apple: [{ url: "/images/zadeyo-logo.webp", type: "image/webp" }],
    shortcut: ["/images/zadeyo-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "DayZ Cheats – ESP & Aimbot | DayZ",
    description:
      "Explore DayZ Cheats featuring ESP and Aimbot. View features, pricing plans, updates, and support information.",
    url: "https://dayzcheat.net/",
    siteName: "DayZ Cheats",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/zadeyo-logo.webp",
        width: 512,
        height: 512,
        alt: "DayZ Cheats logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "DayZ Cheats – ESP & Aimbot | DayZ",
    description:
      "Explore DayZ Cheats featuring ESP and Aimbot on dayzcheat.net.",
    images: ["/images/zadeyo-logo.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DayZ Cheats",
  url: "https://dayzcheat.net",
  logo: "https://dayzcheat.net/images/zadeyo-logo.webp",
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
      className={`${exo2.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-[var(--background)] font-sans text-[var(--foreground)] transition-colors duration-300">
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
