import { ReactNode } from "react";

/**
 * Интерфейс для секции политики конфиденциальности
 */
export interface PrivacyPolicySection {
  id: string;
  title: string;
  content: ReactNode;
}

/**
 * Тип для массива секций политики
 */
export type PrivacyPolicyData = PrivacyPolicySection[];
