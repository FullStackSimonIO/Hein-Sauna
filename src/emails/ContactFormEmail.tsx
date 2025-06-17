// components/emails/ContactFormEmail.tsx
import * as React from 'react'
import { Html, Section, Container, Heading, Text } from '@react-email/components'

interface ContactFormEmailProps {
  name: string
  email: string
  message: string
  acceptTerms: boolean
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  message,
  acceptTerms,
}) => (
  <Html lang="de">
    <Section>
      <Container>
        <Heading style={{ marginBottom: '1rem' }}>Neue Kontaktanfrage</Heading>
        <Text>
          <strong>Name:</strong> {name}
        </Text>
        <Text>
          <strong>E-Mail:</strong> {email}
        </Text>
        <Text>
          <strong>Nachricht:</strong>
          <br />
          {message}
        </Text>
        <Text style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          AGB akzeptiert: {acceptTerms ? 'Ja' : 'Nein'}
        </Text>
      </Container>
    </Section>
  </Html>
)
