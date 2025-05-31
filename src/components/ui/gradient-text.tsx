import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export function GradientText({ children, className, animated = false }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        animated 
          ? "animate-gradient bg-gradient-to-r bg-[length:200%_auto] from-gray-500 via-gray-800 to-gray-500" 
          : "bg-gradient-to-r from-gray-500 to-gray-900",
        className
      )}
    >
      {children}
    </span>
  );
}
