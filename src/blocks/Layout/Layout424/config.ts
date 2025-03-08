import { Block } from 'payload'

export const Layout424: Block = {
  slug: 'layout424',
  interfaceName: 'Layout424',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: false,
    },
    {
      name: 'headings',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
