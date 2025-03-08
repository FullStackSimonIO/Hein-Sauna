import { Block } from 'payload'

export const Contact6: Block = {
  slug: 'contact6',
  interfaceName: 'Contact6',
  fields: [
    { name: 'tagline', type: 'text', required: false },
    { name: 'title', type: 'text', required: true },
    { name: 'richText', type: 'richText', required: false },
    { name: 'email', type: 'email', required: false },
    { name: 'phone', type: 'text', required: false },
    { name: 'address', type: 'text', required: false },
    { name: 'button', type: 'group', fields: [{ name: 'title', type: 'text', required: false }] },
  ],
}
