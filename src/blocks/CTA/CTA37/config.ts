import type { Block } from 'payload'

export const CTA37: Block = {
  slug: 'cta37',
  labels: {
    singular: 'CTA37 Block',
    plural: 'CTA37 Blöcke',
  },
  interfaceName: 'CTA37',
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
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Verknüpfung zur Media Collection
          label: 'Hover Bild',
          required: true,
        },
      ],
    },
  ],
}

export default CTA37
