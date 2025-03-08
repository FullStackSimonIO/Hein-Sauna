import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message, acceptTerms } = await req.json()

    if (!name || !email || !message || acceptTerms === undefined) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'
    const response = await fetch(`${payloadUrl}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`, // Ensure this is set in .env
      },
      body: JSON.stringify({ name, email, message, acceptTerms }),
    })

    if (!response.ok) {
      throw new Error('Failed to save message')
    }

    return NextResponse.json({ message: 'Message saved successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error saving message:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
