import type { Block } from 'payload'

const Layout425: Block = {
  slug: 'layout425',
  interfaceName: 'Layout425',
  labels: {
    singular: 'Layout 425',
    plural: 'Layout 425',
  },
  fields: [
    {
      name: 'content',
      type: 'group',
      label: 'Inhalt',
      admin: {
        description: 'Hauptinhalt mit Tagline, Überschrift und Beschreibung.',
      },
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Unsere Highlights“',
            description: 'Optionaler kurzer Begriff über der Überschrift.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Galerie“',
            description: 'Hauptüberschrift für diese Sektion.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          required: false,
          admin: {
            placeholder: 'Beschreibe den Inhalt ausführlich.',
            description: 'Ausführlicher Text zur Beschreibung.',
          },
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      label: 'Bilder',
      required: true,
      minRows: 5,
      maxRows: 5,
      admin: {
        description: 'Lade genau 5 Bilder für diese Sektion hoch.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
          admin: {
            description: 'Wähle ein Bild aus der Media-Collection.',
          },
        },
      ],
    },
  ],
}

export default Layout425
