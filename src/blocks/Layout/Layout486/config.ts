import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout486: Block = {
  slug: 'layout486',
  labels: {
    singular: 'Layout486 Sektion',
    plural: 'Layout486 Sektionen',
  },
  interfaceName: 'Layout486',
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: false,
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
            maxRows: 2,
          },
        }),
      ],
    },
  ],
}

export default Layout486
