import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Автоматический скролл вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Функция для перехода на главную и скролла вверх
  const navigateHome = () => {
    if (isHomePage) {
      // На главной странице просто скроллим к верху
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // На других страницах перенаправляем на главную
      navigate("/");
      // Добавляем задержку для скролла вверх после перехода
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  // Функция для перехода на главную и скролла к определенной секции
  const navigateToSection = (id: string) => {
    if (isHomePage) {
      // На главной странице просто скроллим к секции
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // На других страницах перенаправляем на главную и затем скроллим к секции
      navigate("/");
      // Увеличиваем задержку для надежной загрузки страницы
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              navigateHome();
            }}
          >
            <div className="flex items-center justify-center bg-gray-900 w-8 h-8 rounded-full">
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span className="text-xl font-semibold">HEY, KYC!</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <button
            onClick={navigateHome}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t("header.home")}
          </button>
          <button
            onClick={() => navigateToSection("banks")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t("header.services")}
          </button>
          <button
            onClick={() => navigateToSection("services")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t("header.features")}
          </button>
          <button
            onClick={() => navigateToSection("faq")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t("header.faq")}
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <div className="h-9 flex items-center">
            <LanguageSwitcher />
          </div>
          <Button
            className="rounded-full bg-gray-900 hover:bg-gray-800"
            onClick={() => navigateToSection("banks")}
          >
            {t("header.catalog")}
          </Button>
        </div>
      </div>
    </header>
  );
}
