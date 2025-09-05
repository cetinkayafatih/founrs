"use server";

import { Resend } from 'resend';
import { contactFormSchema, type ContactFormData } from './validations';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(data);

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: 'PRISMR <noreply@prismr.com>',
      to: [process.env.CONTACT_TO_EMAIL || 'hi@prismr.com'],
      subject: `Yeni İletişim Formu: ${validatedData.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F8CFF;">Yeni İletişim Formu Mesajı</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>İletişim Bilgileri</h3>
            <p><strong>Ad Soyad:</strong> ${validatedData.name}</p>
            <p><strong>E-posta:</strong> ${validatedData.email}</p>
            <p><strong>Şirket:</strong> ${validatedData.company}</p>
            <p><strong>Kullanım Alanı:</strong> ${validatedData.useCase}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3>Mesaj</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px;">
            <p>Bu mesaj PRISMR web sitesi iletişim formundan gönderilmiştir.</p>
            <p>Gönderilme zamanı: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error('Email sending failed:', emailResult.error);
      return {
        success: false,
        error: 'E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
      };
    }

    return {
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.',
    };
  }
}
