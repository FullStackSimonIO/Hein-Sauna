import type { Block } from 'payload'

export const CTA37: Block = {
  slug: 'cta37',
  interfaceName: 'CTA37',
  labels: {
    singular: 'CTA 37',
    plural: 'CTA 37',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Highlights“',
        description: 'Kurze, prägnante Tagline, die den CTA einleitet.',
      },
    },
    {
      name: 'hoverLinks',
      type: 'array',
      label: 'Hover Links',
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Füge 1–5 Hover-Links hinzu, die beim Überfahren angezeigt werden.',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            placeholder: 'https://example.com',
            description: 'Zieladresse des Links inkl. Protokoll (https://).',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'Link-Überschrift',
            description: 'Kurztext, der den Link beschreibt.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Hover Bild',
          required: true,
          admin: {
            description: 'Wähle ein Bild aus, das beim Hover angezeigt wird.',
          },
        },
      ],
    },
  ],
}

export default CTA37
