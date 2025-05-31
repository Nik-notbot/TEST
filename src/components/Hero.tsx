import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { useLanguage } from "@/lib/i18n/context";

export function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="w-full py-32 md:py-40 lg:py-48 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {locale === "ru" ? (
                <>
                  <GradientText animated className="font-extrabold">Проходим KYC</GradientText> в финансовых сервисах за вас
                </>
              ) : (
                <>
                  Professional <GradientText animated className="font-extrabold">KYC Assistance</GradientText> for Your Financial Services
                </>
              )}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-6">
              {t("hero.description")}
            </p>
          </div>
          <div className="mt-8">
            <Button 
              className="rounded-full px-10 py-6 bg-gray-900 hover:bg-gray-800 text-base" 
              size="lg" 
              onClick={() => document.getElementById("banks")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("hero.button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}