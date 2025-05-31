import React, { createContext, useState, useContext, useEffect } from "react";
import { translations, Locale, Translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const detectBrowserLanguage = (): Locale => {
    // Определение языка по браузеру и часовому поясу
    try {
      // Проверяем язык браузера
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "ru") return "ru";
      
      // Проверяем часовой пояс - если соответствует российскому, предполагаем русский
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timeZone.includes("Moscow") || timeZone.includes("Samara") || 
          timeZone.includes("Yekaterinburg") || timeZone.includes("Omsk") || 
          timeZone.includes("Krasnoyarsk") || timeZone.includes("Irkutsk") || 
          timeZone.includes("Yakutsk") || timeZone.includes("Vladivostok") || 
          timeZone.includes("Magadan") || timeZone.includes("Kamchatka")) {
        return "ru";
      }

      // По умолчанию возвращаем английский
      return "en";
    } catch (error) {
      // В случае ошибки возвращаем английский
      return "en";
    }
  };

  // Используем useState с функцией инициализации, которая выполнится только один раз при монтировании
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Пытаемся получить сохраненный язык из localStorage
    const savedLocale = localStorage.getItem("language") as Locale | null;
    return savedLocale || detectBrowserLanguage();
  });

  // Функция для установки языка, которая также обновляет localStorage
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("language", newLocale);
    // Принудительно обновляем весь документ для гарантии, что все компоненты перерисуются
    document.documentElement.lang = newLocale;
  };

  // При первом монтировании компонента устанавливаем атрибут lang для HTML
  useEffect(() => {
    document.documentElement.lang = locale;
  }, []);

  const t = (key: string): string => {
    // Разбиваем ключ по точкам для навигации по вложенным объектам
    const keys = key.split(".");
    let value: any = translations[locale];
    
    // Проходим по каждому уровню ключа
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} for locale ${locale}`);
        // Пытаемся найти ключ в другой локали, если в текущей не найден
        const fallbackLocale = locale === "ru" ? "en" : "ru";
        let fallbackValue = translations[fallbackLocale];
        let fallbackFound = true;
        
        for (const fk of keys) {
          if (fallbackValue && fallbackValue[fk]) {
            fallbackValue = fallbackValue[fk];
          } else {
            fallbackFound = false;
            break;
          }
        }
        
        return fallbackFound ? fallbackValue : key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
