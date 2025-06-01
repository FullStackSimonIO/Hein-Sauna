import { Block } from 'payload'

export const Timeline17: Block = {
  slug: 'timeline17',
  interfaceName: 'Timeline17',
  labels: {
    singular: 'Timeline 17',
    plural: 'Timeline 17 Blocks',
  },
  fields: [
    {
      name: 'tagline',
      label: 'Tagline',
      type: 'text',
      required: false,
    },
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      label: 'Subheading',
      type: 'richText', // RichText für flexiblen Text
      required: false,
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Timeline Steps',
      labels: {
        singular: 'Step',
        plural: 'Steps',
      },
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText', // Auch hier RichText
          required: true,
        },
      ],
    },
  ],
}
