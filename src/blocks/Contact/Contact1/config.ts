import { Block } from 'payload'

export const Contact1: Block = {
  slug: 'contact1',
  interfaceName: 'Contact1',
  fields: [
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'button',
      type: 'text',
    },
  ],
}
