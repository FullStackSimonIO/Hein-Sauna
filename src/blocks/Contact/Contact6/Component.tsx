'use client'

import { useState } from 'react'
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

import type { Contact6 as Contact6Props } from '@/payload-types'
import RichText from '@/components/RichText'

export const Contact6: React.FC<Contact6Props> = ({
  tagline,
  title,
  richText,
  email,
  phone,
  address,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, topic: value })
  }

  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, identity: value })
  }

  const handleCheckboxChange = (value: boolean) => {
    setFormData({ ...formData, acceptTerms: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  const selectItems = ['First Choice', 'Second Choice', 'Third Choice']
  const radioItems = [
    'First choice',
    'Second choice',
    'Third choice',
    'Fourth choice',
    'Fifth choice',
    'Other',
  ]

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        {/* Left Side */}
        <div>
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <div className="rb-6 mb-6 md:mb-8">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
            {richText && <RichText className="md:text-md" data={richText} />}
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-4 py-2">
            {email && (
              <div className="flex items-center gap-4">
                <BiEnvelope className="size-6 flex-none" />
                <p>{email}</p>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-4">
                <BiPhone className="size-6 flex-none" />
                <p>{phone}</p>
              </div>
            )}
            {address && (
              <div className="flex items-center gap-4">
                <BiMap className="size-6 flex-none" />
                <p>{address}</p>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <SelectField label="Choose a topic" items={selectItems} onChange={handleSelectChange} />
          <RadioField
            label="Which best describes you?"
            items={radioItems}
            onChange={handleRadioChange}
          />

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
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
            <Label htmlFor="terms">
              I accept the{' '}
              <a className="text-link-primary underline" href="#">
                Terms
              </a>
            </Label>
          </div>

          <div>
            <Button type="submit">{button?.title || 'Submit'}</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

/** ✅ Helper Components mit Typen */
type InputFieldProps = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="grid w-full items-center">
    <Label htmlFor={name} className="mb-2">
      {label}
    </Label>
    <Input type={type} id={name} name={name} value={value} onChange={onChange} />
  </div>
)

type SelectFieldProps = {
  label: string
  items: string[]
  onChange: (value: string) => void
}

const SelectField: React.FC<SelectFieldProps> = ({ label, items, onChange }) => (
  <div className="grid w-full items-center">
    <Label className="mb-2">{label}</Label>
    <Select onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select one..." />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, index) => (
          <SelectItem key={index} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
)

type RadioFieldProps = {
  label: string
  items: string[]
  onChange: (value: string) => void
}

const RadioField: React.FC<RadioFieldProps> = ({ label, items, onChange }) => (
  <div className="grid w-full items-center py-3 md:py-4">
    <Label className="mb-3 md:mb-4">{label}</Label>
    <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5" onValueChange={onChange}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem value={item} id={item} />
          <Label htmlFor={item}>{item}</Label>
        </div>
      ))}
    </RadioGroup>
  </div>
)
