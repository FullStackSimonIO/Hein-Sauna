'use client'

import React, { useState } from 'react'
import { Input, Label, Textarea, Checkbox, Button } from '@relume_io/relume-ui'
import RichText from '@/components/RichText'
import type { Contact1 as Contact1Props } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

export const Contact1: React.FC<Contact1Props> = ({ tagline, heading, description, button }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleCheckboxChange = (checked: boolean | 'indeterminate') => {
    setFormData((prev) => ({ ...prev, acceptTerms: checked === true }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Server-Fehler')
      }
      setStatus('success')
      toast.success('Danke, wir melden uns schnellstmöglich!', {
        description: 'Wir haben deine Nachricht erhalten und melden uns in Kürze bei dir.',
      })
      setFormData({ name: '', email: '', message: '', acceptTerms: false })
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err.message || 'Fehler beim Senden. Bitte versuche es später.')
      toast.error('Ups, etwas ist schiefgelaufen.')
    }
  }

  return (
    <section id="contact1" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg">
        {/* Intro */}
        <div className="text-center mb-12">
          {tagline && (
            <Badge className="font-semibold mb-3 md:mb-4 bg-accent text-background">
              {tagline}
            </Badge>
          )}
          {heading && <h2 className="mb-5 text-5xl font-bold">{heading}</h2>}
          {description && (
            <RichText data={description} className="mb-6 text-gray-700" enableGutter={false} />
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto grid max-w-md gap-6">
          {/* Name */}
          <div>
            <Label className="font-semibold" htmlFor="name">
              Name:
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="overflow-hidden rounded-xl"
            />
          </div>
          {/* Email */}
          <div>
            <Label className="font-semibold" htmlFor="email">
              E-Mail:
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl overflow-hidden"
            />
          </div>
          {/* Nachricht */}
          <div>
            <Label className="font-semibold" htmlFor="message">
              Nachricht:
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[8rem] rounded-xl overflow-hidden"
              required
            />
          </div>
          {/* Datenschutz */}
          <div className="flex items-center space-x-2 text-sm">
            <Checkbox
              id="terms"
              checked={formData.acceptTerms}
              onCheckedChange={handleCheckboxChange}
              className="data-[state=checked]:bg-accent data-[state=checked]:border-accent text-accent"
            />
            <Label htmlFor="terms">
              Ich akzeptiere die{' '}
              <a
                href="/datenschutzrichtlinie"
                target="_blank"
                rel="noreferrer"
                className="underline text-accent font-semibold"
              >
                Datenschutzbestimmungen
              </a>
            </Label>
          </div>
          {/* Submit */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={status === 'loading'}
              className={`
                relative inline-flex items-center justify-center px-8 py-3 border-2 border-accent 
                text-accent font-medium rounded-lg overflow-hidden transition-colors duration-300
                ${status !== 'loading' ? 'hover:bg-accent hover:text-white' : ''}
              `}
            >
              {status === 'loading' && (
                <svg
                  className="absolute left-4 h-5 w-5 animate-spin text-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                  />
                  <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    className="opacity-75"
                  />
                </svg>
              )}
              <span className="relative">
                {status === 'loading' ? 'Senden…' : button?.title || 'Senden'}
              </span>
            </Button>
            {status === 'error' && <p className="mt-2 text-sm text-red-600">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact1
