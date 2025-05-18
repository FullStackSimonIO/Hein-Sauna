import type { Block } from 'payload'

export const CTA38: Block = {
  slug: 'cta38',
  interfaceName: 'CTA38',
  labels: {
    singular: 'CTA 38',
    plural: 'CTA 38',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Top 5 Features“',
        description: 'Kurze, prägnante Tagline als Einleitung für die Hover-Links.',
      },
    },
    {
      name: 'hoverLinks',
      type: 'array',
      label: 'Hover Links',
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Füge 1–5 Einträge hinzu, die beim Überfahren angezeigt werden.',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            placeholder: 'https://example.com',
            description: 'Zieladresse des Links mit vollständigem Protokoll.',
          },
        },
        {
          name: 'listNumber',
          type: 'text',
          label: 'Nummerierung',
          required: true,
          admin: {
            placeholder: '01, 02, …',
            description: 'Zweistellige Nummer für die Reihenfolge, z. B. „01“.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'Feature-Name',
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
            description: 'Wähle ein Bild aus der Media-Collection für den Hover-Effekt.',
          },
        },
      ],
    },
  ],
}

export default CTA38
