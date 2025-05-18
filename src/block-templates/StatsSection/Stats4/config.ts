import { Block } from 'payload'

export const Stats4: Block = {
  slug: 'stats4',
  interfaceName: 'Stats4',
  labels: {
    singular: 'Stats 4',
    plural: 'Stats 4',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'stats',
      label: 'Stats',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'percentage',
          label: 'Percentage',
          type: 'text',
          required: true,
        },
        {
          name: 'heading',
          label: 'Heading',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
