import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout349: Block = {
  slug: 'layout349',
  labels: {
    singular: 'Layout349 Sektion',
    plural: 'Layout349 Sektionen',
  },
  interfaceName: 'Layout349',
  fields: [
    {
      name: 'contents',
      type: 'array',
      label: 'Inhalte',
      required: true,
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
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
              HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
        linkGroup({
          overrides: {
            maxRows: 3,
          },
        }),
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

export default Layout349
