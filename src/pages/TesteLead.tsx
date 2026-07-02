import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { sendLeadToSheets, type LeadSendResult, GOOGLE_SHEETS_WEBHOOK_URL } from '@/lib/tracking';

type Status = 'idle' | 'running' | 'success' | 'error';

function buildTestLead() {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  return {
    nome: `Teste Automático ${stamp}`,
    empresa: 'Teste QA',
    email: `teste+${Date.now()}@example.com`,
    whatsapp: '(16) 99999-0000',
    contexto: 'Envio automático a partir de /teste-lead',
    page_variant: 'teste',
    test: true,
  };
}

export default function TesteLead() {
  const [status, setStatus] = useState<Status>('idle');
  const [result, setResult] = useState<LeadSendResult | null>(null);

  const run = async () => {
    setStatus('running');
    setResult(null);
    toast('Enviando lead de teste…');
    const r = await sendLeadToSheets(buildTestLead());
    setResult(r);
    if (r.ok) {
      setStatus('success');
      toast.success('Lead gravado no Google Sheets ✔');
    } else {
      setStatus('error');
      toast.error(`Falha ao gravar (status ${r.status})`);
    }
  };

  useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const badge =
    status === 'success'
      ? 'bg-[#04BFBF] text-[#00010D]'
      : status === 'error'
      ? 'bg-red-500 text-white'
      : 'bg-white/10 text-white';

  return (
    <main className="min-h-screen bg-[#00010D] text-[#F2F2F2] px-6 py-16 font-sans">
      <div className="max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#04BFBF] mb-3">
          Diagnóstico do formulário
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Teste automático de envio para Google Sheets
        </h1>

        <div className="flex items-center gap-3 mb-8">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badge}`}>
            {status === 'running' && 'Enviando…'}
            {status === 'success' && 'Sucesso'}
            {status === 'error' && 'Erro'}
            {status === 'idle' && 'Aguardando'}
          </span>
          <button
            onClick={run}
            disabled={status === 'running'}
            className="text-xs px-3 py-1 rounded border border-white/20 hover:border-[#04BFBF] transition-colors disabled:opacity-50"
          >
            Rodar novamente
          </button>
        </div>

        <section className="mb-6">
          <h2 className="text-sm uppercase tracking-widest text-white/60 mb-2">Webhook</h2>
          <code className="block text-xs break-all bg-white/5 border border-white/10 rounded p-3">
            {GOOGLE_SHEETS_WEBHOOK_URL}
          </code>
        </section>

        {result && (
          <>
            <section className="mb-6">
              <h2 className="text-sm uppercase tracking-widest text-white/60 mb-2">
                Payload enviado
              </h2>
              <pre className="text-xs bg-white/5 border border-white/10 rounded p-3 overflow-x-auto">
                {JSON.stringify(result.payload, null, 2)}
              </pre>
            </section>

            <section className="mb-6">
              <h2 className="text-sm uppercase tracking-widest text-white/60 mb-2">
                Resposta ({result.status || 'network error'})
              </h2>
              <pre className="text-xs bg-white/5 border border-white/10 rounded p-3 overflow-x-auto">
                {result.error
                  ? result.error
                  : typeof result.data === 'string'
                  ? result.data
                  : JSON.stringify(result.data, null, 2)}
              </pre>
            </section>

            <p className="text-sm text-white/70">
              {result.ok ? (
                <>
                  ✅ Verifique a última linha da planilha —{' '}
                  <strong>o nome termina com o timestamp acima</strong>.
                </>
              ) : (
                <>
                  ❌ O webhook não confirmou a gravação. Cheque se o Apps Script está
                  publicado como <em>App da Web</em> com acesso <em>Qualquer pessoa</em> e se o
                  <code className="mx-1">doPost</code> está retornando JSON.
                </>
              )}
            </p>
          </>
        )}
      </div>
    </main>
  );
}
