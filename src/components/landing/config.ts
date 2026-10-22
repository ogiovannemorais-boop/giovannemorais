export interface LandingConfig {
  title: string;
  description: string;
  canonical: string;
  topbar: string;
  header?: boolean;
  hideHeroCard?: boolean;
  heroCta: string;
  heroMicro: string;
  heroCheck2: string;
  methodKicker: string;
  methodCta: string;
  passos: string[][];
  faq: string[][];
  formId: string;
  formKicker: string;
  formTitle: [string, string];
  formText: string;
  formChecks: string[];
  verbaLabel: string;
  formButton: string;
  onSuccess: 'whatsapp' | 'agendar';
  footerLinks?: [string, string][];
}
