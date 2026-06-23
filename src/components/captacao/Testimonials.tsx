import { Star } from 'lucide-react';

const testimonials = [
  {
    nome: 'Linyker',
    empresa: 'LKR Multimarcas',
    contexto: 'Loja de moda multimarcas',
    metrica: 'De vendas esporádicas para vendas diárias',
    tempo: '6 meses',
    texto:
      'Estava vendendo do meu quarto, sem estratégia. Giovanne não só me ajudou com tráfego pago: estruturou todo meu negócio. Hoje tenho loja física e online vendendo todos os dias. Não é só anúncio, é estratégia completa.',
  },
  {
    nome: 'Wesley',
    empresa: 'Pulps Frutas',
    contexto: 'Polpa de fruta · começou do zero',
    metrica: 'R$ 150.000+ por mês',
    tempo: '4 a 5 meses',
    texto:
      'Comecei com nada: sem perfil, sem WhatsApp, sem Google Meu Negócio. Giovanne estruturou tudo do zero: estratégia de tráfego, presença local e automações. Hoje batemos R$ 150 mil por mês regularmente. Mudou meu negócio completamente.',
  },
  {
    nome: 'Fernanda',
    empresa: 'By Beach',
    contexto: 'E-commerce de moda praia premium',
    metrica: 'De R$ 50 mil para R$ 130 mil/mês',
    tempo: '3 a 4 meses',
    texto:
      'Vendíamos R$ 50 mil por mês, mesmo em dezembro. Com o método de e-commerce do Giovanne, hoje vendemos R$ 130 mil até em meses de baixa. Além disso, construímos uma base de clientes sólida. Transformou meu negócio.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#00010D] border-t border-[#F2F2F2]/5">
      <div className="px-6 md:px-12 py-20 md:py-28 max-w-[1100px] mx-auto">
        <p className="text-[11px] tracking-[0.18em] uppercase text-[#04BFBF] mb-6">
          Cases reais
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold mb-12 max-w-[680px]">
          Resultados que falam mais do que qualquer promessa.
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article
              key={t.nome}
              className="bg-[#212226]/60 border border-[#04BFBF]/15 border-l-2 border-l-[#04BFBF] rounded-md p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4 text-[#04BFBF]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <p className="text-[15px] leading-[1.65] text-[#F2F2F2]/85 mb-6 flex-grow">
                "{t.texto}"
              </p>

              <div className="border-t border-[#F2F2F2]/10 pt-4 mt-auto">
                <p className="font-semibold text-[#F2F2F2]">{t.nome}</p>
                <p className="text-xs text-[#F2F2F2]/55 mb-3">
                  {t.empresa} · {t.contexto}
                </p>
                <p className="text-sm font-semibold text-[#04BFBF]">{t.metrica}</p>
                <p className="text-[11px] uppercase tracking-wider text-[#F2F2F2]/40 mt-1">
                  Em {t.tempo}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
