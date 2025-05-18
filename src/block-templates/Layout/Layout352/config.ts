import type { Block } from 'payload'

import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

export const Layout352: Block = {
  slug: 'layout352',
  labels: {
    singular: 'Layout 352 Sektion',
    plural: 'Layout 352 Sektionen',
  },
  interfaceName: 'Layout352',
  fields: [
    {
      name: 'content',
      type: 'group',
      label: 'Feature Inhalt',
      fields: [
        { name: 'tagline', type: 'text', label: 'Tagline', required: false },
        { name: 'heading', type: 'text', label: 'Überschrift', required: true },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
        linkGroup({ overrides: { maxRows: 2 } }),
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Timeline Einträge',
      required: true,
      fields: [
        { name: 'date', type: 'text', label: 'Datum', required: true },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Feature Bild',
          required: false,
        },
        linkGroup({
          overrides: {
            maxRows: 3,
          },
        }),
      ],
    },
  ],
}
