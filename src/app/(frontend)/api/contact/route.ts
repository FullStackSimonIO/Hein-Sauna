// app/api/contact/route.ts
import { ContactFormEmail } from '@/emails/ContactFormEmail'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const { name, email, message, acceptTerms } = await req.json()

    // 1) Validation
    if (!name || !email || !message || acceptTerms === undefined) {
      return NextResponse.json({ error: 'Alle Felder sind erforderlich' }, { status: 400 })
    }

    // 2) Speichern in PayloadCMS
    const payloadUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const payloadRes = await fetch(`${payloadUrl}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
      },
      body: JSON.stringify({ name, email, message, acceptTerms }),
    })

    if (!payloadRes.ok) {
      const text = await payloadRes.text()
      console.error('PayloadCMS-Fehler:', text)
      return NextResponse.json(
        { error: 'Nachricht konnte nicht gespeichert werden' },
        { status: 500 },
      )
    }

    await resend.emails.send({
      from: 'info@fullstack-factory.de'!, // z.B. '"Deine Seite" <no-reply@deinedomain.de>'
      to: 'info@bayernmakler24.de'!, // z.B. 'kontakt@deinedomain.de'
      subject: 'Neue Kontaktanfrage über deine Website',
      react: await ContactFormEmail({ name, email, message, acceptTerms }), // JSX-Template
    })

    return NextResponse.json({ message: 'Gespeichert und E-Mail verschickt' }, { status: 201 })
  } catch (error) {
    console.error('Kontakt-API-Fehler:', error)
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}
