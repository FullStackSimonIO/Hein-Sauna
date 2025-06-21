import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout1: Block = {
  slug: 'layout1',
  labels: {
    singular: 'Layout 1',
    plural: 'Layout1 1',
  },
  interfaceName: 'Layout1',
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
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
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
}
