import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout422: Block = {
  slug: 'layout422',
  interfaceName: 'Layout422',
  labels: {
    singular: 'Layout 422',
    plural: 'Layout 422',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Was uns auszeichnet“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Top-Features“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Optionaler Fließtext. Unterstützt Fettschrift, Listen, Links etc.',
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
    {
      name: 'features',
      type: 'array',
      label: 'Feature Elemente',
      required: true,
      minRows: 1,
      admin: {
        description: 'Erstelle mindestens ein Feature mit Titel, Beschreibung, Medien und URL.',
      },
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Feature Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Neu“',
            description: 'Optionaler kurzer Begriff über dem Feature.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Feature Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Echtzeit-Analytics“',
            description: 'Titel dieses Features.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Feature Beschreibung',
          required: false,
          admin: {
            placeholder: 'Beschreibe dieses Feature.',
            description: 'Ausführliche Beschreibung des Features.',
          },
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Feature Bild',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung des Features.',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: 'Feature URL',
          required: false,
          admin: {
            placeholder: 'z. B. „/features/analytics“',
            description: 'Optionaler Link für das Feature.',
          },
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default Layout422
