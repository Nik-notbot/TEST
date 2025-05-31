import { CheckCircle, Shield, Zap, UserCheck, Clock, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function Features() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-16 md:py-24 lg:py-28 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {t("features.approach.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px]">
            {t("features.approach.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-4 p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-3 rounded-full bg-gray-100">
              <UserCheck className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold">{t("features.approach.individual.title")}</h3>
            <p className="text-muted-foreground text-center">
              {t("features.approach.individual.description")}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-3 rounded-full bg-gray-100">
              <HeadphonesIcon className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold">{t("features.approach.fullSupport.title")}</h3>
            <p className="text-muted-foreground text-center">
              {t("features.approach.fullSupport.description")}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-3 rounded-full bg-gray-100">
              <Clock className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold">{t("features.approach.timeSaving.title")}</h3>
            <p className="text-muted-foreground text-center">
              {t("features.approach.timeSaving.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
