import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Stats2: Block = {
  slug: 'stats2',
  interfaceName: 'Stats2',
  labels: {
    singular: 'Stats Section',
    plural: 'Stats Sections',
  },
  fields: [
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
        maxRows: 2,
      },
    }),
  ],
}

export default Stats2
