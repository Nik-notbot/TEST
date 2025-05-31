
/**
 * Типы данных для политики конфиденциальности
 */

import { ReactNode } from "react";

/**
 * Тип для одного раздела политики конфиденциальности
 */
export interface PrivacyPolicySection {
  /** Уникальный идентификатор раздела */
  id: string;
  /** Заголовок раздела */
  title: string;
  /** Контент раздела (может содержать ReactNode элементы) */
  content: ReactNode;
}

/**
 * Тип для метаданных политики конфиденциальности
 */
export interface PrivacyPolicyMeta {
  /** Основной заголовок политики */
  title: string;
  /** Дата публикации в человекочитаемом формате */
  publicationDate: string;
  /** Версия документа (опционально) */
  version?: string;
  /** Дата последнего обновления (опционально) */
  lastUpdated?: string;
}
