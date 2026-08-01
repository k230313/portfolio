import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const Component = hover ? motion.div : 'div';
  const hoverProps = hover
    ? {
        whileHover: { y: -4 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={`bg-card border border-border rounded-lg p-6 ${className}`}
      {...hoverProps}
    >
      {children}
    </Component>
  );
}
