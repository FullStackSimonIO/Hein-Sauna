// src/payload/blocks/Layout29/config.ts

import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const Layout29: Block = {
  slug: 'layout29',
  labels: {
    singular: 'Layout 29',
    plural: 'Layouts 29',
  },
  interfaceName: 'Layout29',
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      fields: [
        {
          name: 'media',
          type: 'upload',
          label: 'Feature-Media',
          relationTo: 'media', // Name der Collection, in der Deine Bilder/Videos liegen
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          required: true,
        },
      ],
    },
    linkGroup({}),
    {
      name: 'media',
      type: 'upload',
      label: 'Haupt-Media',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default Layout29
