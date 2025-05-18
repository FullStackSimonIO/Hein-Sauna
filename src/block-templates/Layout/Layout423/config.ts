import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout423: Block = {
  slug: 'layout423',
  interfaceName: 'Layout423',
  labels: {
    singular: 'Layout 423',
    plural: 'Layout 423',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Entdecken Sie mehr“',
        description: 'Optionaler kurzer Begriff über der Überschrift.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Features“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description:
          'Ausführlicher Text unterhalb der Überschrift. Unterstützt Fettschrift, Listen und Links.',
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
        description: 'Füge mindestens ein Feature mit Titel, Beschreibung und Medien hinzu.',
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
            description: 'Überschrift für dieses Feature.',
          },
        },
        {
          name: 'richText',
          type: 'richText',
          label: 'Feature Beschreibung',
          required: false,
          admin: {
            description: 'Ausführliche Beschreibung des Features. Unterstützt Formatierungen.',
          },
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
          label: 'Feature Bild oder Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung des Features.',
          },
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 1 },
        }),
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default Layout423
