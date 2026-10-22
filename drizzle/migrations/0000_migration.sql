CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  nome text NOT NULL CHECK (char_length(nome) BETWEEN 2 AND 100),
  whatsapp text NOT NULL CHECK (whatsapp ~ '^[0-9]{10,11}$'),
  empresa text NOT NULL CHECK (char_length(empresa) BETWEEN 2 AND 120),
  cidade text NOT NULL CHECK (char_length(cidade) BETWEEN 2 AND 120),
  produto text NOT NULL CHECK (char_length(produto) BETWEEN 2 AND 300),
  faturamento text NOT NULL CHECK (char_length(faturamento) <= 60),
  verba text NOT NULL CHECK (char_length(verba) <= 60),
  desafio text NOT NULL CHECK (char_length(desafio) <= 60),
  utm_source text CHECK (char_length(utm_source) <= 200),
  utm_medium text CHECK (char_length(utm_medium) <= 200),
  utm_campaign text CHECK (char_length(utm_campaign) <= 200),
  utm_content text CHECK (char_length(utm_content) <= 200),
  utm_term text CHECK (char_length(utm_term) <= 200),
  page_url text CHECK (char_length(page_url) <= 1000)
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a lead" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);