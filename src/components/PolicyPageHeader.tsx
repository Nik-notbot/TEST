
import React from "react";

type PolicyPageHeaderProps = {
  title: string;
  publicationDate: string;
};

/**
 * Компонент заголовка страницы политики
 */
export const PolicyPageHeader: React.FC<PolicyPageHeaderProps> = ({ 
  title, 
  publicationDate 
}) => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        {title}
      </h1>
      <p className="text-muted-foreground mb-4">
        Дата публикации: {publicationDate}
      </p>
    </div>
  );
};
