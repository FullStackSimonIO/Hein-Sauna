import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout422: Block = {
  slug: 'layout422',
  labels: {
    singular: 'Layout422 Sektion',
    plural: 'Layout422 Sektionen',
  },
  interfaceName: 'Layout422',
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
    {
      name: 'features',
      type: 'array',
      label: 'Feature Elemente',
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
          name: 'description',
          type: 'textarea',
          label: 'Feature Beschreibung',
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Feature Bild',
          required: false,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Feature URL',
          required: false,
        },
      ],
    },
  ],
}

export default Layout422
