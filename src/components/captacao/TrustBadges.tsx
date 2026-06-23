import { Award, Users } from 'lucide-react';

export function TrustBadges() {
  const items = [
    { icon: Award, label: 'Especialista em tráfego pago', sub: 'Desde 2022' },
    { icon: Users, label: '+30 clientes atendidos', sub: 'Em todo o Brasil' },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex items-center gap-3 bg-[#212226]/60 border border-[#04BFBF]/20 rounded-md px-4 py-2.5"
        >
          <div className="w-8 h-8 rounded-full bg-[#04BFBF]/15 flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4 text-[#04BFBF]" strokeWidth={2.2} />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-[#F2F2F2]">{label}</p>
            <p className="text-[10px] uppercase tracking-wider text-[#F2F2F2]/50">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrustBadges;
