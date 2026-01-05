import { SolutionLayout } from '@/components/solutions/SolutionLayout';
import { CheckCircle, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Dados para a nova seção de Dores e Benefícios
const painsAndBenefits = [
  { pain: 'Falta de presença digital', benefit: 'Aumenta sua visibilidade e te posiciona como autoridade no mercado.' },
  { pain: 'Site antigo e desatualizado', benefit: 'Transmite profissionalismo e a confiança que seus clientes procuram.' },
  { pain: 'Página não abre no celular', benefit: 'Aumenta as conversões em dispositivos móveis, alcançando mais clientes.' },
  { pain: 'Formulário com erro', benefit: 'Garante a captação correta de todos os contatos interessados.' },
  { pain: 'Falta de botão WhatsApp', benefit: 'Gera atendimento rápido e conversões que aconteceriam no calor do momento.' },
  { pain: 'Design amador', benefit: 'Eleva a percepção da sua marca e te transforma em uma referência.' },
  { pain: 'Site lento', benefit: 'Melhora a experiência de navegação e reduz o abandono de página.' },
  { pain: 'Informações confusas', benefit: 'Facilita a decisão de compra e elimina as dúvidas dos seus clientes.' },
  { pain: 'Falta de integração social', benefit: 'Fortalece o relacionamento com seu público e expande sua presença online.' },
  { pain: 'Sem métricas de resultado', benefit: 'Permite medir acessos, leads e conversões para otimizar suas estratégias.' },
];

// Dados do Portfólio com Mockups Profissionais
const portfolioItems = [
  {
    name: 'Detailer Terraplanagem',
    mockup: '/portfolio/detailer-mockup.png',
    url: 'https://detailerterraplanagem.com.br/',
    challenge: 'Empresa de terraplanagem sem presença digital estruturada',
    solution: 'Landing page profissional com foco em conversão e credibilidade para captar leads qualificados em Franca/SP',
    tags: ['Landing Page', 'Conversão', 'B2B'],
  },
  {
    name: 'Premoldex',
    mockup: '/portfolio/premoldex-mockup.png',
    url: 'http://premoldex.com.br/',
    challenge: 'Site desatualizado não transmitia confiança para clientes B2B',
    solution: 'Website institucional moderno com catálogo de produtos para apresentar portfólio de lajes, ferragens e pré-moldados',
    tags: ['Website', 'Institucional', 'Catálogo'],
  },
  {
    name: 'Pulps Frutas',
    mockup: '/portfolio/pulps-mockup.png',
    url: 'https://pulpsfrutas.com/',
    challenge: 'Marca nova precisava estabelecer presença online atrativa',
    solution: 'Landing page vibrante com identidade visual forte para divulgar polpas 100% naturais e gerar vendas diretas',
    tags: ['E-commerce', 'Branding', 'Mobile First'],
  },
  {
    name: 'Tubarão Baterias',
    mockup: '/portfolio/tubarao-mockup.png',
    url: 'https://tubaraobateriasfranca.com.br/',
    challenge: 'Loja física precisava expandir alcance para vendas online',
    solution: 'Site com localização, catálogo e atendimento rápido via WhatsApp para aumentar visibilidade local',
    tags: ['SEO Local', 'WhatsApp', 'Conversão'],
  },
];

// Dados do Método
const methodSteps = [
  { step: 'Diagnóstico e Briefing', description: 'Mapeamos suas metas, público e desafios para criar uma estratégia sob medida.' },
  { step: 'Criação e Desenvolvimento', description: 'Desenvolvemos um design de alta conversão com copy persuasivo e tecnologia de ponta.' },
  { step: 'Entrega e Otimização', description: 'Lançamos sua página, monitoramos os resultados e otimizamos para máxima performance.' },
];

// Pacotes de Preços Atualizados
const packages = [
  {
    name: 'Essencial',
    price: 'R$ 350',
    maintenance: '+ R$ 50/mês',
    description: 'Ideal para validar seu negócio online com uma presença profissional.',
    features: ['1 página otimizada', 'Design responsivo', 'Integração WhatsApp', 'Entrega em 5 dias'],
  },
  {
    name: 'Profissional',
    price: 'R$ 750',
    maintenance: '+ R$ 100/mês',
    description: 'Para negócios que buscam crescer e gerar leads de forma consistente.',
    features: ['Até 3 páginas estratégicas', 'SEO otimizado para Google', 'Métricas completas', 'Entrega em 10 dias'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 'R$ 1.800',
    maintenance: '+ R$ 300/mês',
    description: 'Destinado a empresas que buscam presença digital completa.',
    features: [
      'Até 10 páginas institucionais',
      'Layout exclusivo e responsivo',
      'Hospedagem, domínio e suporte técnico inclusos',
      'Criação contínua de novas páginas',
      'Bônus: Agente de atendimento via Z-API (WhatsApp)',
    ],
  },
];

export default function NewLandingPagesPage() {
  return (
    <SolutionLayout
      title="Sua Empresa Invisível na Internet? Transforme Cliques em Clientes com Landing Pages que Vendem por Você."
      subtitle="Chega de perder vendas para concorrentes com sites melhores. Criamos páginas de alta conversão que capturam a atenção do seu cliente e o guiam para a compra."
      pains={painsAndBenefits.map(p => p.pain)}
      solution="Nossa solução vai além de um site bonito. Criamos uma máquina de vendas digital, onde cada elemento é pensado para transformar visitantes em clientes. Combinamos design de alto impacto, copywriting que fala a língua do seu público e a melhor tecnologia para garantir resultados mensuráveis."
      playbook={methodSteps}
      deliverables={[
        'Design de Alta Conversão e Totalmente Responsivo',
        'Copywriting Estratégico e Persuasivo',
        'Otimização para Carregamento Rápido (Google Core Web Vitals)',
        'Configuração de SEO para ser encontrado no Google',
        'Integração com WhatsApp, Formulários e Redes Sociais',
        'Painel de Métricas para Acompanhar seus Resultados (Analytics)',
        'Página de Agradecimento para qualificar leads',
        'Treinamento para você gerenciar sua página',
      ]}
      kpis={[
        'Aumento na Taxa de Conversão',
        'Redução no Custo por Lead (CPL)',
        'Melhora no Posicionamento do Google',
        'Aumento do Engajamento do Usuário',
        'Crescimento do Retorno sobre Investimento (ROI)',
      ]}
      faqs={[
        {
          question: 'Quanto tempo leva para minha página ficar pronta?',
          answer: 'O prazo varia conforme o pacote: Essencial em 5 dias, Profissional em 10 dias e Premium em 15 dias úteis. A agilidade depende também da sua rapidez em nos fornecer as informações necessárias.',
        },
        {
          question: 'Eu serei o dono da página?',
          answer: 'Sim! Após a conclusão, você recebe todos os arquivos e acesso total. A página é 100% sua. Oferecemos planos de manutenção e hospedagem, mas você tem total liberdade.',
        },
        {
          question: 'Preciso fornecer os textos e imagens?',
          answer: 'Não se preocupe. Nossa equipe de copywriters criará todo o conteúdo. As imagens podem ser de banco de imagens profissional ou fornecidas por você.',
        },
        {
          question: 'A página já vem otimizada para o Google (SEO)?',
          answer: 'Sim, todas as nossas páginas são entregues com otimização de SEO inicial (títulos, meta-descrições, estrutura de headings) para ajudar o Google a encontrar e classificar seu site.',
        },
      ]}
      ctaText="Quero um Diagnóstico Gratuito"
      heroImage="/expert-hero.png"
    >
      {/* Nova Seção de Dores e Benefícios */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Seu site atual está te dando dor de cabeça? Veja como resolvemos.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {painsAndBenefits.map((item, index) => (
            <div key={index} className="p-6 bg-card border border-border rounded-xl">
              <p className="font-semibold text-destructive mb-2">❌ {item.pain}</p>
              <p className="text-primary">✅ {item.benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nova Seção de Portfólio com Mockups Profissionais */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Projetos que Geram Resultados Reais</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Veja na prática como transformamos desafios em soluções digitais que convertem
          </p>
          
          <div className="space-y-24">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Mockup */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={item.mockup}
                      alt={`Mockup do projeto ${item.name}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Informações do Projeto */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">O Desafio:</p>
                    <p className="text-base">{item.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">A Solução:</p>
                    <p className="text-base">{item.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="group">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Visitar Site
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Pacotes com CTAs */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center mb-12">Pacotes Sob Medida para o Seu Sucesso</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-6 rounded-2xl border animate-fade-in flex flex-col ${
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
                <span className="text-sm text-muted-foreground ml-2">{pkg.maintenance}</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button 
                asChild 
                className={`w-full ${pkg.highlighted ? '' : 'variant-outline'}`}
                variant={pkg.highlighted ? 'default' : 'outline'}
              >
                <a 
                  href="https://wa.me/5516988037193?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20pacote%20de%20Landing%20Pages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Proposta
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
}
