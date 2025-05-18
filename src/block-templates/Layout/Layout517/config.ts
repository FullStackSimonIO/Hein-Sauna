import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

export const Layout517: Block = {
  slug: 'layout517',
  interfaceName: 'Layout517',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
