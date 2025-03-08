import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Logo3: Block = {
  slug: 'logo3',
  interfaceName: 'Logo3',
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

export default Logo3
