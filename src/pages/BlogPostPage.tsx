import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  'como-reduzir-cpl-trafego-pago': {
    title: 'Como reduzir seu CPL em campanhas de tráfego pago',
    excerpt: 'Estratégias práticas para otimizar suas campanhas e pagar menos por lead qualificado.',
    date: '2024-01-15',
    category: 'Tráfego Pago',
    readTime: '8 min',
    content: `
## O problema do CPL alto

Muitos negócios investem em tráfego pago sem uma estratégia clara, resultando em custos elevados por lead. O segredo está na combinação de segmentação precisa, criativos otimizados e landing pages de alta conversão.

## 5 estratégias para reduzir seu CPL

### 1. Segmentação refinada

Pare de atirar para todos os lados. Use lookalike audiences baseadas nos seus melhores clientes e teste públicos de interesse específicos.

### 2. Criativos que param o scroll

Seus anúncios competem com milhares de outros conteúdos. Invista em:
- Headlines que geram curiosidade
- Imagens que contam histórias
- Vídeos curtos e diretos

### 3. Landing pages otimizadas

Uma boa LP pode reduzir seu CPL em até 50%. Elementos essenciais:
- Headline clara e orientada a benefício
- Prova social visível
- Formulário simples
- CTA destacado

### 4. Otimização por KPIs

Não otimize por cliques, otimize por conversões. Configure eventos de conversão e deixe o algoritmo trabalhar a seu favor.

### 5. Testes A/B constantes

Nunca pare de testar. Pequenas melhorias se acumulam em grandes resultados.

## Conclusão

Reduzir CPL não é sobre gastar menos, é sobre gastar melhor. Com as estratégias certas, você pode escalar seus resultados mantendo a eficiência.
    `,
  },
  'landing-pages-que-convertem': {
    title: '7 elementos essenciais de landing pages que convertem',
    excerpt: 'Descubra os componentes que fazem uma landing page gerar resultados reais.',
    date: '2024-01-10',
    category: 'Landing Pages',
    readTime: '6 min',
    content: `
## Por que sua landing page não converte?

A maioria das landing pages falha porque tenta fazer muita coisa. Uma LP eficiente tem um único objetivo: converter o visitante.

## Os 7 elementos essenciais

### 1. Headline magnética

Sua headline precisa comunicar o benefício principal em menos de 5 segundos. Use números, especificidade e urgência.

### 2. Sub-headline de suporte

Complemente a headline com detalhes que reforçam a proposta de valor.

### 3. Hero image ou vídeo

Mostre seu produto/serviço em ação. Pessoas compram resultados, não promessas.

### 4. Prova social

Depoimentos, logos de clientes, números de resultados. Quanto mais específico, melhor.

### 5. Lista de benefícios

Não venda características, venda transformações. O que muda na vida do cliente?

### 6. CTA irresistível

Seu botão precisa comunicar valor, não ação. "Quero aumentar minhas vendas" > "Enviar".

### 7. Elementos de urgência

Escassez real aumenta conversões. Mas nunca use urgência falsa.

## Conclusão

Uma landing page é uma máquina de conversão. Cada elemento tem uma função. Otimize cada um e veja seus resultados multiplicarem.
    `,
  },
  'ia-para-pequenos-negocios': {
    title: 'IA para pequenos negócios: por onde começar',
    excerpt: 'Um guia prático para implementar inteligência artificial no seu dia a dia.',
    date: '2024-01-05',
    category: 'Inteligência Artificial',
    readTime: '10 min',
    content: `
## IA não é coisa do futuro

A inteligência artificial já está transformando pequenos negócios. E você não precisa de um time de tecnologia para começar.

## Aplicações práticas de IA

### Atendimento automatizado

Chatbots podem responder perguntas frequentes, qualificar leads e agendar reuniões 24/7.

### Criação de conteúdo

Use IA para gerar rascunhos de posts, e-mails e descrições de produtos. Você edita e personaliza.

### Análise de dados

Ferramentas de IA podem identificar padrões nos seus dados de vendas que você nunca perceberia.

### Automação de tarefas

Conecte suas ferramentas e deixe a IA executar tarefas repetitivas automaticamente.

## Por onde começar

### 1. Identifique gargalos

Onde você ou sua equipe perdem mais tempo? Comece por aí.

### 2. Escolha ferramentas simples

Não complique. Comece com ferramentas no-code como Make ou n8n.

### 3. Documente processos

Antes de automatizar, você precisa entender o processo. Documente cada etapa.

### 4. Teste e itere

Implementações de IA raramente funcionam perfeitamente na primeira vez. Teste, ajuste, repita.

## Conclusão

IA não vai substituir seu negócio, mas negócios que usam IA vão superar os que não usam. Comece pequeno, mas comece agora.
    `,
  },
};

export function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="beams-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Button variant="outline" asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="beams-background">
      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 animate-fade-in">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-12 animate-fade-in delay-100">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('pt-BR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} de leitura
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-card border border-border rounded-2xl mb-12 animate-fade-in delay-200" />

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-16 animate-fade-in delay-300
              prose-headings:font-semibold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
            "
          >
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('## ')) {
                return <h2 key={index}>{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index}>{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={index}>{line.replace('- ', '')}</li>;
              }
              if (line.trim()) {
                return <p key={index}>{line}</p>;
              }
              return null;
            })}
          </div>

          {/* Share */}
          <div className="flex items-center justify-between py-6 border-t border-border mb-12 animate-fade-in delay-400">
            <span className="text-sm text-muted-foreground">Gostou do conteúdo? Compartilhe!</span>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
          </div>

          {/* CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center animate-fade-in delay-500">
            <h2 className="text-2xl font-bold mb-4">
              Quer implementar essas estratégias no seu negócio?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Agende um diagnóstico gratuito e descubra como posso ajudar você a alcançar resultados reais.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agendar diagnóstico gratuito
              </a>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
