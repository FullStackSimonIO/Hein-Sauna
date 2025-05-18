import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Logo4: Block = {
  slug: 'logo4',
  interfaceName: 'Logo4',
  labels: {
    singular: 'Logo Section',
    plural: 'Logo Sections',
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
      name: 'logos',
      type: 'array',
      labels: {
        singular: 'Logo',
        plural: 'Logos',
      },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Image',
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

export default Logo4
