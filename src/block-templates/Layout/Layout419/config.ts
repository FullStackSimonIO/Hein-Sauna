import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const Layout419: Block = {
  slug: 'layout419',
  interfaceName: 'Layout419',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      required: false,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'data',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'img',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'subheading',
          type: 'text',
          required: false,
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
        },
      ],
    },
  ],
}
