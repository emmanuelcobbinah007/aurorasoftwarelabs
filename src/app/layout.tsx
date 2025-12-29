// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aurora Software Labs | Northern Lights for Africa's Tech Frontier",
  description:
    "Aurora Software Labs is building innovative web, mobile, and AI-powered solutions for Africa. Join us as we bring the Northern Lights to Africa's tech frontier.",
  keywords:
    "Aurora Software Labs, Africa tech, web development, AI solutions, Ghana software company, SaaS Africa, innovation labs, Aurora Labs Ghana",
  authors: [{ name: "Aurora Software Labs" }],
  creator: "Aurora Software Labs",
  publisher: "Aurora Software Labs",
  metadataBase: new URL("https://www.aurorasoftwarelabs.io"),
  alternates: {
    canonical: "https://www.aurorasoftwarelabs.io",
  },
  openGraph: {
    title: "Aurora Software Labs | Northern Lights for Africa's Tech Frontier",
    description:
      "Innovative software solutions from Ghana for Africa's tech frontier. Web, mobile, and AI development that empowers the future.",
    url: "https://www.aurorasoftwarelabs.io",
    siteName: "Aurora Software Labs",
    images: [
      {
        url: "https://www.aurorasoftwarelabs.io/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aurora Software Labs | Northern Lights for Africa's Tech Frontier",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Software Labs | Northern Lights for Africa's Tech Frontier",
    description:
      "Building Africa’s tech frontier with innovative web, mobile, and AI-powered solutions.",
    images: ["https://www.aurorasoftwarelabs.io/opengraph-image.png"],
    creator: "@aurorasoftwalabs",
  },
};

// app/layout.tsx continued
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aurora Software Labs",
              url: "https://www.aurorasoftwarelabs.io",
              logo: "https://www.aurorasoftwarelabs.io/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/aurorasoftwalabs",
                "https://twitter.com/aurorasoftwalabs",
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <SmoothScroll />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
