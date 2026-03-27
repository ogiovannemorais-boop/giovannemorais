import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/data/links';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  text?: string;
  showArrow?: boolean;
  variant?: 'hero' | 'default' | 'outline' | 'glow';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  className?: string;
  fullWidth?: boolean;
}

export function CTAButton({
  text = 'Agendar diagnóstico gratuito',
  showArrow = true,
  variant = 'hero',
  size = 'lg',
  className,
  fullWidth = false,
}: CTAButtonProps) {
  return (
    <Button 
      variant={variant} 
      size={size} 
      className={cn(fullWidth && 'w-full', className)} 
      asChild
    >
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        {text}
        {showArrow && <ArrowRight className="w-5 h-5" />}
      </a>
    </Button>
  );
}
