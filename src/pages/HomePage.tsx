import { Check, X, Clock, TrendingUp, Briefcase, BarChart3, Settings, DollarSign, Rocket, Shield, Lock, MessageCircle, Ban, Eye, Users, CalendarCheck, FileSearch, Handshake } from 'lucide-react';
import giovannePhoto from '@/assets/giovanne-photo.png';
import { CTAButton } from '@/components/CTAButton';
import { Section } from '@/components/Section';
import { CountdownTimer } from '@/components/CountdownTimer';
import { LeadForm } from '@/components/LeadForm';
import { specialistInfo } from '@/data/links';

const faqItems = [
  {
    question: 'Já tentei tráfego pago antes e não deu certo. Por que seria diferente agora?',
    answer: 'A maioria dos e-commerces que "tentaram e não deu certo" trabalharam sem método. Apenas subiam campanhas e esperavam resultados. Aqui é diferente: existe um processo estruturado de diagnóstico, organização e otimização contínua. Não é sobre rodar anúncios, é sobre construir uma operação previsível. Se antes você investiu sem estratégia, agora vai investir com direção.',
  },
  {
    question: 'Funciona para quem está começando no e-commerce?',
    answer: 'Sim. O método se adapta ao estágio do seu negócio. Se você está começando, vamos estruturar sua operação desde o início para que cada real investido em tráfego traga retorno. Se já fatura, vamos identificar os gargalos que impedem o crescimento. O importante é ter compromisso com o processo.',
  },
  {
    question: 'E se eu não entender de tráfego pago ou marketing digital?',
    answer: 'Você não precisa ser especialista em marketing. Todo o processo é explicado de forma clara e objetiva. Você vai entender exatamente o que está sendo feito, por que está sendo feito e quais resultados esperar. Meu trabalho é traduzir estratégia em ação simples para você focar no que importa: seu negócio.',
  },
  {
    question: 'Meu time consegue acompanhar e aplicar as mudanças?',
    answer: 'Sim. Tudo é organizado de forma prática para que você e sua equipe consigam acompanhar. Criamos processos claros, reuniões objetivas e relatórios que qualquer pessoa entende. O objetivo é que sua operação funcione de forma independente e escalável.',
  },
  {
    question: 'Quanto custa o serviço?',
    answer: 'O investimento varia conforme o estágio e a necessidade do seu e-commerce. Mas pense assim: quanto você já perdeu investindo sem direção? O diagnóstico gratuito serve exatamente para entender sua situação e mostrar se faz sentido trabalharmos juntos. Sem pressão, sem compromisso.',
  },
  {
    question: 'Em quanto tempo vou ver resultados?',
    answer: 'Os primeiros ajustes de organização e otimização já geram impacto nas primeiras semanas. Resultados consistentes de vendas e previsibilidade geralmente aparecem entre 30 e 90 dias, dependendo do estágio da sua loja. O foco é construir algo sólido, não resultados artificiais que desaparecem no mês seguinte.',
  },
  {
    question: 'Vocês atendem qualquer tipo de e-commerce?',
    answer: 'Atendemos e-commerces de diversos nichos, desde moda e beleza até eletrônicos e produtos personalizados. O critério principal não é o nicho, mas sim o comprometimento do dono. Se você leva seu negócio a sério e quer crescer com método, podemos ajudar.',
  },
];

