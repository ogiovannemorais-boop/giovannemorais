import { cn } from '@/lib/utils';

interface CaseCardProps {
  client: string;
  challenge: string;
  strategy: string;
  results: string[];
  className?: string;
  style?: React.CSSProperties;
}

export function CaseCard({
  client,
  challenge,
  strategy,
  results,
  className,
  style,
}: CaseCardProps) {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-2xl p-6 card-hover animate-fade-in',
        className
      )}
      style={style}
    >
      <div className="text-sm font-medium text-primary mb-2">{client}</div>
      <h3 className="font-semibold mb-3">{challenge}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        <strong>Estratégia:</strong> {strategy}
      </p>
      <div className="space-y-2">
        {results.map((result) => (
          <div key={result} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {result}
          </div>
        ))}
      </div>
    </div>
  );
}
