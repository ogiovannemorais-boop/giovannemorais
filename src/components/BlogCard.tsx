import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  image,
  className,
  style,
}: BlogCardProps) {
  return (
    <Link
      to={`/blog/${slug}`}
      className={cn(
        'group bg-card border border-border rounded-2xl overflow-hidden card-hover animate-fade-in',
        className
      )}
      style={style}
    >
      <div className="aspect-video bg-secondary overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <time className="text-xs text-muted-foreground">
          {new Date(date).toLocaleDateString('pt-BR')}
        </time>
        <h3 className="font-semibold mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
}
