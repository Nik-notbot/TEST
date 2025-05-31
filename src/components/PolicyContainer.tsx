
import React from "react";

type PolicyContainerProps = {
  children: React.ReactNode;
};

/**
 * Контейнер для страниц с политиками
 */
export const PolicyContainer: React.FC<PolicyContainerProps> = ({ children }) => {
  return (
    <div className="container px-4 md:px-6 mx-auto max-w-4xl">
      {children}
    </div>
  );
};
