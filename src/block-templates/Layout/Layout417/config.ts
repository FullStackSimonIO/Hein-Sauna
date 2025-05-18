import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout417: Block = {
  slug: 'layout417',
  labels: {
    singular: 'Layout417 Sektion',
    plural: 'Layout417 Sektionen',
  },
  interfaceName: 'Layout417',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'featureSections',
      type: 'array',
      label: 'Feature-Sektionen',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature-Titel',
          required: true,
        },
        {
          name: 'richText',
          type: 'richText',
          label: 'Feature-Beschreibung',
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
          label: 'Feature Bild/Video',
          required: false,
        },
      ],
    },
  ],
}

export default Layout417
