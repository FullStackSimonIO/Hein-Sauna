import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout423: Block = {
  slug: 'layout423',
  labels: {
    singular: 'Layout423 Sektion',
    plural: 'Layout423 Sektionen',
  },
  interfaceName: 'Layout423',
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
      label: 'Überschrift',
      required: true,
    },
    {
      name: 'richText',
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
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Feature Tagline',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Feature Überschrift',
          required: true,
        },
        {
          name: 'richText',
          type: 'richText',
          label: 'Feature Beschreibung',
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
          label: 'Feature Bild oder Video',
          required: false,
        },
        linkGroup({
          overrides: {
            maxRows: 1,
          },
        }),
      ],
    },
  ],
}

export default Layout423
