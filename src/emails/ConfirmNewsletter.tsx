// src/emails/ConfirmNewsletterEmail.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Img,
} from '@react-email/components'
import * as React from 'react'

interface ConfirmNewsletterEmailProps {
  confirmUrl: string
}

export const ConfirmNewsletterEmail: React.FC<ConfirmNewsletterEmailProps> = ({ confirmUrl }) => {
  return (
    <Html lang="de">
      <Head />
      <Preview>Fast geschafft – bitte bestätige dein Newsletter-Abonnement</Preview>
      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#EBE1D8',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* Logo */}
        <Section style={{ padding: '40px 0', textAlign: 'center' }}>
          <Img
            src="https://deine-domain.de/logo-wide.png"
            width="200"
            height="50"
            alt="Hein Sauna"
            style={{ display: 'block', margin: '0 auto' }}
          />
        </Section>

        {/* Haupt-Container */}
        <Container
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            margin: '0 auto',
            maxWidth: '600px',
            padding: '32px',
          }}
        >
          {/* Überschrift */}
          <Section style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Heading
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#3E2A19',
                margin: '0 0 16px',
              }}
            >
              Fast geschafft!
            </Heading>
            <Text
              style={{
                fontSize: '16px',
                color: '#555555',
                margin: '0',
                lineHeight: '1.5',
              }}
            >
              Danke für dein Interesse an unserem <strong>Hein Sauna</strong> Newsletter. Bitte
              bestätige deine Anmeldung, indem du auf den Button klickst:
            </Text>
          </Section>

          {/* Button */}
          <Section style={{ textAlign: 'center', margin: '24px 0' }}>
            <Button
              style={{
                backgroundColor: '#8B5E3C',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                display: 'inline-block',
                padding: '12px 24px',
              }}
              href={confirmUrl}
            >
              Anmeldung bestätigen
            </Button>
          </Section>

          {/* Fallback-Link */}
          <Section style={{ marginTop: '32px', fontSize: '14px', color: '#777777' }}>
            <Text style={{ margin: '0 0 8px', lineHeight: '1.4' }}>
              Falls der Button nicht funktioniert, kopiere diesen Link in deinen Browser:
            </Text>
            <Text style={{ margin: 0, wordBreak: 'break-all', lineHeight: '1.4' }}>
              <a href={confirmUrl} style={{ color: '#8B5E3C', textDecoration: 'underline' }}>
                {confirmUrl}
              </a>
            </Text>
          </Section>

          {/* Footer-Hinweis */}
          <Section style={{ marginTop: '40px', fontSize: '12px', color: '#999999' }}>
            <Text style={{ margin: '0 0 8px', lineHeight: '1.4' }}>
              Wenn du diese Anmeldung nicht angefordert hast, kannst du diese E-Mail einfach
              ignorieren.
            </Text>
            <Text style={{ margin: 0, lineHeight: '1.4' }}>
              © {new Date().getFullYear()} Hein Sauna – Alle Rechte vorbehalten.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
