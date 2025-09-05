import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Ad soyad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  company: z.string().min(2, 'Şirket adı en az 2 karakter olmalıdır'),
  useCase: z.string().min(1, 'Kullanım alanı seçiniz'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
