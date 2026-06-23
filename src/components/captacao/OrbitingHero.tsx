import giovannePhoto from '@/assets/giovanne-transparent.png';
import metaLogo from '@/assets/brand/meta-icon.png.asset.json';
import googleAdsLogo from '@/assets/brand/google-ads.svg.asset.json';
import tiktokLogo from '@/assets/brand/tiktok.png.asset.json';
import analyticsLogo from '@/assets/brand/google-analytics.png.asset.json';

type FloatingLogo = {
  label: string;
  node: React.ReactNode;
  /** Tailwind position classes for desktop */
  pos: string;
  /** delay seconds for float animation */
  delay: number;
};

const ChatGPTMark = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#10A37F">
    <path d="M22.28 10.1a5.46 5.46 0 0 0-.47-4.48 5.52 5.52 0 0 0-5.94-2.65 5.51 5.51 0 0 0-4.16-1.86 5.52 5.52 0 0 0-5.26 3.82 5.5 5.5 0 0 0-3.68 2.67 5.52 5.52 0 0 0 .68 6.47 5.46 5.46 0 0 0 .47 4.48 5.52 5.52 0 0 0 5.94 2.65 5.5 5.5 0 0 0 4.16 1.86 5.52 5.52 0 0 0 5.26-3.83 5.5 5.5 0 0 0 3.68-2.67 5.52 5.52 0 0 0-.68-6.46zM13.07 21.5a4.1 4.1 0 0 1-2.63-.95l.13-.07 4.37-2.52a.71.71 0 0 0 .36-.62v-6.16l1.85 1.07a.07.07 0 0 1 .04.05v5.1a4.1 4.1 0 0 1-4.12 4.1zM4.22 17.72a4.09 4.09 0 0 1-.49-2.75l.13.08 4.37 2.52a.71.71 0 0 0 .72 0l5.34-3.08v2.14a.07.07 0 0 1-.03.05L9.84 19.24a4.1 4.1 0 0 1-5.62-1.52zM3.07 8.16a4.1 4.1 0 0 1 2.15-1.8v5.19a.71.71 0 0 0 .36.62l5.32 3.07-1.85 1.07a.07.07 0 0 1-.06 0L4.57 13.77a4.1 4.1 0 0 1-1.5-5.6zm15.18 3.53l-5.34-3.1 1.85-1.06a.07.07 0 0 1 .06 0l4.42 2.55a4.1 4.1 0 0 1-.61 7.39v-5.19a.74.74 0 0 0-.38-.61zm1.84-2.77l-.13-.08-4.36-2.55a.71.71 0 0 0-.72 0L9.55 9.38V7.24a.06.06 0 0 1 .02-.05L14 4.65a4.1 4.1 0 0 1 6.09 4.27z" />
  </svg>
);

const MakeMark = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#6D00CC">
    <path d="M6 3h2v18H6zm10 0h2v18h-2zm-5 0l-2.5 9L11 21h2l-2.5-9L13 3z" />
  </svg>
);

const logos: FloatingLogo[] = [
  {
    label: 'Google Analytics',
    pos: 'top-[2%] left-1/2 -translate-x-1/2',
    delay: 0,
    node: <img src={analyticsLogo.url} alt="" className="w-full h-full object-contain" />,
  },
  {
    label: 'Google Ads',
    pos: 'top-[18%] left-[-18px]',
    delay: 0.6,
    node: <img src={googleAdsLogo.url} alt="" className="w-full h-full object-contain" />,
  },
  {
    label: 'Meta',
    pos: 'top-[18%] right-[-18px]',
    delay: 1.2,
    node: <img src={metaLogo.url} alt="" className="w-full h-full object-contain" />,
  },
  {
    label: 'ChatGPT',
    pos: 'top-[48%] left-[-22px]',
    delay: 1.8,
    node: ChatGPTMark,
  },
  {
    label: 'TikTok',
    pos: 'top-[48%] right-[-22px]',
    delay: 2.4,
    node: <img src={tiktokLogo.url} alt="" className="w-full h-full object-contain" />,
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
        alt="Giovanne Morais, gestor de tráfego pago e estratégia digital"
        className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        loading="eager"
        decoding="async"
      />

      {/* Floating logos */}
      {logos.map((l) => (
        <div
          key={l.label}
          title={l.label}
          aria-hidden
          className={`absolute z-20 ${l.pos} w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-black/5 overflow-hidden flex items-center justify-center transition-transform hover:scale-110`}
          style={{
            animation: `float-y 5s ease-in-out ${l.delay}s infinite`,
          }}
        >
          {l.node}
        </div>
      ))}
    </div>
  );
}

export default OrbitingHero;
