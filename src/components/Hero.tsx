import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string;
  children?: ReactNode;
  image?: ReactNode;
  className?: string;
  centered?: boolean;
}

export function Hero({
  title,
  subtitle,
  children,
  image,
  className,
  centered = false,
}: HeroProps) {
  return (
    <section className={cn('relative min-h-[90vh] flex items-center section-padding', className)}>
      <div className="container-custom relative z-10">
        <div className={cn(
          'grid gap-12 lg:gap-16 items-center',
          image ? 'lg:grid-cols-2' : 'lg:grid-cols-1',
          centered && 'text-center justify-items-center'
        )}>
          <div className="animate-fade-in">
            {typeof title === 'string' ? (
              <h1 className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance',
                centered && 'mx-auto'
              )}>
                {title}
              </h1>
            ) : (
              title
            )}
            
            {subtitle && (
              <p className={cn(
                'text-lg md:text-xl text-muted-foreground mb-8',
                centered ? 'mx-auto max-w-2xl' : 'max-w-xl'
              )}>
                {subtitle}
              </p>
            )}
            
            {children}
          </div>

          {image && (
            <div className="relative animate-fade-in delay-200 hidden lg:block">
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
