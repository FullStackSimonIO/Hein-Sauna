// @ts-nocheck
'use client'

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  RadioGroup,
  RadioGroupItem,
  Input,
  Label,
  Checkbox,
  Textarea,
  Button,
} from '@relume_io/relume-ui'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import RichText from '@/components/RichText'
import type { Contact6 as Contact6Props } from '@/payload-types'

export const Contact6: React.FC<Contact6Props> = ({
  tagline,
  title,
  richText,
  email,
  phone,
  address,
  topics,
  identities,
  button,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    identity: '',
    message: '',
    acceptTerms: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, topic: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, identity: value }))
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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        identity: '',
        message: '',
        acceptTerms: false,
      })
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err.message || 'Beim Senden ist ein Fehler aufgetreten.')
    }
  }

  const selectItems = topics?.map((t) => t.value) ?? []
  const radioItems = identities?.map((i) => i.value) ?? []

  return (
    <section id="contact6" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        {/* Left */}
        <div>
          {tagline && <p className="mb-3 font-semibold">{tagline}</p>}
          {title && <h2 className="mb-5 text-5xl font-bold">{title}</h2>}
          {richText && <RichText data={richText} className="mb-6 text-gray-700" />}
          <div className="space-y-4">
            {email && (
              <div className="flex items-center gap-4">
                <BiEnvelope className="w-6 h-6" />
                <p>{email}</p>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-4">
                <BiPhone className="w-6 h-6" />
                <p>{phone}</p>
              </div>
            )}
            {address && (
              <div className="flex items-center gap-4">
                <BiMap className="w-6 h-6" />
                <p>{address}</p>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">Vorname</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Nachname</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Thema */}
          <div>
            <Label className="mb-2">Thema</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Wähle ein Thema…" />
              </SelectTrigger>
              <SelectContent>
                {selectItems.map((item, i) => (
                  <SelectItem key={i} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Identität */}
          <div>
            <Label className="mb-2">Ich bin</Label>
            <RadioGroup onValueChange={handleRadioChange} className="space-y-2">
              {radioItems.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <RadioGroupItem id={item} value={item} />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="message">Nachricht</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[8rem]"
              required
            />
          </div>

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

          <div className="text-center">
            <Button type="submit" disabled={status === 'loading'} className="relative">
              {status === 'loading' ? (
                <>
                  <span className="absolute inset-y-0 left-3 flex items-center">
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
                  Sende…
                </>
              ) : (
                button?.title
              )}
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

export default Contact6
