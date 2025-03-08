import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const Contact24: Block = {
  slug: 'contact24',
  interfaceName: 'Contact24',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: false,
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      required: false,
    },
    {
      name: 'contacts',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'iconType',
          type: 'select',
          required: true,
          options: [
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
            { label: 'Address', value: 'address' },
            { label: 'Message', value: 'message' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
        },
        linkGroup({
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
}
