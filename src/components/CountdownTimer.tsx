import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getNextMonday = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
      const nextMonday = new Date(now);
      nextMonday.setDate(now.getDate() + daysUntilMonday);
      nextMonday.setHours(9, 0, 0, 0);
      return nextMonday;
    };

    const target = getNextMonday();

    const updateTimer = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: 'Dias' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ];

  return (
    <div className="fade-in">
      <div className="flex items-center justify-center gap-2 mb-3 text-sm text-muted-foreground">
        <Clock className="w-4 h-4 text-primary" />
        <span>Próximas vagas encerram em:</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        {timeBlocks.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-card border border-border rounded-xl flex items-center justify-center">
              <span className="text-xl md:text-2xl font-bold text-foreground">
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
