import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { resume } from "@/shared/config/resume";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations({ locale: "en", namespace: "hero" });
  const title = "Erbol Mederbekov — Frontend Engineer";
  const description = t("tagline");
  return {
    metadataBase: new URL("https://erbakg.github.io"),
    title,
    description,
    alternates: {
      languages: { en: "/en/", ru: "/ru/", "x-default": "/en/" },
    },
    openGraph: { title, description, images: ["/og.png"], type: "profile" },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    <body className="antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: resume.name,
            jobTitle: resume.title,
            email: `mailto:${resume.email}`,
            url: resume.githubUrl,
            address: {
              "@type": "PostalAddress",
              addressLocality: resume.location.city,
              addressCountry: resume.location.country,
            },
          }),
        }}
      />
      {children}
    </body>
  </html>
);

export default RootLayout;
