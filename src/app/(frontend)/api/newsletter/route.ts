// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import React from 'react'
import { render } from '@react-email/render'

import { Resend } from 'resend'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ConfirmNewsletterEmail } from '@/emails/ConfirmNewsletter'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'E-Mail ist erforderlich' }, { status: 400 })
    }

    const confirmationToken = nanoid(32)
    const ipAddress =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-real-ip') ||
      'unknown'

    // ► Direkt mit dem Payload-SDK arbeiten
    const payload = await getPayload({ config: configPromise })
    const subscriber = await payload.create({
      collection: 'newsletter-subscribers',
      data: {
        email,
        confirmationToken,
        ipAddress,
        // confirmed: false (Default)
        // createdAt: Default via Hook
      },
    })

    // ► E-Mail rendern & versenden
    const confirmUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/newsletter/confirm?token=${confirmationToken}`
    const element = React.createElement(ConfirmNewsletterEmail, { confirmUrl })
    const html = await render(element)

    await resend.emails.send({
      from: 'newsletter@fullstack-factory.de',
      to: email,
      subject: 'Bitte bestätige dein Newsletter-Abonnement',
      html,
    })

    return NextResponse.json(
      { message: 'Anmeldung erhalten – bitte bestätige per E-Mail.' },
      { status: 201 },
    )
  } catch (err) {
    console.error('Newsletter-API-Fehler:', err)
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}
