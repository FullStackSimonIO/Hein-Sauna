// blocks/CategoryPreview/config.ts
import type { Block } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const CategoryPreviews: Block = {
  slug: 'categoryPreviews',
  labels: {
    singular: 'Kategorie-Previews',
    plural: 'Kategorie-Previews',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: false,
    },
    {
      name: 'intro',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Optionaler Text oberhalb der Kachel-Grid',
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
      name: 'categories',
      type: 'array',
      label: 'Ausgewählte Kategorien',
      minRows: 1,
      fields: [
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'categories',
          label: 'Kategorie',
          hasMany: true,
          required: true,
          admin: {
            description: 'Wähle eine Sauna-Kategorie aus',
          },
        },
      ],
      admin: {
        description: 'Die ausgewählten Kategorien werden als Kacheln angezeigt',
      },
    },
  ],
}

export default CategoryPreviews
