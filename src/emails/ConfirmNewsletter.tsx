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
      <Preview>Fast geschafft – bestätige jetzt dein Newsletter-Abo</Preview>
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
            src="https://hein-sauna.de/logo-wide.png"
            width="200"
            height="60"
            alt="Hein Sauna"
            style={{ display: 'block', margin: '0 auto' }}
          />
        </Section>

        {/* Card */}
        <Container
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            margin: '0 auto',
            maxWidth: '600px',
            padding: '40px 24px',
          }}
        >
          {/* Headline */}
          <Section style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Heading
              style={{
                fontSize: '26px',
                fontWeight: 700,
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
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Vielen Dank für dein Interesse an unserem <strong>Hein Sauna</strong> Newsletter.
              Bitte bestätige deine Anmeldung, indem du auf den Button klickst:
            </Text>
          </Section>

          {/* Button */}
          <Section style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Button
              style={{
                backgroundColor: '#8B5E3C',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                display: 'inline-block',
                padding: '14px 28px',
              }}
              href={confirmUrl}
            >
              Anmeldung bestätigen
            </Button>
          </Section>

          {/* Fallback Link */}
          <Section style={{ fontSize: '14px', color: '#777777', marginBottom: '32px' }}>
            <Text style={{ margin: '0 0 8px', lineHeight: 1.4 }}>
              Falls der Button nicht funktioniert, kopiere diesen Link in deinen Browser:
            </Text>
            <Text style={{ margin: 0, wordBreak: 'break-all', lineHeight: 1.4 }}>
              <a href={confirmUrl} style={{ color: '#8B5E3C', textDecoration: 'underline' }}>
                {confirmUrl}
              </a>
            </Text>
          </Section>

          {/* Gründer-Bilder */}
          <Section
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            {/* Bild 1 */}
            <div style={{ flex: '1 1 120px', textAlign: 'center' }}>
              <Img
                src="https://hein-sauna.de/images/gruender1.jpg"
                width="120"
                height="120"
                alt="Gründer A"
                style={{
                  borderRadius: '60px',
                  display: 'block',
                  margin: '0 auto 8px',
                }}
              />
              <Text style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#3E2A19' }}>
                Max Mustermann
              </Text>
              <Text style={{ margin: 0, fontSize: '12px', color: '#777777' }}>Geschäftsführer</Text>
            </div>
            {/* Bild 2 */}
            <div style={{ flex: '1 1 120px', textAlign: 'center' }}>
              <Img
                src="https://hein-sauna.de/images/gruender2.jpg"
                width="120"
                height="120"
                alt="Gründer B"
                style={{
                  borderRadius: '60px',
                  display: 'block',
                  margin: '0 auto 8px',
                }}
              />
              <Text style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#3E2A19' }}>
                Erika Beispiel
              </Text>
              <Text style={{ margin: 0, fontSize: '12px', color: '#777777' }}>
                Geschäftsführerin
              </Text>
            </div>
          </Section>

          {/* Adresse */}
          <Section style={{ marginBottom: '24px', textAlign: 'center' }}>
            <Text style={{ margin: 0, fontSize: '14px', color: '#555555', lineHeight: 1.5 }}>
              <strong>Hein Sauna GmbH</strong>
              <br />
              Musterstraße 1, 12345 Plattling
              <br />
              Tel. 01234 567890 – info@hein-sauna.de
            </Text>
          </Section>

          {/* Hinweis */}
          <Section style={{ fontSize: '12px', color: '#999999', textAlign: 'center' }}>
            <Text style={{ margin: '0 0 8px', lineHeight: 1.4 }}>
              Wenn du diese Anmeldung nicht angefordert hast, kannst du diese E-Mail einfach
              ignorieren.
            </Text>
            <Text style={{ margin: 0, lineHeight: 1.4 }}>
              © {new Date().getFullYear()} Hein Sauna – Alle Rechte vorbehalten.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
