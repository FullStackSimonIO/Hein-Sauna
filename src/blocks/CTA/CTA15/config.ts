import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const CTA15: Block = {
  slug: 'cta15',
  labels: {
    singular: 'CTA15 Block',
    plural: 'CTA15 Blöcke',
  },
  interfaceName: 'CTA15',
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
      name: 'media',
      label: 'Hintergrundbild',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default CTA15
