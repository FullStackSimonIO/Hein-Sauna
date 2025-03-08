import { Block } from 'payload'

const Stats23: Block = {
  slug: 'stats23',
  interfaceName: 'Stats23',
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
      name: 'defaultTabValue',
      type: 'text',
      required: true,
      label: 'Default Tab Value',
    },
    {
      name: 'tabs',
      type: 'array',
      required: true,
      label: 'Tabs',
      labels: {
        singular: 'Tab',
        plural: 'Tabs',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Tab Value (Unique)',
        },
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
        {
          name: 'description',
          type: 'richText',
          label: 'Tab Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Image',
        },
      ],
    },
  ],
}

export default Stats23
