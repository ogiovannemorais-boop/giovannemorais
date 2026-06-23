import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const objections = [
  {
    q: 'Quanto custa trabalhar com você?',
    a: 'Não tenho pacote fixo porque cada negócio é diferente. Trabalho com investimento mínimo de R$ 2.000/mês em tráfego, mais taxa de gestão. Antes de qualquer proposta, fazemos uma análise gratuita de 30 minutos para entender seu caso e dar um orçamento realista. Tenho cliente que começou com R$ 2 mil e hoje investe R$ 10 mil porque o retorno justifica.',
  },
  {
    q: 'Em quanto tempo vejo resultados?',
    a: 'Os primeiros sinais aparecem entre 15 e 20 dias, com as otimizações iniciais de campanha. O crescimento real e exponencial acontece entre 60 e 90 dias, quando há dados suficientes para escalar. Vejo clientes recuperando o investimento inicial já no primeiro mês. O essencial é ter paciência nos primeiros 30 dias e confiar no processo.',
  },
  {
    q: 'Você garante resultados?',
    a: 'Não vendo garantia porque ninguém pode garantir resultado em marketing digital (depende de produto, preço, público e concorrência). O que eu garanto é: estratégia testada, dedicação 100%, transparência total nos dados e ajustes contínuos. Se em 60 dias o cenário não evoluir, revisamos tudo. Os cases dos meus clientes falam mais do que qualquer promessa.',
  },
  {
    q: 'Por que não contratar uma agência grande?',
    a: 'Agências grandes trabalham com volume: 50, 100 clientes simultâneos. Você vira número. Aqui você tem um gestor dedicado, focado no seu negócio. Por isso meus clientes crescem: tenho tempo para testar, ajustar e pensar estratégia. Não é só rodar anúncio, é construir um sistema de vendas. Veja os cases: nenhum deles teria crescido assim em agência grande.',
  },
  {
    q: 'Quanto tempo para começarmos a operar?',
    a: 'Primeira conversa: hoje. Análise gratuita: em até 48h. Estruturação da estratégia: 3 a 5 dias. Primeiros anúncios no ar: 7 a 10 dias. Não é burocracia, é planejamento. Quanto melhor o planejamento, melhor o resultado. Já tive cliente que começou do zero (sem perfil, sem nada) e em 10 dias teve a primeira venda.',
  },
];

export function ObjectionsFAQ() {
  return (
    <section className="bg-[#212226] border-t border-[#F2F2F2]/5">
      <div className="px-6 md:px-12 py-20 md:py-28 max-w-[760px] mx-auto">
        <p className="text-[11px] tracking-[0.18em] uppercase text-[#04BFBF] mb-6">
          Dúvidas frequentes
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold mb-10">
          O que você precisa saber antes de falar comigo.
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {objections.map((item, i) => (
            <AccordionItem
              key={i}
              value={`obj-${i}`}
              className="border-b border-[#F2F2F2]/10"
            >
              <AccordionTrigger className="text-left text-[1.0625rem] font-semibold text-[#F2F2F2] hover:text-[#04BFBF] hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#F2F2F2]/75 text-[15px] leading-[1.7] pb-6">
                <p className="mb-4">{item.a}</p>
                <a
                  href="#form"
                  className="inline-flex items-center gap-2 text-[#04BFBF] text-sm font-semibold hover:underline"
                >
                  Conversar sobre o meu caso
                  <span aria-hidden>→</span>
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default ObjectionsFAQ;
