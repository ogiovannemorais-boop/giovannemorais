import { socialLinks } from '@/data/links';
import { cn } from '@/lib/utils';

// Custom Threads icon component
export const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.333-3.023.812-.673 1.927-1.084 3.22-1.19a13.6 13.6 0 0 1 3.056.07c-.036-.65-.236-1.158-.603-1.528-.467-.47-1.258-.707-2.353-.707h-.084c-.911.01-1.81.265-2.45.697l-1.104-1.69c.96-.63 2.227-1.009 3.546-1.027h.118c1.634 0 2.924.445 3.837 1.323.77.74 1.244 1.762 1.41 3.04.493.14.95.318 1.368.535 1.132.59 2.002 1.433 2.582 2.504.79 1.457.9 3.547-.526 5.944-1.804 3.032-5.086 4.012-8.413 3.988zm.652-7.606c-.822.045-1.476.282-1.894.686-.39.376-.574.87-.548 1.469.024.534.284 1.04.73 1.428.52.451 1.256.681 2.127.664 1.032-.055 1.835-.444 2.388-1.157.433-.558.705-1.273.808-2.13a10.8 10.8 0 0 0-3.611-.96z"/>
  </svg>
);

interface SocialLinksProps {
  variant?: 'default' | 'light' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

export function SocialLinks({
  variant = 'default',
  size = 'md',
  className,
  showLabel = false,
}: SocialLinksProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-[22px] h-[22px]',
    lg: 'w-6 h-6',
  };

  const variantClasses = {
    default: 'bg-secondary text-foreground hover:text-primary hover:bg-primary/10',
    light: 'bg-transparent text-white hover:text-primary',
    minimal: 'bg-transparent text-muted-foreground hover:text-primary',
  };

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'rounded-lg flex items-center justify-center transition-colors',
            sizeClasses[size],
            variantClasses[variant]
          )}
          aria-label={social.name}
        >
          {social.icon ? (
            <social.icon className={iconSizeClasses[size]} />
          ) : (
            <ThreadsIcon className={iconSizeClasses[size]} />
          )}
          {showLabel && <span className="ml-2 text-sm">{social.name}</span>}
        </a>
      ))}
    </div>
  );
}
