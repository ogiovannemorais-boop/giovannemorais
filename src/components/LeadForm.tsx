import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, AlertTriangle, Shield } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface LeadFormProps {
  id?: string;
  buttonText?: string;
  className?: string;
}

export function LeadForm({ id, buttonText = 'Quero Meu Diagnóstico Gratuito', className }: LeadFormProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Native form validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('leads').insert({
        name: (formData.get('name') as string).trim(),
        phone: (formData.get('phone') as string).trim(),
        email: (formData.get('email') as string).trim(),
        revenue: formData.get('revenue') as string,
        challenge: formData.get('challenge') as string,
      });

      if (error) throw error;

      navigate('/obrigado');
    } catch (err) {
      console.error('Lead submission error:', err);
      toast({
        title: 'Erro ao enviar',
        description: 'Não foi possível enviar seus dados. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id={id} className={cn('bg-card border border-border rounded-2xl p-6 md:p-8', className)}>
      {/* Social proof */}
      <p className="text-xs text-muted-foreground text-center mb-4 flex items-center justify-center gap-1.5">
        <Shield className="w-3.5 h-3.5 text-primary" />
        Mais de 3 anos ajudando e-commerces a crescer com método e previsibilidade.
      </p>

      <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
        Garanta Seu Diagnóstico Estratégico Gratuito
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Preencha os dados abaixo e receba uma análise personalizada mostrando exatamente onde sua loja pode vender mais e lucrar melhor.
        <br />
        <span className="font-medium text-foreground">Sem custo. Sem compromisso.</span>
      </p>

      <form
        id="form-diagnostico"
        name="form-diagnostico"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Nome */}
        <div className="space-y-1.5">
          <label htmlFor="lead-name" className="text-sm font-medium text-foreground">
            Seu Nome Completo
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Como você gostaria de ser chamado?"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        {/* WhatsApp */}
        <div className="space-y-1.5">
          <label htmlFor="lead-phone" className="text-sm font-medium text-foreground">
            Seu WhatsApp Principal
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            maxLength={20}
            placeholder="(00) 00000-0000"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <p className="text-xs text-muted-foreground">Usamos apenas para enviar seu diagnóstico e falar com você caso necessário.</p>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="lead-email" className="text-sm font-medium text-foreground">
            Seu Melhor E-mail
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="seu@email.com"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <p className="text-xs text-muted-foreground">Você receberá um resumo estratégico por e-mail.</p>
        </div>

        {/* Faturamento */}
        <div className="space-y-1.5">
          <label htmlFor="lead-revenue" className="text-sm font-medium text-foreground">
            Qual é seu faturamento mensal atual?
          </label>
          <select
            id="lead-revenue"
            name="revenue"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-muted-foreground">Selecione uma opção</option>
            <option value="Ainda não faturo">Ainda não faturo</option>
            <option value="Até R$10 mil/mês">Até R$10 mil/mês</option>
            <option value="R$10k – R$50k/mês">R$10k – R$50k/mês</option>
            <option value="R$50k – R$200k/mês">R$50k – R$200k/mês</option>
            <option value="R$200k+/mês">R$200k+/mês</option>
          </select>
          <p className="text-xs text-muted-foreground">Isso nos ajuda a adaptar a estratégia ao seu momento.</p>
        </div>

        {/* Desafio */}
        <div className="space-y-1.5">
          <label htmlFor="lead-challenge" className="text-sm font-medium text-foreground">
            Hoje, qual é seu maior desafio?
          </label>
          <select
            id="lead-challenge"
            name="challenge"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-muted-foreground">Selecione seu principal desafio</option>
            <option value="Não sei o que fazer para vender mais">Não sei o que fazer para vender mais</option>
            <option value="Não tenho previsibilidade de faturamento">Não tenho previsibilidade de faturamento</option>
            <option value="Minha conversão e ROI estão baixos">Minha conversão e ROI estão baixos</option>
          </select>
          <p className="text-xs text-muted-foreground">Queremos entender exatamente onde você está travando.</p>
        </div>

        {/* Tempo de preenchimento */}
        <p className="text-xs text-center text-muted-foreground">
          Leva menos de 1 minuto para preencher.
        </p>

        {/* Urgência */}
        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-primary" />
          Análises limitadas por semana para garantir qualidade no atendimento.
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] h-14 px-10 rounded-xl"
        >
          {isSubmitting ? 'Enviando...' : `👉 ${buttonText}`}
        </button>

        {/* Trust badges */}
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          {['100% gratuito', 'Sem compromisso', 'Atendimento humano', 'Dados protegidos'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
