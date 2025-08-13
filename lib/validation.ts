import { z } from 'zod';

export const donorSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  city: z.string().min(2).max(80),
  amount_range: z.enum(['100-300 MAD','300-600 MAD','600-1000 MAD','1000+ MAD']),
  whatsapp: z.string().optional().or(z.literal('')),
  hcaptcha_token: z.string().optional()
});

export const entrepreneurSchema = z.object({
  name: z.string().min(2).max(80),
  business_type: z.string().min(2).max(80),
  city: z.string().min(2).max(80),
  funding_need: z.coerce.number().positive(),
  whatsapp: z.string().optional().or(z.literal('')),
  hcaptcha_token: z.string().optional()
});
