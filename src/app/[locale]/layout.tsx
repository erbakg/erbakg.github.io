import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { resume } from "@/shared/config/resume";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const title = `Erbol Mederbekov — Frontend Engineer`;
  const description = t("tagline");
  return {
    title,
    description,
    alternates: {
      languages: { en: "/en", ru: "/ru", "x-default": "/en" },
    },
    openGraph: {
      title,
      description,
      images: ["/og.png"],
      type: "profile",
      locale,
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
};

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
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
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
