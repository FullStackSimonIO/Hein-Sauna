import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Portfolio17: Block = {
  slug: 'portfolio',
  interfaceName: 'Portfolio',
  labels: {
    singular: 'Portfolio',
    plural: 'Portfolio',
  },
  fields: [
    {
      name: 'projects',
      type: 'array',
      required: true,
      label: 'Projects',
      labels: {
        singular: 'Project',
        plural: 'Projects',
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
        {
          name: 'button',
          type: 'group',
          label: 'Button',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Button Title',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'Button URL',
            },
          ],
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

export default Portfolio17
