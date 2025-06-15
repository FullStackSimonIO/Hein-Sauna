import { linkGroup } from '@/fields/linkGroup'
import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
    // update: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // Logo wird in der Mediathek gespeichert
      label: 'Logo',
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigationslinks',
      labels: {
        singular: 'Navigationsgruppe',
        plural: 'Navigationsgruppen',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel der Gruppe',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          minRows: 1,
          fields: [
            {
              name: 'customTitle', // <-- Neuer Name für den Link
              type: 'text',
              label: 'Benutzerdefinierter Link-Name',
              required: false, // Optional, falls leer, dann wird der Page-Titel genutzt
            },
            {
              name: 'link',
              type: 'relationship',
              relationTo: 'pages',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      labels: {
        singular: 'Social Media Link',
        plural: 'Social Media Links',
      },
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Plattform',
          options: ['Facebook', 'Instagram', 'X', 'LinkedIn', 'YouTube'],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
      ],
    },
  ],
}
