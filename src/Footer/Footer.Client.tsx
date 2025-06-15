'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'

import type { Footer as FooterType } from '@/payload-types'
import Image from 'next/image'
import { oleoScriptSwash } from '@/fonts/fonts'

interface FooterProps {
  footerData: FooterType
}

export default function FooterClient({ footerData }: FooterProps) {
  const navItems = footerData?.navItems || []
  const socialLinks = footerData?.socialLinks || []
  const logo = footerData?.logo

  return (
    <footer
      id="footer"
      className={`px-[5%] py-12 md:py-18 lg:py-20 border-t border-border bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark `}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr] gap-x-[8vw] gap-y-12 pb-12 md:pb-18 lg:pb-20">
          {/* Newsletter & Logo */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex justify-center items-center gap-3 text-xl md:text-2xl lg:text-3xl cursor-pointer pb-24"
            >
              {logo && typeof logo === 'object' && 'url' in logo ? (
                <Image
                  src={logo.url || ''} // Die URL aus dem Payload-Objekt nehmen
                  alt="Logo"
                  width={200}
                  height={50}
                  priority
                />
              ) : (
                <span className="text-white font-bold">Hein Sauna</span>
              )}
            </Link>

            <p className="mb-5 md:mb-6">
              Abonnieren Sie unseren Newsletter, um über Neuigkeiten und Funktionen informiert zu
              bleiben.
            </p>
            <NewsletterForm />
          </div>

          {/* Navigation & Social Media */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            {navItems.length > 0 ? (
              navItems.map((group, i) => (
                <div key={i} className="flex flex-col items-start">
                  <p className="mb-3 font-semibold md:mb-4 text-sm text-headingDark uppercase tracking-wide">
                    {group.title}
                  </p>
                  <ul className="space-y-2">
                    {(group.links || []).map((linkItem, index) => {
                      const page = linkItem.link
                      const customTitle = linkItem.customTitle
                      if (!page) return null
                      return (
                        <li key={index}>
                          {typeof page === 'object' && 'slug' in page ? (
                            <Link
                              href={`/${page.slug}`}
                              className="hover:text-accent transition-colors duration-200 text-sm"
                            >
                              {customTitle}
                            </Link>
                          ) : null}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Keine Navigationsgruppen verfügbar.</p>
            )}

            {/* Social Media Links */}
            <div className="flex flex-col items-start">
              <p className={`mb-3 font-semibold md:mb-4 text-headingDark `}>Folge uns!</p>
              <ul className="flex flex-col items-start">
                {socialLinks.map(({ platform, url }, i) => (
                  <li key={i} className={`py-2 {merriweather.variable} `}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {getSocialIcon(platform)}
                      <span>{platform}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="h-px w-full bg-gray-300 " />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-6 md:mt-0">© 2025 Hein Sauna. Alle Rechte vorbehalten.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <Link href="/datenschutzverordnung">Datenschutzerklärung</Link>
            </li>
            <li className="underline">
              <Link href="/impressum">Impresssum</Link>
            </li>
          </ul>
        </div>
        {/* Backlink */}
        <div className="pt-6 text-center text-xs text-muted-foreground">
          Mit ❤️ entwickelt von{' '}
          <Link
            href="https://fullstack-factory.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            Fullstack Factory
          </Link>
        </div>
      </div>
    </footer>
  )
}

/* Newsletter-Formular */
const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.ok) {
      alert('Bitte bestätigen Sie Ihre Anmeldung per E-Mail.')
    } else {
      alert('Fehler bei der Anmeldung.')
    }
  }

  return (
    <form
      className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
      onSubmit={handleSubmit}
    >
      <input
        id="email"
        type="email"
        placeholder="Geben Sie Ihre E-Mail ein"
        value={email}
        onChange={handleSetEmail}
        className="border border-gray-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-accent text-heading px-4 py-2 rounded-2xl hover:bg-primaryHover"
      >
        Abonnieren
      </button>
      <p className="mt-2 text-xs text-gray-500">
        Mit der Anmeldung erklären Sie sich mit unserer Datenschutzerklärung einverstanden. Die
        Anmeldung erfolgt im Double-Opt-In-Verfahren.
      </p>
    </form>
  )
}

/* Social Media Icons */
const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'Facebook':
      return <BiLogoFacebookCircle className="size-6" />
    case 'Instagram':
      return <BiLogoInstagram className="size-6" />
    case 'X':
      return <FaXTwitter className="size-6 p-0.5" />
    case 'LinkedIn':
      return <BiLogoLinkedinSquare className="size-6" />
    case 'YouTube':
      return <BiLogoYoutube className="size-6" />
    default:
      return null
  }
}
