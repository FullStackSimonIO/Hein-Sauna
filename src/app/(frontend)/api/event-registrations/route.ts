import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Ensure the Payload URL is correctly set in .env
    const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'

    // Send the request to Payload's API
    const response = await fetch(`${payloadUrl}/api/event-registrations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`, // Secure your Payload API access
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      throw new Error('Failed to save registration')
    }

    return NextResponse.json({ message: 'Successfully registered!' }, { status: 201 })
  } catch (error) {
    console.error('Error registering email:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
