import BRICalculator from "@/components/home/BRICalculator";
import Hero from "@/components/home/Hero";
import HowToUse from "@/components/home/HowToUse";
import WhatIsBRI from "@/components/home/WhatIsBRI";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      <Hero locale={langName} />
      <WhatIsBRI locale={langName} />
      <HowToUse locale={langName} />
      <BRICalculator />

      {/* 

      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />

      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />



        
        

        <WhyBRI />
        <Interpret />
        <AverageBRI />
        <Feedback />
        <References />
      </div> */}
    </>
  );
}
