import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className?: string;
  style?: React.CSSProperties;
}

export function SolutionCard({
  title,
  description,
  href,
  icon: Icon,
  className,
  style,
}: SolutionCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        'group bg-card border border-border rounded-2xl p-6 card-hover animate-fade-in',
        className
      )}
      style={style}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <span className="inline-flex items-center text-sm font-medium text-primary">
        Saiba mais <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
