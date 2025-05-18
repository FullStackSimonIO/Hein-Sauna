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
  interfaceName: 'CTA33',
  labels: {
    singular: 'CTA 33',
    plural: 'CTA 33',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Jetzt herunterladen!“',
        description: 'Kurze, prägnante Überschrift für den CTA.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Optionaler erläuternder Text. Unterstützt Fettschrift, Listen, Links etc.',
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
      overrides: { maxRows: 3 },
    }),
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      minRows: 1,
      maxRows: 10,
      admin: {
        description: 'Optional: Eine oder mehrere Firmen- oder Partner-Logos.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Bild',
          required: true,
          admin: {
            description: 'Wähle ein Logo aus der Media-Collection.',
          },
        },
      ],
    },
  ],
}

export default CTA33
