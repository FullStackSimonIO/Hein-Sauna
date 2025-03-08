import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const FAQ1: Block = {
  slug: 'faq1',
  interfaceName: 'FAQ1',
  labels: {
    singular: 'FAQ 7 Block',
    plural: 'FAQ 7 Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
    },
    {
      name: 'questions',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'richText',
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

export default FAQ1
