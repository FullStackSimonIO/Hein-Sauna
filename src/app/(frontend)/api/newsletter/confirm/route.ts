// src/app/api/newsletter/confirm/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET(req: Request) {
  // 1) Token aus Query
  const token = new URL(req.url).searchParams.get('token')

  // 2) Basis-URL aus ENV + Fallback
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_PAYLOAD_URL ||
    'http://localhost:3000'
  ).replace(/\/$/, '')

  // 3) Kein Token => Fehlerseite
  if (!token) {
    return NextResponse.redirect(new URL('/newsletter/bestaetigung-fehlgeschlagen', baseUrl))
  }

  // 4) Subscriber suchen
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'newsletter-subscribers',
    where: { confirmationToken: { equals: token } },
    limit: 1,
  })
  const subscriber = result.docs[0]

  // 5) Ungültiger Token => Fehlerseite
  if (!subscriber) {
    return NextResponse.redirect(new URL('/newsletter/bestaetigung-fehlgeschlagen', baseUrl))
  }

  // 6) Status auf bestätigt setzen
  await payload.update({
    collection: 'newsletter-subscribers',
    id: subscriber.id,
    data: {
      confirmed: true,
      confirmedAt: new Date().toISOString(),
    },
  })

  // 7) Erfolgsseite
  return NextResponse.redirect(new URL('/newsletter/bestaetigt', baseUrl))
}
