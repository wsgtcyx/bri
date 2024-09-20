import AverageBRI from "@/components/home/AverageBRI";
import BRICalculator from "@/components/home/BRICalculator";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import HowToUse from "@/components/home/HowToUse";
import Interpret from "@/components/home/Interpret";
import MeasureWaist from "@/components/home/MeasureWaist";
import References from "@/components/home/References";
import WhatIsBRI from "@/components/home/WhatIsBRI";
import WhyBRI from "@/components/home/WhyBRI";
import { defaultLocale } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;

  return (
    <>
      <Hero locale={langName} />
      <WhatIsBRI locale={langName} />
      <HowToUse locale={langName} />
      <MeasureWaist locale={langName} />
      <BRICalculator locale={langName} />
      <Interpret locale={langName} />
      <AverageBRI locale={langName} />
      <WhyBRI locale={langName} />
      <FAQ locale={langName} />
      <CTA locale={langName} />
      <Feedback locale={langName} />
      <References />
    </>
  );
}
