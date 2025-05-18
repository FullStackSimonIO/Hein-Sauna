import { Block } from 'payload'

export const Layout425: Block = {
  slug: 'layout425',
  interfaceName: 'Layout425',
  fields: [
    {
      name: 'content',
      type: 'group',
      fields: [
        { name: 'tagline', type: 'text' },
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 5,
      maxRows: 5,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
