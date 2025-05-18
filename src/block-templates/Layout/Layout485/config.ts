import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const Layout485: Block = {
  slug: 'layout485',
  interfaceName: 'Layout485',
  fields: [
    {
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'number',
          type: 'number',
          required: true,
        },
        {
          name: 'tagline',
          type: 'text',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
        },
        linkGroup({
          overrides: {
            maxRows: 3,
          },
        }),
      ],
    },
  ],
}
