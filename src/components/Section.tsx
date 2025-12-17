import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'card' | 'highlight';
  centered?: boolean;
  id?: string;
}

export function Section({
  title,
  subtitle,
  children,
  className,
  containerClassName,
  variant = 'default',
  centered = true,
  id,
}: SectionProps) {
  const variantClasses = {
    default: '',
    card: 'bg-card/50',
    highlight: 'bg-gradient-to-br from-primary/5 to-primary-light/5',
  };

  return (
    <section 
      id={id}
      className={cn('section-padding', variantClasses[variant], className)}
    >
      <div className={cn('container-custom', containerClassName)}>
        {(title || subtitle) && (
          <div className={cn(
            'mb-12 md:mb-16 animate-fade-in',
            centered && 'text-center max-w-3xl mx-auto'
          )}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
