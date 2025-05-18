import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const FAQ7: Block = {
  slug: 'faq7',
  interfaceName: 'FAQ7',
  labels: {
    singular: 'FAQ 7 Block',
    plural: 'FAQ 7 Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'headingDescription',
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
          name: 'question',
          type: 'text',
          required: true,
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'richText',
          label: 'Text',
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
      label: 'Text',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default FAQ7
