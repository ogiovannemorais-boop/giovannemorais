import giovannePhoto from '@/assets/giovanne-photo.png';

const icons = [
  // Meta
  {
    label: 'Meta Ads',
    bg: '#0866FF',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V14.9H8V12h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 2.9H13V21.95c5.05-.5 9-4.76 9-9.95 0-5.52-4.48-10-10-10z"
          fill="#fff"
        />
      </svg>
    ),
  },
  // Google
  {
    label: 'Google Ads',
    bg: '#fff',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M21.35 11.1H12v2.83h5.35c-.23 1.26-1.51 3.69-5.35 3.69-3.22 0-5.84-2.67-5.84-5.95s2.62-5.95 5.84-5.95c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.78 3.3 14.62 2.3 12 2.3 6.84 2.3 2.7 6.46 2.7 11.67S6.84 21.04 12 21.04c6.93 0 9.5-4.86 9.5-7.43 0-.79-.08-1.41-.15-2.51z" fill="#4285F4"/>
      </svg>
    ),
  },
  // TikTok
  {
    label: 'TikTok Ads',
    bg: '#000',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.16a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.59z" fill="#25F4EE"/>
        <path d="M20.43 7.28a4.83 4.83 0 0 1-3.77-4.25V2.6h-2.61v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V10a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 6.64 20.7a6.34 6.34 0 0 0 10.86-4.43V8.76a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84.4z" fill="#FE2C55"/>
      </svg>
    ),
  },
  // ChatGPT
  {
    label: 'ChatGPT',
    bg: '#10A37F',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#fff">
        <path d="M22.28 10.1a5.46 5.46 0 0 0-.47-4.48 5.52 5.52 0 0 0-5.94-2.65 5.51 5.51 0 0 0-4.16-1.86 5.52 5.52 0 0 0-5.26 3.82 5.5 5.5 0 0 0-3.68 2.67 5.52 5.52 0 0 0 .68 6.47 5.46 5.46 0 0 0 .47 4.48 5.52 5.52 0 0 0 5.94 2.65 5.5 5.5 0 0 0 4.16 1.86 5.52 5.52 0 0 0 5.26-3.83 5.5 5.5 0 0 0 3.68-2.67 5.52 5.52 0 0 0-.68-6.46zM13.07 21.5a4.1 4.1 0 0 1-2.63-.95l.13-.07 4.37-2.52a.71.71 0 0 0 .36-.62v-6.16l1.85 1.07a.07.07 0 0 1 .04.05v5.1a4.1 4.1 0 0 1-4.12 4.1zM4.22 17.72a4.09 4.09 0 0 1-.49-2.75l.13.08 4.37 2.52a.71.71 0 0 0 .72 0l5.34-3.08v2.14a.07.07 0 0 1-.03.05L9.84 19.24a4.1 4.1 0 0 1-5.62-1.52zM3.07 8.16a4.1 4.1 0 0 1 2.15-1.8v5.19a.71.71 0 0 0 .36.62l5.32 3.07-1.85 1.07a.07.07 0 0 1-.06 0L4.57 13.77a4.1 4.1 0 0 1-1.5-5.6zm15.18 3.53l-5.34-3.1 1.85-1.06a.07.07 0 0 1 .06 0l4.42 2.55a4.1 4.1 0 0 1-.61 7.39v-5.19a.74.74 0 0 0-.38-.61zm1.84-2.77l-.13-.08-4.36-2.55a.71.71 0 0 0-.72 0L9.55 9.38V7.24a.06.06 0 0 1 .02-.05L14 4.65a4.1 4.1 0 0 1 6.09 4.27zM8.55 12.71l-1.85-1.07a.07.07 0 0 1-.03-.05V6.5a4.1 4.1 0 0 1 6.72-3.15l-.13.07-4.37 2.52a.71.71 0 0 0-.36.62zm1-2.17l2.38-1.37 2.38 1.37v2.74L11.94 14.65l-2.39-1.37z"/>
      </svg>
    ),
  },
  // Make
  {
    label: 'Make',
    bg: '#6D00CC',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#fff">
        <path d="M6 3h2v18H6zm10 0h2v18h-2zm-5 0l-2.5 9L11 21h2l-2.5-9L13 3z"/>
      </svg>
    ),
  },
];

export function OrbitingHero() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square">
      {/* Glow background */}
      <div className="absolute inset-[15%] rounded-full bg-[#04BFBF]/10 blur-3xl" aria-hidden />

      {/* Photo */}
      <div className="absolute inset-[18%] rounded-full overflow-hidden border-2 border-[#04BFBF]/40 bg-[#212226] shadow-2xl">
        <img
          src={giovannePhoto}
          alt="Giovanne Morais, gestor de tráfego pago e estratégia digital"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Orbit ring (decorative) */}
      <div
        className="absolute inset-0 rounded-full border border-dashed border-[#04BFBF]/15"
        aria-hidden
      />

      {/* Orbiting icons */}
      <div className="absolute inset-0 animate-[orbit-spin_24s_linear_infinite]" aria-hidden>
        {icons.map((icon, i) => {
          const angle = (360 / icons.length) * i;
          return (
            <div
              key={icon.label}
              className="absolute top-1/2 left-1/2 w-0 h-0"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(-50% - 9rem))`,
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 -ml-6 -mt-6 sm:-ml-7 sm:-mt-7 rounded-full flex items-center justify-center shadow-xl ring-1 ring-white/10 animate-[orbit-counter_24s_linear_infinite]"
                style={{ backgroundColor: icon.bg }}
                title={icon.label}
              >
                {icon.svg}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default OrbitingHero;
