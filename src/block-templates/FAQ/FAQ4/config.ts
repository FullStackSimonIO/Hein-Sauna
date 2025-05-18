import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const FAQ4: Block = {
  slug: 'faq4',
  interfaceName: 'FAQ4',
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
      label: 'Text',
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
      type: 'textarea',
      label: 'Footer Description',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default FAQ4
