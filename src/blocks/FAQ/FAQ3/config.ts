import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const Faq3: Block = {
  slug: 'faq3',
  interfaceName: 'FAQ3',
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
      label: 'Beschreibung',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
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
          label: 'Antwort',
        },
      ],
    },
  ],
}

export default Faq3
