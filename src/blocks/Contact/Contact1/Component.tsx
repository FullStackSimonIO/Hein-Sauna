'use client'

import React, { useState } from 'react'
import { Input, Label, Textarea, Checkbox, Button } from '@relume_io/relume-ui'
import RichText from '@/components/RichText'
import type { LayoutContact1 as Contact1Props } from '@/payload-types'

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
      setFormData({ name: '', email: '', message: '', acceptTerms: false })
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err.message || 'Beim Senden ist ein Fehler aufgetreten.')
    }
  }

  return (
    <section id="contact1" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg">
        {/* Intro */}
        <div className="text-center mb-12">
          {tagline && <p className="mb-3 font-semibold">{tagline}</p>}
          {heading && <h2 className="mb-5 text-5xl font-bold">{heading}</h2>}
          {description && (
            <RichText data={description} className="mb-6 text-gray-700" enableGutter={false} />
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto grid max-w-md gap-6">
          {/* Name */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={formData.name} onChange={handleChange} required />
          </div>
          {/* Email */}
          <div>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Nachricht */}
          <div>
            <Label htmlFor="message">Nachricht</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[8rem]"
              required
            />
          </div>
          {/* Datenschutz */}
          <div className="flex items-center space-x-2 text-sm">
            <Checkbox
              id="terms"
              checked={formData.acceptTerms}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="terms">
              Ich akzeptiere die{' '}
              <a
                href="/datenschutz"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-600"
              >
                Datenschutzbestimmungen
              </a>
            </Label>
          </div>
          {/* Senden */}
          <div className="text-center">
            <Button type="submit" disabled={status === 'loading'} className="relative">
              {status === 'loading' && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25 stroke-current"
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75 fill-current"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                </span>
              )}
              {status === 'loading' ? 'Sende…' : button?.title}
            </Button>
            {status === 'error' && <p className="mt-2 text-sm text-red-600">{errorMessage}</p>}
            {status === 'success' && (
              <p className="mt-2 text-sm text-green-600">
                Deine Nachricht wurde erfolgreich versendet!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact1
