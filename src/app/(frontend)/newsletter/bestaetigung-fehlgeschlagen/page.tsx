// src/app/newsletter/bestaetigung-fehlgeschlagen/page.tsx
import Link from 'next/link'

export default function NewsletterFehlerPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-backgroundLight px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-headingDark mb-4">Hoppla, da ging was schief!</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Wir konnten dein Abo leider nicht bestätigen. Bitte prüfe, ob du den Link korrekt
          aufgerufen hast, oder kontaktiere uns unter{' '}
          <a href="mailto:newsletter@hein-sauna.de" className="text-primary underline">
            newsletter@hein-sauna.de
          </a>
          .
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-medium py-2 px-6 rounded-full hover:bg-primary/90 transition"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  )
}
