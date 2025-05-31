import { PrivacyPolicyData } from "@/types/privacyPolicy";
import { generalSection } from "./privacy/generalSection";
import { termsSection } from "./privacy/termsSection";

/**
 * Структура данных для политики конфиденциальности
 * Содержит все разделы и их содержимое
 */
export const privacyPolicyData: PrivacyPolicyData = [
  generalSection,
  termsSection,
];
