import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Cv } from "@/widgets/cv";
import { resume } from "@/shared/config/resume";

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cv" });
  const title = `${resume.name} — CV`;
  return {
    title,
    description: t("profile"),
    robots: { index: false, follow: true },
  };
};

type Locale = "en" | "ru";

const CvRoute = async ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Cv />;
};

export default CvRoute;
