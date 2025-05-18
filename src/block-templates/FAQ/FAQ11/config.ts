import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const Faq11: Block = {
  slug: 'faq11',
  interfaceName: 'FAQ11',
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
          label: 'Frage',
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

export default Faq11
