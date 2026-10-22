# Project rules
- Define Giovanne's WhatsApp number in src/data/links.ts and import it for dynamic contact links, so all CTAs share one destination while retaining their messages.
- Keep lead CRM and notification credentials server-only in the submit-lead function, so visitors never receive provider secrets.
- Normalize external lead envelopes in submit-lead/normalize.ts before shared validation; enforce external delivery uniqueness in the database before any CRM or notification calls to prevent concurrent retry duplicates.