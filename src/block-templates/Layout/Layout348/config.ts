import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout348: Block = {
  slug: 'layout348',
  labels: {
    singular: 'Layout348 Sektion',
    plural: 'Layout348 Sektionen',
  },
  interfaceName: 'Layout348',
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
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
        },
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

export default Layout348
