import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  text?: string;
  showArrow?: boolean;
  variant?: 'hero' | 'default' | 'outline' | 'glow';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  className?: string;
  fullWidth?: boolean;
  scrollTo?: string;
}

export function CTAButton({
  text = 'Agendar diagnóstico gratuito',
  showArrow = true,
  variant = 'hero',
  size = 'lg',
  className,
  fullWidth = false,
  scrollTo = 'hero-form',
}: CTAButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(scrollTo);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(fullWidth && 'w-full', className)}
      onClick={handleClick}
    >
      {text}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </Button>
  );
}
