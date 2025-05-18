import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout493: Block = {
  slug: 'layout493',
  labels: {
    singular: 'Layout493 Sektion',
    plural: 'Layout493 Sektionen',
  },
  interfaceName: 'Layout493',
  fields: [
    {
      name: 'tagline',
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
      name: 'richText',
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
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      required: true,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Tab Titel',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Tab Beschreibung',
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
          label: 'Tab Bild oder Video',
          required: false,
        },
      ],
    },
  ],
}

export default Layout493
