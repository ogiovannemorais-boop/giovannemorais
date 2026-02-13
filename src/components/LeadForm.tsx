import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, AlertTriangle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

interface LeadFormProps {
  id?: string;
  buttonText?: string;
  className?: string;
}

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export function LeadForm({ id, buttonText = 'Quero Meu Diagnóstico Gratuito', className }: LeadFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    revenue: '',
    challenge: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Informe seu nome';
    if (!formData.phone.trim()) errs.phone = 'Informe seu WhatsApp';
    else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) errs.phone = 'Formato inválido';
    if (!formData.email.trim()) errs.email = 'Informe seu e-mail';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'E-mail inválido';
    if (!formData.revenue) errs.revenue = 'Selecione uma opção';
    if (!formData.challenge) errs.challenge = 'Selecione uma opção';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    // Simulate submission (replace with real endpoint later)
    await new Promise((r) => setTimeout(r, 800));

    setIsSubmitting(false);
    navigate('/obrigado');
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
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

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nome */}
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-name`}>Seu Nome Completo</Label>
          <Input
            id={`${id}-name`}
            placeholder="Como você gostaria de ser chamado?"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            maxLength={100}
            className={cn(errors.name && 'border-destructive')}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        {/* WhatsApp */}
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-phone`}>Seu WhatsApp Principal</Label>
          <Input
            id={`${id}-phone`}
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            maxLength={20}
            className={cn(errors.phone && 'border-destructive')}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          <p className="text-xs text-muted-foreground">Usamos apenas para enviar seu diagnóstico e falar com você caso necessário.</p>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-email`}>Seu Melhor E-mail</Label>
          <Input
            id={`${id}-email`}
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            maxLength={255}
            className={cn(errors.email && 'border-destructive')}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          <p className="text-xs text-muted-foreground">Você receberá um resumo estratégico por e-mail.</p>
        </div>

        {/* Faturamento */}
        <div className="space-y-2">
          <Label>Qual é seu faturamento mensal atual?</Label>
          <p className="text-xs text-muted-foreground">Isso nos ajuda a adaptar a estratégia ao seu momento.</p>
          <RadioGroup value={formData.revenue} onValueChange={(v) => handleChange('revenue', v)} className="space-y-2">
            {[
              'Ainda não faturo',
              'Até R$10 mil/mês',
              'R$10k – R$50k/mês',
              'R$50k – R$200k/mês',
              'R$200k+/mês',
            ].map((opt) => (
              <div key={opt} className="flex items-center gap-2.5 p-2.5 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                <RadioGroupItem value={opt} id={`${id}-rev-${opt}`} />
                <Label htmlFor={`${id}-rev-${opt}`} className="cursor-pointer font-normal flex-1">{opt}</Label>
              </div>
            ))}
          </RadioGroup>
          {errors.revenue && <p className="text-xs text-destructive">{errors.revenue}</p>}
        </div>

        {/* Desafio */}
        <div className="space-y-2">
          <Label>Hoje, qual é seu maior desafio?</Label>
          <p className="text-xs text-muted-foreground">Queremos entender exatamente onde você está travando.</p>
          <RadioGroup value={formData.challenge} onValueChange={(v) => handleChange('challenge', v)} className="space-y-2">
            {[
              'Não sei o que fazer para vender mais',
              'Não tenho previsibilidade de faturamento',
              'Minha conversão e ROI estão baixos',
            ].map((opt) => (
              <div key={opt} className="flex items-center gap-2.5 p-2.5 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                <RadioGroupItem value={opt} id={`${id}-ch-${opt}`} />
                <Label htmlFor={`${id}-ch-${opt}`} className="cursor-pointer font-normal flex-1">{opt}</Label>
              </div>
            ))}
          </RadioGroup>
          {errors.challenge && <p className="text-xs text-destructive">{errors.challenge}</p>}
        </div>

        {/* Urgência */}
        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-primary" />
          Análises limitadas por semana para garantir qualidade no atendimento.
        </p>

        {/* Submit */}
        <Button
          type="submit"
          variant="hero"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : `👉 ${buttonText}`}
        </Button>

        {/* Trust badges */}
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          {[
            '100% gratuito',
            'Sem compromisso',
            'Atendimento humano',
            'Dados protegidos',
          ].map((item) => (
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
