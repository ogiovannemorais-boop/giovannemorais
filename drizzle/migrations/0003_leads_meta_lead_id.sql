ALTER TABLE public.leads ADD COLUMN meta_lead_id text;
CREATE UNIQUE INDEX leads_meta_lead_id_unique ON public.leads (meta_lead_id) WHERE meta_lead_id IS NOT NULL;
COMMENT ON COLUMN public.leads.meta_lead_id IS 'Meta Lead Ads ID used to atomically deduplicate Make deliveries.';