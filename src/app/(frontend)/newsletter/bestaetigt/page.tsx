// src/app/newsletter/bestaetigt/page.tsx
import Link from 'next/link'

export default function NewsletterBestätigtPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-backgroundLight px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-headingDark mb-4">Danke & willkommen!</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Dein Newsletter-Abonnement bei <strong>Hein Sauna</strong> wurde erfolgreich bestätigt.
          Schon bald erhältst du erste Neuigkeiten zu Aktionen, Angeboten und spannenden Inhalten
          direkt in dein Postfach.
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
