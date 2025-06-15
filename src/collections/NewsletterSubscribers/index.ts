// src/collections/NewsletterSubscribers.ts
import { CollectionConfig } from 'payload'

const NewsletterSubscribers: CollectionConfig = {
  slug: 'newsletter-subscribers',
  labels: {
    singular: 'Newsletter Abonnent',
    plural: 'Newsletter Abonnenten',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'createdAt', 'confirmed'],
  },
  access: {
    read: () => true, // im Admin sichtbar, öffentlich nicht abrufbar
    create: () => true, // jeder darf sich anmelden
    update: () => false, // weder Abonnent noch Dritte dürfen Fields manuell ändern
    delete: () => true, // schützen, damit Einträge nicht gelöscht werden
  },

  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      label: 'E-Mail-Adresse',
    },
    {
      name: 'confirmationToken',
      type: 'text',
      required: true,
      label: 'Opt-In Token',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: 'confirmed',
      type: 'checkbox',
      label: 'Opt-In bestätigt',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'confirmedAt',
      type: 'date',
      label: 'Bestätigt am',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      label: 'IP-Adresse',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Anmeldedatum',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayOnly' },
        readOnly: true,
      },
      defaultValue: () => new Date().toISOString(),
    },
  ],
}

export default NewsletterSubscribers
