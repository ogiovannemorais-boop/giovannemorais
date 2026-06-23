## Resumo

Criar duas landing pages independentes — `/empresas` (B2B) e `/ecommerce` — usando o copy dos PDFs, mas adaptando o "guia de implementação" para respeitar a identidade visual já travada do projeto.

## Conflitos do brief com regras do projeto (preciso de aprovação)

O guia anexado sugere padrões que contrariam memórias do projeto. Vou **ignorar** o que está abaixo e seguir as regras travadas, salvo se você pedir o contrário:

| Sugestão do guia | Decisão | Motivo |
|---|---|---|
| Paleta #3B82F6 / #10B981 / #EF4444 (azul, verde, vermelho) | Manter `#00010D`, `#212226`, `#04BFBF`, `#010D00`, `#F2F2F2` | Paleta travada por você |
| Hero com foto + ícones orbitando (Meta, Google, TikTok, etc.) | Hero tipográfico, sem orbital de logos | Visual "anti-agência" (já recusado 3x) |
| Banner vermelho sticky de urgência | Top bar discreta em `#04BFBF` sobre `#00010D`, sem vermelho | Coerência com home |
| CTA → link direto WhatsApp | CTA rola para formulário; WhatsApp só em `/obrigado` | Memória `CTA Strategy` |
| Em-dashes (—) no copy | Substituir por ponto, dois-pontos ou parênteses | Memória "em-dashes proibidos" |
| "E-commerce" quebrando | Forçar `whitespace-nowrap` no termo | Memória travada |
| Selos "Google Partner / Meta Business" | NÃO incluir (você não confirmou parceria oficial) | Evitar claim falso |
| Depoimentos com nomes/números fictícios | NÃO incluir até você enviar reais | Não inventar prova social |

## Arquitetura

```
src/pages/
  CaptacaoB2B.tsx          → rota /empresas
  CaptacaoEcommerce.tsx    → rota /ecommerce
src/components/captacao/
  TopBar.tsx               → barra de urgência (reuso entre as 2)
  HeroCaptacao.tsx         → hero tipográfico com slot de badge/H1/sub/CTA
  EcosystemList.tsx        → lista numerada de serviços (5 itens, estilo editorial)
  BenefitsGrid.tsx         → grid de benefícios com borda 2px #04BFBF à esquerda
  LeadForm.tsx             → form (Nome, Empresa, Email, WhatsApp) → grava em Supabase + redireciona /obrigado
  FooterCaptacao.tsx       → rodapé enxuto (CNPJ, Privacidade, Termos)
```

Ambas as páginas ficam **fora do `Layout` global** (sem Header e sem WhatsApp flutuante), como `/gestor-trafego-franca` e `/links` — comportamento consistente para LPs.

## Estrutura por página (idêntica, copy diferente)

1. Top bar — "Vagas limitadas: 3 vagas para [consultoria estratégica | análise de e-commerce]"
2. Hero — Badge + H1 + Subheadline + CTA primário ("Quero escalar…") que rola até `#form`
3. Agitação do problema — bloco editorial em coluna única
4. Solução / Ecossistema — lista numerada 01–05 (B2B: Tráfego, SDR IA, Make, CRM, GMN · E-commerce: Tráfego, Recuperação de carrinho, IA, GMN, Análise de dados)
5. Benefícios — grid 4 cards com borda lateral `#04BFBF`
6. Prova social — **omitida nesta versão** (placeholder comentado até você enviar depoimentos reais)
7. CTA final + Formulário — copy de fechamento + `<LeadForm>` âncora `#form`
8. Rodapé enxuto

## Copy

100% extraído dos PDFs, com em-dashes substituídos e "E-commerce" protegido contra quebra. Nada é inventado.

## SEO

- `react-helmet-async` por rota: `<title>`, `<meta description>`, canonical e og:url auto-referentes (`/empresas` e `/ecommerce`)
- Schema `Service` JSON-LD em cada uma
- Atualização do `public/sitemap.xml` com as duas novas URLs
- Sem link público no Header; link discreto no Footer global e na home (a definir com você)

## Tracking

Mantém GTM `GTM-T44H2NR6` e TikTok Pixel `D737JK3C77U5LFAD5OBG` herdados do `index.html`. Submit do form dispara evento `lead_submit` no dataLayer com `page_variant: 'b2b' | 'ecommerce'`.

## Pontos que preciso confirmar antes de codar

1. **Formulário grava onde?** Já existe tabela `leads` no Cloud usada pela home, posso reutilizar com coluna `origem` ('empresas' | 'ecommerce')?
2. **URLs**: `/empresas` e `/ecommerce` ou prefere `/captacao-b2b` e `/captacao-ecommerce`?
3. **Depoimentos**: omito a seção (recomendado) ou deixo placeholders cinza com aviso?
4. **Link no Header/Footer da home**: adiciono discretamente no rodapé como fizemos com `/gestor-trafego-franca`?

Não começo a codar antes de você responder esses 4 pontos.
