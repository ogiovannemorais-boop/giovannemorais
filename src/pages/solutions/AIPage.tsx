import { SolutionLayout } from '@/components/solutions/SolutionLayout';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

function ROICalculator() {
  const [hours, setHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  
  const monthlySavings = hours * 4 * hourlyRate;
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="mt-16 bg-card border border-primary/20 rounded-2xl p-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Calculadora de Ganho Operacional</h3>
          <p className="text-sm text-muted-foreground">Descubra quanto você pode economizar com IA</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Horas semanais em tarefas repetitivas
            </label>
            <input
              type="range"
              min="1"
              max="40"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>1h</span>
              <span className="font-medium text-foreground">{hours}h</span>
              <span>40h</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Custo médio da hora (R$)
            </label>
            <input
              type="range"
              min="20"
              max="200"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>R$ 20</span>
              <span className="font-medium text-foreground">R$ {hourlyRate}</span>
              <span>R$ 200</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6">
          <h4 className="text-sm font-medium text-muted-foreground mb-4">Economia potencial</h4>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Por mês</div>
              <div className="text-3xl font-bold gradient-text">
                R$ {monthlySavings.toLocaleString('pt-BR')}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Por ano</div>
              <div className="text-2xl font-semibold">
                R$ {yearlySavings.toLocaleString('pt-BR')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIPage() {
  return (
    <SolutionLayout
      title="Automatize processos e reduza custos com IA aplicada."
      subtitle="Agentes inteligentes, fluxos automatizados e integrações que trabalham por você 24/7."
      pains={[
        'Tarefas repetitivas consumindo tempo da equipe',
        'Processos manuais sujeitos a erros',
        'Dificuldade em escalar operações',
      ]}
      solution="Implementamos soluções de IA personalizadas: agentes de atendimento, automações de processos e integrações inteligentes. Tudo documentado, com governança e dentro das normas de proteção de dados."
      playbook={[
        { step: 'Mapeamento', description: 'Identificação de processos automatizáveis' },
        { step: 'Arquitetura', description: 'Design da solução com ferramentas adequadas' },
        { step: 'Implementação', description: 'Desenvolvimento e integração' },
        { step: 'Documentação', description: 'Manuais e treinamento da equipe' },
      ]}
      deliverables={[
        'Agentes de IA personalizados',
        'Fluxos automatizados (Make/n8n)',
        'Integrações com seus sistemas',
        'Documentação completa',
        'Treinamento da equipe',
        'Suporte e manutenção',
      ]}
      kpis={[
        'Horas economizadas',
        'SLA de atendimento',
        'Custo por tarefa',
        'Taxa de automação',
      ]}
      faqs={[
        {
          question: 'Preciso de conhecimento técnico para usar?',
          answer: 'Não. Entregamos tudo funcionando e com documentação clara. Você só precisa acompanhar os resultados.',
        },
        {
          question: 'As automações podem quebrar?',
          answer: 'Construímos com redundância e monitoramento. Se algo falhar, você é notificado e corrigimos rapidamente.',
        },
        {
          question: 'Funciona com meus sistemas atuais?',
          answer: 'Na maioria dos casos, sim. Trabalhamos com APIs e integrações. Avaliamos sua stack no diagnóstico inicial.',
        },
        {
          question: 'E quanto à segurança dos dados?',
          answer: 'Seguimos LGPD by design. Dados são processados com segurança e você mantém controle total.',
        },
      ]}
      ctaText="Calcular ganho operacional com IA"
    >
      <ROICalculator />
    </SolutionLayout>
  );
}
