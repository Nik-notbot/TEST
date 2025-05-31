
import React from "react";

type PolicySectionProps = {
  title: string;
  content: React.ReactNode;
  titleClassName?: string;
};

/**
 * Компонент для отображения отдельного раздела политики конфиденциальности
 */
export const PolicySection: React.FC<PolicySectionProps> = ({
  title,
  content,
  titleClassName = "text-2xl font-semibold mb-4 mt-8"
}) => {
  return (
    <section>
      <h2 className={titleClassName}>{title}</h2>
      {content}
    </section>
  );
};
