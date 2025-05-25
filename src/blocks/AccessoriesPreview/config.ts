// blocks/AccessoryPreviews/config.ts
import type { Block } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const AccessoryPreviews: Block = {
  slug: 'accessoryPreviews',
  labels: {
    singular: 'Zubehör-Preview',
    plural: 'Zubehör-Previews',
  },

  admin: {},
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
    },
    {
      name: 'intro',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Optionaler Text oberhalb der Produkt-Kacheln',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'accessories',
      type: 'array',
      label: 'Ausgewählte Produkte',
      minRows: 1,
      fields: [
        {
          name: 'accessory',
          type: 'relationship',
          relationTo: 'accessories',
          label: 'Produkt',
          /** ganz wichtig: kein hasMany! */
          hasMany: false,
          required: true,
        },
      ],
      admin: {
        description: 'Diese Produkte werden als Kacheln angezeigt',
      },
    },
  ],
}

export default AccessoryPreviews
