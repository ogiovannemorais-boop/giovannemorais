import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/data/links';

export default function ObrigadoPage() {
  return (
    <div className="beams-background min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 scale-in">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 fade-in">
            Diagnóstico Recebido <span className="gradient-text">com Sucesso!</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-6 fade-in delay-100">
            Em breve entraremos em contato para analisar seu negócio.
          </p>

          <p className="text-foreground font-medium mb-8 fade-in delay-200">
            Enquanto isso, se preferir falar diretamente conosco:
          </p>

          <div className="scale-in delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                👉 Falar no WhatsApp Agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
