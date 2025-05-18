import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

const Layout351: Block = {
  slug: 'layout351',
  interfaceName: 'Layout351',
  labels: {
    singular: 'Layout 351',
    plural: 'Layouts 351',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Unsere Features“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Warum wir?“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description:
          'Optionaler Beschreibungstext unter dem Titel. Unterstützt Fettschrift, Listen, Links etc.',
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
      label: 'Features',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens ein Feature mit Überschrift und Beschreibung hinzu.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Feature Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Schnelle Integration“',
            description: 'Titel für dieses Feature.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Feature Beschreibung',
          required: false,
          admin: {
            placeholder: 'Beschreibe dieses Feature ausführlich.',
            description: 'Ausführliche Beschreibung des Features.',
          },
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild oder Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung des Features.',
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

export default Layout351
