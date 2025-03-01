import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout366: Block = {
  slug: 'layout366',
  labels: {
    singular: 'Layout366 Sektion',
    plural: 'Layout366 Sektionen',
  },
  interfaceName: 'Layout366',
  fields: [
    {
      name: 'tag',
      type: 'text',
      label: 'Tagline',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'txt',
      type: 'richText',
      label: 'Text',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
      label: 'Hauptbild',
      required: false,
    },
    {
      name: 'big',
      type: 'group',
      label: 'Hauptkarte',
      fields: [
        { name: 'tag', type: 'text', label: 'Tagline' },
        { name: 'head', type: 'text', label: 'Überschrift', required: true },
        { name: 'desc', type: 'textarea', label: 'Beschreibung' },
        linkGroup({
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
    {
      name: 'small',
      type: 'array',
      label: 'Kleine Karten',
      fields: [
        { name: 'tag', type: 'text', label: 'Tagline' },
        { name: 'head', type: 'text', label: 'Überschrift', required: true },
        { name: 'desc', type: 'textarea', label: 'Beschreibung' },
        {
          name: 'img',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
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

export default Layout366
