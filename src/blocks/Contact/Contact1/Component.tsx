'use client'

import { Button, Checkbox, Input, Label, Textarea } from '@relume_io/relume-ui'
import React, { useState } from 'react'
import type { LayoutContact1 as Contact1Props } from '@/payload-types'
import RichText from '@/components/RichText'

export const Contact1: React.FC<Contact1Props> = ({ tagline, heading, description, button }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleCheckboxChange = (checked: boolean | 'indeterminate') => {
    setFormData((prev) => ({ ...prev, acceptTerms: checked === true }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Message saved successfully!')
        setFormData({
          name: '',
          email: '',
          message: '',
          acceptTerms: false,
        })
      } else {
        console.error('Error saving message:', await response.text())
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          {heading && (
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          )}
          {description && <RichText className="md:text-md" data={description} />}
        </div>
        <form className="mx-auto grid w-full max-w-md grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input type="text" id="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input type="email" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox
              id="terms"
              checked={formData.acceptTerms}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the{' '}
              <a className="text-link-primary underline" href="#">
                Terms
              </a>
            </Label>
          </div>
          <div className="text-center">{button && <Button type="submit">{button}</Button>}</div>
        </form>
      </div>
    </section>
  )
}
