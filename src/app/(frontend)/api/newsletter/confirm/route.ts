// src/app/api/newsletter/confirm/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET(req: Request) {
  const token = new URL(req.url).searchParams.get('token')
  if (!token)
    return NextResponse.redirect('http://localhost:3000/newsletter/bestaetigung-fehlgeschlagen')

  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'newsletter-subscribers',
    where: { confirmationToken: { equals: token } },
    limit: 1,
  })
  const subscriber = result.docs[0]
  if (!subscriber)
    return NextResponse.redirect('http://localhost:3000/newsletter/bestaetigung-fehlgeschlagen')

  await payload.update({
    collection: 'newsletter-subscribers',
    id: subscriber.id,
    data: { confirmed: true, confirmedAt: new Date().toISOString() },
  })

  return NextResponse.redirect('/newsletter/bestaetigt')
}
