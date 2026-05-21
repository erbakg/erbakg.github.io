import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/widgets/hero";
import { ImpactStats } from "@/widgets/impact-stats";
import { Experience } from "@/widgets/experience";
import { Skills } from "@/widgets/skills";
import { MobileAndroid } from "@/widgets/mobile-android";
import { Contact } from "@/widgets/contact";
import { Footer } from "@/widgets/footer";
import { LocaleSwitch } from "@/shared/ui";

type Locale = "en" | "ru";

const Page = async ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <LocaleSwitch currentLocale={locale} className="fixed right-4 top-4 z-50" />
      <main>
        <Hero />
        <ImpactStats />
        <Experience />
        <Skills />
        <MobileAndroid />
        <Contact />
      </main>
      <Footer locale={locale} />
    </>
  );
};

export default Page;
