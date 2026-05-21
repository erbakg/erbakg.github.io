import { setRequestLocale } from "next-intl/server";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { ImpactStats } from "@/widgets/impact-stats";
import { Experience } from "@/widgets/experience";
import { Skills } from "@/widgets/skills";
import { MobileAndroid } from "@/widgets/mobile-android";
import { Contact } from "@/widgets/contact";
import { Footer } from "@/widgets/footer";

type Locale = "en" | "ru";

const Page = async ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero />
        <ImpactStats />
        <Experience />
        <Skills />
        <MobileAndroid />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Page;
