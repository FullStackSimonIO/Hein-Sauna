import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout414: Block = {
  slug: 'layout414',
  labels: {
    singular: 'Layout414 Sektion',
    plural: 'Layout414 Sektionen',
  },
  interfaceName: 'Layout414',
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
      name: 'imagesPartOne',
      type: 'array',
      label: 'Bildreihe 1',
      required: false,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
        },
      ],
    },
    {
      name: 'imagesPartTwo',
      type: 'array',
      label: 'Bildreihe 2',
      required: false,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
        },
      ],
    },
  ],
}

export default Layout414
