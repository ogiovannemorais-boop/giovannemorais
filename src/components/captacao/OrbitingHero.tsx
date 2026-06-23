import giovannePhoto from '@/assets/giovanne-transparent.png';

const logos = [
  {
    label: 'Make',
    pos: 'top-[8%] left-1/2 -translate-x-1/2',
    delay: 0,
    url: 'https://cdn.worldvectorlogo.com/logos/make-2.svg',
  },
  {
    label: 'Google Ads',
    pos: 'top-[22%] left-[-22px]',
    delay: 0.6,
    url: 'https://cdn.worldvectorlogo.com/logos/google-ads-5.svg',
  },
  {
    label: 'Meta',
    pos: 'top-[22%] right-[-22px]',
    delay: 1.2,
    url: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg',
  },
  {
    label: 'ChatGPT',
    pos: 'top-[52%] left-[-18px]',
    delay: 1.8,
    url: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
  },
  {
    label: 'TikTok',
    pos: 'top-[52%] right-[-18px]',
    delay: 2.4,
    url: 'https://cdn.worldvectorlogo.com/logos/tiktok-2.svg',
  },
  {
    label: 'Google Analytics',
    pos: 'bottom-[8%] left-1/2 -translate-x-1/2',
    delay: 3.0,
    url: 'https://cdn.worldvectorlogo.com/logos/google-analytics-1.svg',
  },
];

export function OrbitingHero() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-[4/5] self-end">
      {/* Soft glow behind photo, no box */}
      <div
        className="absolute inset-x-[8%] inset-y-[12%] rounded-full bg-[#04BFBF]/15 blur-3xl"
        aria-hidden
      />

      {/* Transparent photo */}
      <img
        src={giovannePhoto}
        alt="Giovanne Morais, gestor de trafego pago e estrategia digital"
        className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        loading="eager"
        decoding="async"
      />

      {/* Floating logos — NO CARDS, just badges */}
      {logos.map((l) => (
        <div
          key={l.label}
          title={l.label}
          aria-hidden
          className={`absolute z-20 ${l.pos} w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 hover:scale-[1.15]`}
          style={{
            animation: `float-y 5s ease-in-out ${l.delay}s infinite`,
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
          }}
        >
          <img
            src={l.url}
            alt={l.label}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default OrbitingHero;