export default function HomePage() {
  return (
    <div className="beams-background">
      {/* ===== BARRA DE EXCLUSIVIDADE ===== */}
      <div className="bg-primary/10 border-b border-primary/20 py-2.5 text-center fade-in">
        <div className="container-custom flex items-center justify-center gap-2 text-sm font-medium text-primary">
          <Shield className="w-4 h-4 shrink-0" />
          <span>Exclusivo para Donos de E-commerce</span>
        </div>
      </div>

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center section-padding">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-6 scale-in">
                <Users className="w-4 h-4" />
                Atendemos apenas 5 novos clientes por mês
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transforme Seu{' '}
                <span className="whitespace-nowrap">E-commerce</span> em uma{' '}
                <span className="gradient-text">Máquina de Vendas</span>{' '}
                Previsível e Lucrativa
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Ajudo donos de loja online a venderem mais todos os meses, com método, clareza e estratégia. Sem depender de sorte.
              </p>

              {/* Destaques rápidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 stagger-children">
                {[
                  'Método validado na prática',
                  'Foco em lucro, não só em vendas',
                  'Crescimento com organização',
                  'Sem achismo, sem promessas vazias',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground animate-fade-in">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Prova social rápida */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 text-sm text-muted-foreground fade-in delay-200">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏅</span>
                  <span>+3 anos no digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  <span>+R$ 1MM em mídia gerenciada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏪</span>
                  <span>+30 negócios atendidos</span>
                </div>
              </div>

              <div className="scale-in delay-300 lg:hidden">
                <CTAButton text="Preencher Formulário Abaixo" size="xl" scrollTo="hero-form" />
              </div>

              <div className="mt-6">
                <CountdownTimer />
              </div>
            </div>

            {/* Right: Form */}
            <div className="fade-in delay-200">
              <LeadForm id="hero-form" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA INTERMEDIÁRIO ===== */}
      <div className="bg-primary/5 border-y border-primary/10 py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Vagas limitadas:</span> atendemos apenas um número restrito de novos clientes por mês
          </p>
          <CTAButton text="Garantir Minha Vaga" size="default" showArrow={false} className="text-sm" />
        </div>
      </div>

      {/* ===== 2. IDENTIFICAÇÃO COM A DOR ===== */}
      <Section variant="card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            Sua Loja Vende.<br />
            <span className="gradient-text">Mas Poderia Vender Muito Mais.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 fade-in delay-100">Hoje você sente que:</p>
          <div className="space-y-4 text-left max-w-xl mx-auto stagger-children">
            {[
              'Investe em anúncios, mas não sabe se vale a pena',
              'Um mês vende bem, no outro cai',
              'Trabalha muito e lucra pouco',
              'Depende só do Instagram',
              'Não entende seus números',
            ].map((pain) => (
              <div key={pain} className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10 animate-fade-in">
                <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-foreground">{pain}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 fade-in delay-500">
            <p className="text-lg font-medium text-foreground">
              O problema não é falta de esforço.<br />
              <span className="text-primary font-bold">É falta de direção e método.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* ===== 3. SEGMENTAÇÃO DOS PROBLEMAS ===== */}
      <Section title="Qual Desses Problemas É o Seu?">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto stagger-children">
          {[
            { emoji: '1️⃣', title: '"Não sei o que fazer para vender mais"', desc: 'Falta de estratégia clara.' },
            { emoji: '2️⃣', title: '"Nunca sei quanto vou faturar"', desc: 'Resultados instáveis.' },
            { emoji: '3️⃣', title: '"Vendo, mas sobra pouco dinheiro"', desc: 'Baixa conversão e desperdício.' },
          ].map((problem) => (
            <div key={problem.title} className="p-6 bg-card border border-border rounded-xl text-center interactive-card slide-in-left">
              <span className="text-3xl mb-4 block">{problem.emoji}</span>
              <h3 className="font-semibold mb-2 text-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8 fade-in">
          Se você se identifica com algum deles, <span className="text-primary font-semibold">essa página é pra você.</span>
        </p>
      </Section>

      {/* ===== 4. QUEBRA DE PADRÃO ===== */}
      <Section variant="card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            Você Não Precisa de Mais Cliques.<br />
            <span className="gradient-text">Precisa de Orientação.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="p-6 rounded-xl border border-destructive/20 bg-destructive/5 text-left slide-in-left">
              <p className="text-sm font-semibold text-destructive mb-4 uppercase tracking-wider">Muitos serviços entregam:</p>
              <div className="space-y-3">
                {['Anúncios', 'Relatórios', 'Números confusos'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <X className="w-4 h-4 text-destructive shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 text-left slide-in-right">
              <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Mas não entregam:</p>
              <div className="space-y-3">
                {['Direção', 'Organização', 'Lucro', 'Segurança'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-lg font-medium text-foreground fade-in delay-300">
            Anunciar sem estratégia é <span className="text-destructive">jogar dinheiro fora.</span>
          </p>
        </div>
      </Section>

      {/* ===== 5. POSICIONAMENTO AUTORITATIVO ===== */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            Aqui Seu Negócio É{' '}
            <span className="gradient-text">Levado a Sério</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 fade-in delay-100">
            Eu trabalho para estruturar sua loja com:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto stagger-children">
            {[
              'Entrada constante de clientes',
              'Páginas que convertem mais',
              'Processo organizado',
              'Decisão com base em dados simples',
              'Crescimento com segurança',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 animate-fade-in">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-card border border-border rounded-xl fade-in delay-400">
            <p className="text-foreground font-medium">
              Tudo com um <span className="text-primary font-bold">método exclusivo e validado</span>, criado para escalar sua operação.
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Sem improviso. Sem enrolação. Com responsabilidade.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== 6. PROPOSTA DE VALOR ===== */}
      <Section variant="card">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 fade-in">
            O Que Você Vai <span className="gradient-text">Construir</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 stagger-children">
            {[
              { icon: TrendingUp, label: 'Vendas todos os meses' },
              { icon: Briefcase, label: 'Negócio organizado' },
              { icon: BarChart3, label: 'Controle financeiro' },
              { icon: Settings, label: 'Processos simples' },
              { icon: DollarSign, label: 'Mais lucro' },
              { icon: Rocket, label: 'Crescimento real' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-5 bg-card border border-border rounded-xl interactive-card scale-in">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg text-foreground font-medium fade-in delay-500">
            Você deixa de "tentar vender"<br />
            e passa a <span className="text-primary font-bold">gerenciar sua loja.</span>
          </p>
        </div>
      </Section>

      {/* ===== 7. MÉTODO ===== */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 fade-in">
            O <span className="gradient-text">Método Validado</span> de Crescimento
          </h2>
          <div className="grid md:grid-cols-4 gap-6 stagger-children">
            {[
              { step: '1', title: 'Diagnóstico', desc: 'Analisamos sua loja, anúncios e números.' },
              { step: '2', title: 'Organização', desc: 'Ajustamos canais, ofertas e estrutura.' },
              { step: '3', title: 'Otimização', desc: 'Melhoramos páginas, checkout e comunicação.' },
              { step: '4', title: 'Acompanhamento', desc: 'Ajustes constantes para crescer com segurança.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative p-6 bg-card border border-border rounded-xl text-center interactive-card slide-in-left">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xl font-bold text-primary fade-in delay-400">
            Resultado: previsibilidade.
          </p>
        </div>
      </Section>

      {/* ===== CTA INTERMEDIÁRIO 2 ===== */}
      <div className="bg-primary/5 border-y border-primary/10 py-6">
        <div className="container-custom text-center">
          <p className="text-foreground font-semibold mb-2">Gostou do método?</p>
          <p className="text-sm text-muted-foreground mb-4">Agende uma análise gratuita e descubra como aplicar no seu e-commerce</p>
          <CTAButton text="Quero Minha Análise Gratuita" size="lg" scrollTo="bottom-form" />
        </div>
      </div>

      {/* ===== 8. QUEM SOU EU ===== */}
      <Section variant="card">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="fade-in order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quem Vai <span className="gradient-text">Cuidar do Seu Negócio</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-foreground text-lg font-medium">Me chamo Giovanne.</p>
              <p>Sou especialista em mídia paga e performance para e-commerce.</p>
              <p>Desde 2022 ajudo empresas a crescerem no digital com:</p>
              <div className="grid grid-cols-2 gap-3 my-6">
                {['Trabalho inteligente', 'Gestão', 'Processos', 'Clareza'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Números de credibilidade */}
              <div className="grid grid-cols-3 gap-4 my-6 py-4 border-y border-border">
                {[
                  { number: '+30', label: 'Negócios atendidos' },
                  { number: '+3', label: 'Anos de experiência' },
                  { number: '+1MM', label: 'Em mídia gerenciada' },
                ].map(({ number, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-xl font-bold text-primary">{number}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              <p className="text-foreground italic">
                Acredito em resultado, responsabilidade e em Deus.
              </p>
              <p className="text-foreground font-semibold mt-4">
                Não vendo promessas.<br />
                <span className="text-primary">Construo crescimento.</span>
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative slide-in-right order-1 lg:order-2">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-light/15 rounded-full blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border-2 border-primary/20">
                <img
                  src={giovannePhoto}
                  alt={`${specialistInfo.fullName} Especialista em Performance para E-commerce`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== 9. PARA QUEM É / NÃO É ===== */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center fade-in">
            Para Quem É / <span className="gradient-text">Não É</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 slide-in-left">
              <h3 className="font-bold text-lg mb-4 text-primary">✅ Para Quem É</h3>
              <div className="space-y-3">
                {[
                  'Donos de e-commerce iniciantes ou em crescimento',
                  'Fatura de R$0 a R$200k+/mês',
                  'Quer aprender e evoluir',
                  'Leva o negócio a sério',
                  'Quer construir algo sólido',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-destructive/20 bg-destructive/5 slide-in-right">
              <h3 className="font-bold text-lg mb-4 text-destructive">❌ Não É Para Quem</h3>
              <div className="space-y-3">
                {[
                  'Quer milagre',
                  'Não quer investir',
                  'Busca só preço',
                  'Não aplica o método',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <X className="w-4 h-4 text-destructive shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-foreground font-medium fade-in delay-300">
            Isso garante <span className="text-primary font-bold">bons resultados.</span>
          </p>
        </div>
      </Section>

      {/* ===== 10. PROVA SOCIAL ===== */}
      <Section variant="card">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center fade-in">
          O Que <span className="gradient-text">Clientes Dizem</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto stagger-children">
          {[
            { name: 'Lucas M.', role: 'Dono de e-commerce', quote: '"Hoje sei exatamente quanto investir e quanto vai voltar. Saí do achismo e passei a tomar decisões com clareza."' },
            { name: 'Ana R.', role: 'Loja de moda feminina', quote: '"Passei de prejuízo para lucro em menos de 3 meses. O método realmente funciona quando você aplica."' },
            { name: 'Carlos T.', role: 'E-commerce de eletrônicos', quote: '"Agora tenho controle total da minha operação. Sei o que funciona e o que precisa melhorar."' },
          ].map((testimonial) => (
            <div key={testimonial.name} className="p-6 bg-card border border-border rounded-xl interactive-card scale-in">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="text-foreground italic mb-4">{testimonial.quote}</p>
              <div className="border-t border-border pt-3">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== 11. PRÓXIMOS PASSOS ===== */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
            O Que Acontece Após a{' '}
            <span className="gradient-text">Análise Gratuita?</span>
          </h2>
          <p className="text-muted-foreground mb-12 fade-in delay-100">
            Depois de agendar, o processo é simples e direto:
          </p>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: CalendarCheck,
                step: '01',
                title: 'Conversa inicial',
                desc: 'Entendemos seu momento, seus números e seus objetivos. Sem compromisso.',
              },
              {
                icon: FileSearch,
                step: '02',
                title: 'Diagnóstico personalizado',
                desc: 'Analisamos sua loja, anúncios e operação. Você recebe um mapa claro do que precisa ajustar.',
              },
              {
                icon: Handshake,
                step: '03',
                title: 'Proposta sob medida',
                desc: 'Se fizer sentido para os dois lados, apresentamos um plano de ação com prazos e metas claras.',
              },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative text-center slide-in-left">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Passo {step}</span>
                <h3 className="font-semibold text-foreground mt-2 mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 scale-in delay-300">
            <CTAButton text="Agendar Minha Análise Gratuita" size="xl" scrollTo="bottom-form" />
          </div>
        </div>
      </Section>

      {/* ===== 12. FAQ ===== */}
      <Section variant="card" title="Perguntas Frequentes" subtitle="Tire suas dúvidas antes de dar o próximo passo">
        <div className="max-w-3xl mx-auto fade-in">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-medium text-foreground hover:bg-secondary/50 transition-colors">
                  <span>{item.question}</span>
                  <span className="text-primary text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== 13. FORMULÁRIO FINAL ===== */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-destructive/10 border border-destructive/20 rounded-full text-sm text-destructive font-medium mb-6">
            <Clock className="w-4 h-4" />
            Apenas 5 vagas por mês
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
            Pronto Para Crescer{' '}
            <span className="gradient-text">Com Segurança?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Preencha agora e receba seu diagnóstico estratégico personalizado.
          </p>
          <LeadForm id="bottom-form" buttonText="Agendar Diagnóstico Gratuito" />
          <div className="mt-6">
            <CountdownTimer />
          </div>
        </div>
      </Section>

      {/* ===== 14. SEGURANÇA E CONFIANÇA ===== */}
      <section className="py-12 border-t border-border/50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground stagger-children">
            {[
              { icon: Lock, text: 'Seus dados estão protegidos' },
              { icon: MessageCircle, text: 'Atendimento humano' },
              { icon: Ban, text: 'Sem spam' },
              { icon: Eye, text: 'Sem compromisso inicial' },
              { icon: Shield, text: 'Transparência total' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 animate-fade-in">
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6 fade-in delay-300">
            Você será atendido com respeito.
          </p>
        </div>
      </section>
    </div>
  );
}
