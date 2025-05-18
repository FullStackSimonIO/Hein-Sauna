import type { Block } from 'payload'

export const CTA38: Block = {
  slug: 'cta38',
  labels: {
    singular: 'CTA38 Block',
    plural: 'CTA38 Blöcke',
  },
  interfaceName: 'CTA38',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
    },
    {
      name: 'hoverLinks',
      type: 'array',
      label: 'Hover Links',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
        {
          name: 'listNumber',
          type: 'text',
          label: 'Nummerierung',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Verbindung zur Media Collection
          label: 'Hover Bild',
          required: true,
        },
      ],
    },
  ],
}

export default CTA38
