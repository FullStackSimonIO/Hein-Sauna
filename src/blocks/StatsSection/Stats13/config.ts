import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const Stats13: Block = {
  slug: 'stats13',
  interfaceName: 'Stats13',
  labels: {
    singular: 'Stats Section',
    plural: 'Stats Sections',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      label: 'Statistics',
      labels: {
        singular: 'Stat',
        plural: 'Stats',
      },
      fields: [
        {
          name: 'percentage',
          type: 'text',
          required: true,
          label: 'Percentage',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Stat Heading',
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 3,
      },
    }),
  ],
}
