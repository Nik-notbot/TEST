import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicySection } from "@/components/PolicySection";
import { PolicyPageHeader } from "@/components/PolicyPageHeader";
import { PolicyContainer } from "@/components/PolicyContainer";
import { privacyPolicySections, privacyPolicyMeta } from "@/data/privacy";

/**
 * Страница политики конфиденциальности
 * Структура страницы разделена на компоненты для лучшей читаемости и поддерживаемости
 */
const PrivacyPolicy = () => {
  // Автоматический скролл вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <PolicyContainer>
          <PolicyPageHeader
            title={privacyPolicyMeta.title}
            publicationDate={privacyPolicyMeta.publicationDate}
          />

          <div className="prose prose-gray max-w-none">
            {privacyPolicySections.map((section) => (
              <PolicySection
                key={section.id}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </PolicyContainer>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
