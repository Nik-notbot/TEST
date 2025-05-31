import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Закрываем меню при клике вне компонента
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Закрываем меню при нажатии Escape
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const selectLanguage = (newLocale: "ru" | "en") => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={toggleMenu}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none p-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden md:inline">{locale === "ru" ? "Русский" : "English"}</span>
      </button>
      
      {/* Абсолютно позиционированное выпадающее меню */}
      <div
        className={cn(
          "absolute right-0 mt-1 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
        )}
      >
        <div className="py-1" role="menu" aria-orientation="vertical">
          <button
            className={cn(
              "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center gap-2",
              locale === "ru" ? "font-semibold bg-gray-50" : ""
            )}
            role="menuitem"
            onClick={() => selectLanguage("ru")}
          >
            🇷🇺 Русский
          </button>
          <button
            className={cn(
              "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center gap-2",
              locale === "en" ? "font-semibold bg-gray-50" : ""
            )}
            role="menuitem"
            onClick={() => selectLanguage("en")}
          >
            🇬🇧 English
          </button>
        </div>
      </div>
    </div>
  );
}