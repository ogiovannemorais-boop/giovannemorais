import { useState, type ReactNode, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import { Check, X } from 'lucide-react';
import heroPhoto from '@/assets/giovanne-transparent.png';
import aboutPhoto from '@/assets/giovanne-photo.png';
import { testimonials } from '@/components/captacao/Testimonials';
import { leadSchema, submitLead, buildWhatsAppUrl, FATURAMENTO, VERBA, DESAFIO } from '@/lib/leads';

const CSS = `
.dg{background:#F5F7FB;color:#0B1220;font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased}
.dg .wrap{max-width:1180px;margin:0 auto;padding:0 24px}
.dg .grid-bg{background-color:#F5F7FB;background-image:linear-gradient(rgba(15,23,42,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.05) 1px,transparent 1px);background-size:56px 56px}
.dg .disp{font-family:'Anton',sans-serif;font-weight:400;text-transform:uppercase;letter-spacing:.01em;line-height:1.02}
.dg .hl{background:linear-gradient(90deg,#1D4ED8,#0EA5E9);-webkit-background-clip:text;background-clip:text;color:transparent}
.dg .cta{display:inline-flex;align-items:center;justify-content:center;gap:14px;min-height:64px;padding:16px 40px;border-radius:999px;background:linear-gradient(90deg,#1D4ED8,#0EA5E9);color:#fff;font-weight:800;font-size:18px;letter-spacing:.02em;text-transform:uppercase;box-shadow:0 14px 40px rgba(29,78,216,.35);transition:transform .2s,box-shadow .2s;border:0;cursor:pointer}
.dg .cta:hover{transform:translateY(-2px);box-shadow:0 18px 48px rgba(29,78,216,.45)}
.dg .cta:disabled{opacity:.7;cursor:wait;transform:none}
.dg .topbar{background:linear-gradient(90deg,#1D4ED8,#0EA5E9);color:#fff;font-size:14px;font-weight:600;text-align:center;padding:10px 16px}
.dg .hero{display:grid;grid-template-columns:1.15fr .85fr;gap:48px;align-items:center}
.dg .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.dg .g4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.dg .g2{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.dg .kicker{display:flex;align-items:center;gap:12px;color:#1D4ED8;text-transform:uppercase;font-size:15px;font-weight:700;letter-spacing:.06em;margin-bottom:20px}
.dg .kicker:before{content:'';width:32px;height:2px;background:currentColor}
.dg .h1{font-size:72px;color:#0B1220}
.dg .h2{font-size:52px}
.dg .h2f{font-size:56px}
.dg .sec{padding:96px 0}
.dg .dark{background:#0B1220;color:#fff}
.dg .dark .kicker{color:#60A5FA}
.dg .field label{display:block;font-size:14px;font-weight:600;color:#E2E8F0;margin-bottom:8px}
.dg .field input,.dg .field select{width:100%;height:48px;border-radius:12px;background:#0F172A;border:1px solid #334155;color:#F1F5F9;padding:0 14px;font-size:15px;outline:none}
.dg .field input::placeholder{color:#64748B}
.dg .field input:focus,.dg .field select:focus{border-color:#0EA5E9;box-shadow:0 0 0 3px rgba(14,165,233,.2)}
.dg .field .err{color:#F87171;font-size:12px;margin-top:6px}
.dg details summary{list-style:none;cursor:pointer}
.dg details summary::-webkit-details-marker{display:none}
.dg details[open] .chev{transform:rotate(45deg)}
.dg .reveal{animation:dgUp .7s ease both}
@keyframes dgUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@media (max-width:900px){
  .dg .hero,.dg .g3,.dg .g4,.dg .g2{grid-template-columns:1fr}
  .dg .h1{font-size:44px}
  .dg .h2,.dg .h2f{font-size:36px}
  .dg .cta{width:100%;padding:16px 24px;font-size:16px}
  .dg .sec{padding:72px 0}
  .dg .photo-card{height:440px!important}
}
`;

function scrollToForm(e?: React.MouseEvent) {
  e?.preventDefault();
  document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Cta({ children }: { children: ReactNode }) {
  return (
    <a href="#diagnostico" onClick={scrollToForm} className="cta">
      {children} <span aria-hidden>→</span>
    </a>
  );
}

function CheckIcon({ color = '#1D4ED8' }: { color?: string }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center w-6 h-6 rounded-full" style={{ background: color }}>
      <Check className="w-3.5 h-3.5" style={{ color: '#fff' }} strokeWidth={3} />
    </span>
  );
}

const dores = [
  ['O mês depende de indicação', 'Um mês vem cliente, no outro some. Você não sabe de onde virá a próxima venda.'],
  ['Já pagou agência e só viu curtida', 'Relatório bonito de alcance e seguidores, mas nenhuma conversa sobre quanto vendeu.'],
  ['Contatos que perguntam preço e somem', 'O WhatsApp enche de curiosos e seu time perde tempo com quem nunca ia comprar.'],
  ['O anúncio ficou mais caro', 'Desde 2026 anunciar no Instagram custa mais. Cada real mal investido pesa no caixa.'],
  ['Falta tempo para cuidar disso', 'Você toca a operação, o financeiro e a equipe. Marketing fica sempre para depois.'],
  ['Não sabe quanto custa um cliente', 'Sem esse número, é impossível saber se vale investir mais ou se está perdendo dinheiro.'],
];

const passos = [
  ['Diagnóstico', 'Analiso seus anúncios, perfil, oferta e atendimento para achar onde o cliente está escapando.'],
  ['Estratégia e oferta', 'Definimos público, mensagem e meta de custo por cliente. Você aprova o plano de 90 dias.'],
  ['Campanhas no ar', 'Anúncios no Instagram, Facebook e Google levando contatos qualificados direto para seu WhatsApp.'],
  ['Acompanhamento', 'Relatório toda segunda, reunião mensal e ajustes semanais olhando para o que virou venda.'],
];

const paraVoce = [
  'É dono ou sócio de empresa com comercial ativo, mesmo que seja você atendendo.',
  'Fatura a partir de R$ 50 mil por mês e quer crescer com previsibilidade.',
  'Pode investir a partir de R$ 1.500 por mês em anúncios.',
  'Topa medir os contatos até a venda e conversar sobre resultado.',
];
const naoParaVoce = [
  'Procura alguém só para postar no feed.',
  'Espera resultado sem ninguém para atender os contatos.',
  'Quer o preço mais barato do mercado.',
  'Busca promessa de faturamento garantido.',
];

const faq = [
  ['Já contratei agência e não deu certo. Por que seria diferente?', 'Porque eu não meço curtida, meço contato e venda. No diagnóstico eu mostro onde o dinheiro estava escapando antes de você decidir qualquer coisa.'],
  ['Anúncio funciona para o meu ramo?', 'Funciona para quem tem algo que o cliente procura e alguém para atender. Indústria, clínica, loja, serviço: o método é o mesmo, muda a mensagem. No diagnóstico eu digo com sinceridade se vale para você.'],
  ['Quanto preciso investir?', 'A partir de R$ 1.500 por mês em anúncios, além da assessoria. O valor exato depende da sua meta e é definido no plano de 90 dias.'],
  ['E se eu não tiver tempo para acompanhar?', 'Você só precisa me dizer quais contatos viraram venda. O resto fica comigo, com relatório pronto toda segunda no seu WhatsApp.'],
  ['Tem fidelidade ou multa?', 'As contas de anúncio ficam sempre no nome da sua empresa.'],
];

const empty = { nome: '', whatsapp: '', empresa: '', cidade: '', produto: '', faturamento: '', verba: '', desafio: '' };

function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function LeadFormDiag() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setV((s) => ({ ...s, [k]: k === 'whatsapp' ? maskPhone(e.target.value) : e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = leadSchema.safeParse(v);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] ||= i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const waUrl = buildWhatsAppUrl(parsed.data);
    const win = window.open('', '_blank');
    try {
      await submitLead(parsed.data);
      setDone(true);
      toast.success('Recebi seus dados! Abrindo o WhatsApp...');
      setTimeout(() => {
        if (win) win.location.href = waUrl;
        else window.location.href = waUrl;
      }, 1200);
    } catch {
      win?.close();
      toast.error('Não consegui enviar agora. Tente novamente em instantes.');
    } finally {
      setSending(false);
    }
  }

  const F = ({ k, label, children, full }: { k: string; label: string; children: ReactNode; full?: boolean }) => (
    <div className={`field ${full ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={`f-${k}`}>{label}</label>
      {children}
      {errors[k] && <p className="err">{errors[k]}</p>}
    </div>
  );

  if (done) {
    return (
      <div className="text-center py-10">
        <div className="mx-auto mb-5 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(90deg,#1D4ED8,#0EA5E9)' }}>
          <Check className="w-7 h-7" style={{ color: '#fff' }} strokeWidth={3} />
        </div>
        <h3 className="disp" style={{ fontSize: 32, color: '#fff' }}>Pedido recebido!</h3>
        <p style={{ color: '#CBD5E1', fontSize: 16, marginTop: 12 }}>
          Estou abrindo o WhatsApp para você me mandar uma mensagem. Se não abrir,{' '}
          <a href={buildWhatsAppUrl(v as never)} target="_blank" rel="noopener noreferrer" style={{ color: '#60A5FA', textDecoration: 'underline' }}>clique aqui</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-4">
      {F({ k: 'nome', label: 'Seu nome', children: <input id="f-nome" value={v.nome} onChange={set('nome')} placeholder="Como posso te chamar?" maxLength={100} autoComplete="name" /> })}
      {F({ k: 'whatsapp', label: 'WhatsApp', children: <input id="f-whatsapp" value={v.whatsapp} onChange={set('whatsapp')} placeholder="(16) 99999-9999" inputMode="tel" autoComplete="tel" /> })}
      {F({ k: 'empresa', label: 'Nome da empresa', children: <input id="f-empresa" value={v.empresa} onChange={set('empresa')} maxLength={120} autoComplete="organization" /> })}
      {F({ k: 'cidade', label: 'Cidade', children: <input id="f-cidade" value={v.cidade} onChange={set('cidade')} placeholder="Cidade e estado" maxLength={120} /> })}
      {F({ k: 'produto', label: 'O que sua empresa vende?', full: true, children: <input id="f-produto" value={v.produto} onChange={set('produto')} placeholder="Ex.: calçados no atacado, implantes, móveis planejados" maxLength={300} /> })}
      {F({ k: 'faturamento', label: 'Faturamento mensal', children: (
        <select id="f-faturamento" value={v.faturamento} onChange={set('faturamento')}>
          <option value="" disabled>Selecione</option>
          {FATURAMENTO.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) })}
      {F({ k: 'verba', label: 'Quanto pode investir em anúncios/mês?', children: (
        <select id="f-verba" value={v.verba} onChange={set('verba')}>
          <option value="" disabled>Selecione</option>
          {VERBA.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) })}
      {F({ k: 'desafio', label: 'Qual o maior desafio hoje?', full: true, children: (
        <select id="f-desafio" value={v.desafio} onChange={set('desafio')}>
          <option value="" disabled>Selecione</option>
          {DESAFIO.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) })}
      <div className="sm:col-span-2 mt-2">
        <button type="submit" className="cta" style={{ width: '100%' }} disabled={sending}>
          {sending ? 'Enviando...' : <>Quero meu diagnóstico gratuito <span aria-hidden>→</span></>}
        </button>
        <p className="text-center mt-3" style={{ fontSize: 13, color: '#94A3B8' }}>Seus dados ficam só comigo. Nada de spam.</p>
      </div>
    </form>
  );
}

export default function Diagnostico() {
  return (
    <div className="dg min-h-screen">
      <Helmet>
        <title>Giovanne Morais | Mais clientes para sua empresa</title>
        <meta name="description" content="Sua empresa não precisa de mais seguidores. Precisa de clientes chegando todo mês. Assessoria de tráfego pago e estratégia para donos de empresa." />
        <meta property="og:title" content="Giovanne Morais | Mais clientes para sua empresa" />
        <meta property="og:description" content="Sua empresa não precisa de mais seguidores. Precisa de clientes chegando todo mês." />
        <link rel="canonical" href="https://giovannemorais.lovable.app/diagnostico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>{`html{scroll-behavior:smooth}`}</style>
      </Helmet>
      <style>{CSS}</style>

      <div className="topbar">Atendo poucas empresas por vez para acompanhar cada uma de perto. Diagnósticos de novembro abertos.</div>

      {/* HERO */}
      <section className="grid-bg" style={{ padding: '72px 0 88px' }}>
        <div className="wrap hero">
          <div className="reveal">
            <p className="kicker">Giovanne Morais · Estrategista de tráfego e vendas</p>
            <h1 className="disp h1">
              Sua empresa não precisa de mais seguidores. Precisa de <span className="hl">clientes chegando</span> todo mês.
            </h1>
            <p style={{ fontSize: 20, color: '#334155', lineHeight: 1.55, margin: '24px 0 32px', maxWidth: 600 }}>
              Assessoria de tráfego pago e estratégia para donos de empresa que querem o comercial cheio de oportunidades reais, sem depender só de indicação e sem jogar dinheiro fora em anúncio.
            </p>
            <Cta>Quero meu diagnóstico gratuito</Cta>
            <p style={{ fontSize: 14, color: '#475569', marginTop: 14 }}>30 minutos, sem compromisso. Você sai com 3 ajustes que já pode aplicar.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 mt-8" style={{ fontSize: 15, fontWeight: 600, color: '#0B1220' }}>
              {['5 anos gerando clientes para PMEs', 'Resultado medido em vendas', 'Franca, região e todo o Brasil'].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckIcon />{t}</li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ animationDelay: '.15s' }}>
            <div className="photo-card relative overflow-hidden" style={{ height: 520, borderRadius: 28, background: 'linear-gradient(160deg,#0B1220,#1E3A8A)', boxShadow: '0 40px 80px rgba(11,18,32,.35)' }}>
              <img src={heroPhoto} alt="Giovanne Morais" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-auto max-w-none object-contain" />
              <div className="absolute left-5 right-5 bottom-5" style={{ background: 'rgba(255,255,255,.96)', borderRadius: 18, padding: '18px 20px', boxShadow: '0 12px 30px rgba(11,18,32,.25)' }}>
                <p style={{ fontSize: 13, color: '#1D4ED8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Relatório toda segunda-feira</p>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#0B1220', marginTop: 4 }}>Quanto investiu, quantos contatos chegaram e quantos viraram venda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 820 }}>
            <h2 className="disp h2">Se você é dono de empresa, <span className="hl">já viveu isso</span></h2>
            <p style={{ fontSize: 18, color: '#475569', marginTop: 16 }}>Não é falta de esforço. É falta de um caminho claro entre o anúncio e a venda.</p>
          </div>
          <div className="g3">
            {dores.map(([t, d], i) => (
              <div key={t} style={{ background: '#F5F7FB', border: '1px solid #E2E8F0', borderRadius: 20, padding: 28 }}>
                <span className="disp hl" style={{ fontSize: 28 }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '12px 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIRADA */}
      <section className="sec dark">
        <div className="wrap hero">
          <div>
            <p className="kicker">A virada</p>
            <h2 className="disp h2" style={{ color: '#fff' }}>O problema não é o anúncio. É o que acontece <span className="hl">depois do clique.</span></h2>
          </div>
          <div className="space-y-5" style={{ fontSize: 18, color: '#CBD5E1', lineHeight: 1.65 }}>
            <p>A maioria dos gestores entrega anúncio no ar e relatório de alcance. Eu entro no seu negócio: olho a oferta, a página, o atendimento do WhatsApp e o follow-up do seu time.</p>
            <p>Assim o anúncio atrai quem tem perfil de comprar, seu comercial sabe o que fazer com cada contato e você enxerga, toda semana, quanto cada real investido trouxe de volta.</p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="sec grid-bg">
        <div className="wrap">
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 820 }}>
            <p className="kicker justify-center">Como funciona</p>
            <h2 className="disp h2">Do anúncio até a <span className="hl">venda fechada</span>, em 4 passos</h2>
          </div>
          <div className="g4">
            {passos.map(([t, d], i) => (
              <div key={t} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 20, padding: 28, boxShadow: '0 8px 24px rgba(15,23,42,.06)' }}>
                <p style={{ fontSize: 13, color: '#1D4ED8', fontWeight: 700, letterSpacing: '.08em' }}>PASSO {i + 1}</p>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '10px 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><Cta>Quero começar pelo diagnóstico</Cta></div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <h2 className="disp h2 text-center mb-14">Essa assessoria <span className="hl">é para você?</span></h2>
          <div className="g2">
            <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 20, padding: 32 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1E3A8A', marginBottom: 20 }}>É para você se</h3>
              <ul className="space-y-4">
                {paraVoce.map((t) => <li key={t} className="flex gap-3" style={{ fontSize: 16, color: '#1E293B' }}><CheckIcon />{t}</li>)}
              </ul>
            </div>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 20, padding: 32 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#334155', marginBottom: 20 }}>Não é para você se</h3>
              <ul className="space-y-4">
                {naoParaVoce.map((t) => (
                  <li key={t} className="flex gap-3" style={{ fontSize: 16, color: '#475569' }}>
                    <span className="inline-flex shrink-0 items-center justify-center w-6 h-6 rounded-full" style={{ background: '#E2E8F0' }}>
                      <X className="w-3.5 h-3.5" style={{ color: '#64748B' }} strokeWidth={3} />
                    </span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="sec dark">
        <div className="wrap">
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 820 }}>
            <p className="kicker justify-center">Quem já trabalha comigo</p>
            <h2 className="disp h2" style={{ color: '#fff' }}>Resultados de <span className="hl">donos de empresa</span> como você</h2>
          </div>
          <div className="g3">
            {testimonials.map((t) => (
              <article key={t.nome} className="flex flex-col" style={{ background: '#111A2E', border: '1px solid #1E3A8A', borderRadius: 20, padding: 28 }}>
                <span className="disp" style={{ fontSize: 40, color: '#60A5FA', lineHeight: 1 }}>"</span>
                <p className="flex-grow" style={{ fontSize: 17, color: '#E2E8F0', lineHeight: 1.6, marginTop: 8 }}>{t.texto}</p>
                <div style={{ borderTop: '1px solid #1E293B', marginTop: 24, paddingTop: 16 }}>
                  <p style={{ fontWeight: 700, color: '#fff' }}>{t.nome}</p>
                  <p style={{ fontSize: 14, color: '#60A5FA' }}>{t.empresa} · {t.contexto}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12"><Cta>Quero resultados assim</Cta></div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="sec grid-bg">
        <div className="wrap g2 items-center" style={{ gap: 48 }}>
          <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: '0 30px 60px rgba(11,18,32,.2)' }}>
            <img src={aboutPhoto} alt="Giovanne Morais" className="w-full h-full object-cover" style={{ aspectRatio: '4/5' }} loading="lazy" />
          </div>
          <div>
            <p className="kicker">Quem vai cuidar da sua empresa</p>
            <h2 className="disp h2">Prazer, sou o <span className="hl">Giovanne Morais</span></h2>
            <div className="space-y-5 mt-6" style={{ fontSize: 18, color: '#334155', lineHeight: 1.65 }}>
              <p>Há 5 anos ajudo pequenas e médias empresas e e-commerces a transformar anúncio em cliente. Antes de subir qualquer campanha, analiso a operação e encontro o gargalo, seja no anúncio, na oferta ou no atendimento.</p>
              <p>Atendo poucas empresas por vez, falo direto com o dono e explico tudo sem termos difíceis. Você sempre sabe o que está sendo feito e quanto está voltando.</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Meta Ads', 'Google Ads', 'Estratégia comercial'].map((c) => (
                <span key={c} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 999, padding: '10px 18px', fontSize: 14, fontWeight: 600 }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <h2 className="disp h2 text-center mb-12">Perguntas <span className="hl">frequentes</span></h2>
          <div className="space-y-4">
            {faq.map(([q, a], i) => (
              <details key={q} open={i === 0} style={{ background: '#F5F7FB', border: '1px solid #E2E8F0', borderRadius: 16, padding: '20px 24px' }}>
                <summary className="flex items-center justify-between gap-4" style={{ fontSize: 18, fontWeight: 700 }}>
                  {q}
                  <span className="chev transition-transform" style={{ color: '#1D4ED8', fontSize: 24, lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.6, marginTop: 12 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="diagnostico" className="sec dark" style={{ scrollMarginTop: 0 }}>
        <div className="wrap g2 items-center" style={{ gap: 48 }}>
          <div>
            <p className="kicker">Diagnóstico gratuito</p>
            <h2 className="disp h2f" style={{ color: '#fff' }}>Descubra onde sua empresa está <span className="hl">perdendo clientes</span></h2>
            <p style={{ fontSize: 18, color: '#CBD5E1', lineHeight: 1.65, marginTop: 20 }}>
              Responda as perguntas ao lado. Se sua empresa tiver perfil, eu entro em contato pelo WhatsApp em até 1 dia útil para marcar 30 minutos de conversa.
            </p>
            <ul className="space-y-3 mt-8" style={{ fontSize: 16, color: '#E2E8F0', fontWeight: 500 }}>
              {['Análise dos seus anúncios e do seu perfil', '3 ajustes práticos para aplicar já', 'Sem compromisso de contratar'].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckIcon color="#60A5FA" />{t}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#111A2E', border: '1px solid #1E3A8A', borderRadius: 24, padding: 32, boxShadow: '0 30px 80px rgba(0,0,0,.5)' }}>
            <LeadFormDiag />
          </div>
        </div>
      </section>

      <footer style={{ background: '#070B14', color: '#94A3B8', fontSize: 14 }}>
        <div className="wrap flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-8">
          <p>Giovanne Morais · Tráfego pago e estratégia para empresas</p>
          <p>
            <a href="https://www.instagram.com/ogiovannemorais/" target="_blank" rel="noopener noreferrer" className="hover:underline">@ogiovannemorais</a>
            {' · '}giovannemorais.com.br
          </p>
        </div>
      </footer>
    </div>
  );
}
