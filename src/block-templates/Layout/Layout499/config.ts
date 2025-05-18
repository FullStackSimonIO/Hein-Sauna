import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout499: Block = {
  slug: 'layout499',
  labels: {
    singular: 'Layout499 Sektion',
    plural: 'Layout499 Sektionen',
  },
  interfaceName: 'Layout499',
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
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      required: true,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Tab-Wert',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Tab Titel',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Tab Beschreibung',
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
          label: 'Tab Bild oder Video',
          required: false,
        },
      ],
    },
  ],
}

export default Layout499
