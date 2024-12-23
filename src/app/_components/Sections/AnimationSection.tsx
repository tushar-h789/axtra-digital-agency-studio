// components/AnimatedSection.tsx
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode; // Accepts JSX elements
  className: string; // Class name for the container
  animationProps?: object; // Optional animation properties
}

export default function AnimatedSection({
  children,
  className,
  animationProps = {},
}: AnimatedSectionProps) {
  useScrollAnimation(`.${className}`, animationProps);

  return <div className={className}>{children}</div>;
}
