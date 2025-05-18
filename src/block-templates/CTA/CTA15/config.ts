// src/blocks/cta/CTA15/config.ts
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
  interfaceName: 'CTA15',
  labels: {
    singular: 'CTA 15',
    plural: 'CTA 15',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Jetzt entdecken!“',
        description: 'Kurze, prägnante Überschrift für den CTA.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Fließtext',
      required: false,
      admin: {
        description:
          'Optionaler erläuternder Text unterhalb der Überschrift. Unterstützt Fettschrift, Listen, Links etc.',
      },
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
      label: 'Hintergrundbild',
      required: true,
      admin: {
        description:
          'Wähle ein Bild oder eine Grafik für den Hintergrund aus der Media-Collection.',
      },
    },
  ],
}

export default CTA15
