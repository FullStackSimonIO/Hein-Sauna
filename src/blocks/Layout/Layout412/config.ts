import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const Layout412: Block = {
  slug: 'layout412',
  interfaceName: 'Layout412',
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
      name: 'txt',
      type: 'richText',
      required: false,
    },
    {
      name: 'subHeadings',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
        },
      ],
    },
    {
      name: 'big',
      type: 'group',
      fields: [
        linkGroup({
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
