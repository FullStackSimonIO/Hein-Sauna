import { Block } from 'payload/'
import { linkGroup } from '@/fields/linkGroup'

const Logo1: Block = {
  slug: 'logo1',
  interfaceName: 'Logo1',
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

export default Logo1
