import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout353: Block = {
  slug: 'layout353',
  labels: {
    singular: 'Layout353 Sektion',
    plural: 'Layout353 Sektionen',
  },
  interfaceName: 'Layout353',
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
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'featureSections',
      type: 'array',
      label: 'Feature-Sektionen',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature Titel',
          required: true,
        },
        {
          name: 'description',
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
      ],
    },
  ],
}

export default Layout353
