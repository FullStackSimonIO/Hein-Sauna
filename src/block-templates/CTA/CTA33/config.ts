import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const CTA33: Block = {
  slug: 'cta33',
  labels: {
    singular: 'CTA33 Block',
    plural: 'CTA33 Blöcke',
  },
  interfaceName: 'CTA33',
  fields: [
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
      overrides: { maxRows: 3 },
    }),
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Bild',
          required: true,
        },
      ],
    },
  ],
}

export default CTA33
