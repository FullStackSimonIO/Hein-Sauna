import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const CTA25: Block = {
  slug: 'cta25',
  interfaceName: 'CTA25',
  labels: {
    singular: 'CTA 25',
    plural: 'CTA 25',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Call To Action Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Jetzt starten!“',
        description: 'Kurze, prägnante Überschrift für den CTA.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Call To Action Text',
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
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default CTA25
