import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Layout351: Block = {
  slug: 'layout351',
  labels: {
    singular: 'Layout 351',
    plural: 'Layouts 351',
  },
  interfaceName: 'Layout351',
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
      label: 'Features',
      required: true,
      fields: [
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
          label: 'Bild oder Video',
          required: false,
        },
      ],
    },
  ],
}

export default Layout351
