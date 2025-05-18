import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const Faq14: Block = {
  slug: 'faq14',
  interfaceName: 'FAQ14',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
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
      name: 'questions',
      type: 'array',
      required: true,
      labels: {
        singular: 'Question',
        plural: 'Questions',
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          options: [
            { label: 'Star', value: 'star' },
            { label: 'Check Circle', value: 'check' },
            { label: 'Question Circle', value: 'question' },
            { label: 'Lightbulb', value: 'lightbulb' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'richText',
          label: 'Antwort',
        },
      ],
    },
    {
      name: 'footerHeading',
      type: 'text',
      label: 'Footer Heading',
    },
    {
      name: 'footerDescription',
      type: 'richText',
      label: 'Antwort',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default Faq14
