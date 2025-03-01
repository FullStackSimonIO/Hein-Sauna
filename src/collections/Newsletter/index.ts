import { CollectionConfig } from 'payload'

export const NewsletterSubscribers: CollectionConfig = {
  slug: 'newsletter-subscribers',
  labels: {
    singular: 'Newsletter-Abonnent',
    plural: 'Newsletter-Abonnenten',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'createdAt', 'confirmed'],
  },
  access: {
    read: () => true, // Jeder kann die Einträge lesen (z. B. für Statistiken)
    create: () => true, // Jeder darf sich anmelden
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
      name: 'confirmed',
      type: 'checkbox',
      label: 'Bestätigt',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
      defaultValue: () => new Date().toISOString(),
    },
  ],
}

export default NewsletterSubscribers
