
/**
 * Модуль данных политики конфиденциальности
 * 
 * Экспортирует все разделы политики и метаданные для использования
 * на странице политики конфиденциальности
 */

// Экспорт типов
export * from "./types";

// Экспорт метаданных
export { privacyPolicyMeta } from "./meta";

// Импорт всех разделов
import { generalSection } from "./sections/general";
import { termsSection } from "./sections/terms";
import { purposesSection } from "./sections/purposes";
import { legalSection } from "./sections/legal";
import { dataSection } from "./sections/data";
import { processSection } from "./sections/process";
import { rightsSection } from "./sections/rights";
import { periodSection } from "./sections/period";
import { securitySection } from "./sections/security";
import { finalSection } from "./sections/final";

/**
 * Полный список всех разделов политики конфиденциальности
 * в правильном порядке отображения
 */
export const privacyPolicySections = [
  generalSection,
  termsSection,
  purposesSection,
  legalSection,
  dataSection,
  processSection,
  rightsSection,
  periodSection,
  securitySection,
  finalSection
];
