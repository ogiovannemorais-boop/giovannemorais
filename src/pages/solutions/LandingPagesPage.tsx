import { SolutionLayout } from '@/components/solutions/SolutionLayout';
import { CheckCircle, X } from 'lucide-react';

const comparisonData = [
  { feature: 'Presença digital profissional', basic: false, pro: true, premium: true },
  { feature: 'Design responsivo', basic: true, pro: true, premium: true },
  { feature: 'Integração WhatsApp', basic: true, pro: true, premium: true },
  { feature: 'Formulário de contato', basic: true, pro: true, premium: true },
  { feature: 'Métricas e analytics', basic: false, pro: true, premium: true },
  { feature: 'SEO otimizado', basic: false, pro: true, premium: true },
  { feature: 'Página de obrigado', basic: false, pro: true, premium: true },
  { feature: 'Múltiplas seções', basic: false, pro: false, premium: true },
  { feature: 'Blog integrado', basic: false, pro: false, premium: true },
];

const packages = [
  {
    name: 'Essencial',
    price: 'R$ 350',
    maintenance: 'R$ 50/mês',
    description: 'Ideal para validar seu negócio online',
    features: ['1 página', 'Design responsivo', 'Integração WhatsApp', 'Entrega em 5 dias'],
  },
  {
    name: 'Profissional',
    price: 'R$ 750',
    maintenance: 'R$ 100/mês',
    description: 'Para negócios que querem crescer',
    features: ['Até 3 páginas', 'SEO otimizado', 'Métricas completas', 'Entrega em 10 dias'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 'R$ 1.500',
    maintenance: 'R$ 300/mês',
    description: 'Solução completa para escalar',
    features: ['Páginas ilimitadas', 'Blog integrado', 'CRM integrado', 'Entrega em 15 dias'],
  },
];

export default function LandingPagesPage() {
  return (
    <SolutionLayout
      title="Landing pages que convertem, design bonito com copy que vende."
      subtitle="Páginas otimizadas para conversão, com design profissional e copy persuasivo."
      pains={[
        'Site que não gera leads ou vendas',
        'Páginas lentas que espantam visitantes',
        'Design amador que prejudica sua credibilidade',
      ]}
      solution="Criamos landing pages focadas em um único objetivo: converter visitantes em clientes. Design moderno, copy persuasivo e otimização técnica para máxima performance."
      deliverables={[
        'Design personalizado e responsivo',
        'Copy persuasivo focado em conversão',
        'Integração com WhatsApp e formulários',
        'Configuração de analytics',
        'Otimização de velocidade (Core Web Vitals)',
      ]}
      kpis={[
        'Taxa de conversão',
        'Tempo de carregamento',
        'Taxa de rejeição',
        'Leads gerados',
      ]}
      faqs={[
        {
          question: 'Quanto tempo leva para ficar pronta?',
          answer: 'Depende do pacote: Essencial em 5 dias, Profissional em 10 dias e Premium em 15 dias úteis.',
        },
        {
          question: 'Posso fazer alterações depois?',
          answer: 'Sim, oferecemos manutenção mensal que inclui alterações de texto, imagens e pequenos ajustes.',
        },
        {
          question: 'A página é minha depois de pronta?',
          answer: 'Sim, você recebe todos os arquivos e pode hospedar onde preferir. Também oferecemos hospedagem inclusa nos planos de manutenção.',
        },
        {
          question: 'Vocês fazem o texto ou preciso fornecer?',
          answer: 'Criamos todo o conteúdo com base em um briefing detalhado. Você só aprova o resultado final.',
        },
      ]}
      ctaText="Solicitar proposta"
    >
      {/* Comparison Table */}
      <div className="mt-16 animate-fade-in">
        <h3 className="text-xl font-semibold mb-6">Comparativo de recursos</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-border">Recurso</th>
                <th className="text-center p-4 border-b border-border">Essencial</th>
                <th className="text-center p-4 border-b border-border">Profissional</th>
                <th className="text-center p-4 border-b border-border">Premium</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.feature}>
                  <td className="p-4 border-b border-border text-muted-foreground">{row.feature}</td>
                  <td className="p-4 border-b border-border text-center">
                    {row.basic ? (
                      <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    {row.pro ? (
                      <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    {row.premium ? (
                      <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 animate-fade-in">Pacotes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-6 rounded-2xl border animate-fade-in ${
                pkg.highlighted
                  ? 'bg-primary/5 border-primary'
                  : 'bg-card border-border'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  Mais popular
                </div>
              )}
              <h4 className="text-lg font-semibold mb-1">{pkg.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">{pkg.price}</span>
                <span className="text-sm text-muted-foreground ml-2">+ {pkg.maintenance}</span>
              </div>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
}
