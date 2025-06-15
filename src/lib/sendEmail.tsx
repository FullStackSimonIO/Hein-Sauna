// src/lib/sendConfirmationEmail.ts
import { ConfirmNewsletterEmail } from '@/emails/ConfirmNewsletter'
import { render } from '@react-email/render'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendConfirmationEmail(email: string, token: string) {
  const confirmUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/newsletter/confirm?token=${token}`

  // render() produziert komplettes HTML mit deinem Tailwind-Styling
  const html = await render(<ConfirmNewsletterEmail confirmUrl={confirmUrl} />)

  await resend.emails.send({
    from: 'newsletter@hein-sauna.de',
    to: email,
    subject: 'Bitte bestätige deine Newsletter-Anmeldung',
    html,
  })
}
