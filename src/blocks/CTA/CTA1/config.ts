// blocks/CTA/CTA1/config.ts
import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CTA1: Block = {
  slug: 'cta1',
  labels: {
    singular: 'Call to Action (CTA1)',
    plural: 'CTAs',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      admin: {
        description: 'Optionaler Fließtext unter der Überschrift',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild',
      admin: {
        description: 'Wird rechts neben dem Text dargestellt',
      },
    },

    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default CTA1
