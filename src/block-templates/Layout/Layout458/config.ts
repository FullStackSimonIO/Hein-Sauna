import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout458: Block = {
  slug: 'layout458',
  interfaceName: 'Layout458',
  labels: {
    singular: 'Layout 458',
    plural: 'Layout 458',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Unsere Schwerpunkte“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Top Features“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Optionaler Einführungstext. Unterstützt Fettschrift, Listen, Links etc.',
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
      overrides: { maxRows: 2 },
    }),
    {
      name: 'features',
      type: 'array',
      label: 'Feature Sektionen',
      required: true,
      minRows: 1,
      admin: {
        description: 'Erstelle mindestens eine Feature-Sektion mit Titel, Beschreibung und Media.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Feature Titel',
          required: true,
          admin: {
            placeholder: 'z. B. „Echtzeit-Analyse“',
            description: 'Überschrift für dieses Feature.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Feature Beschreibung',
          required: false,
          admin: {
            description: 'Beschreibe dieses Feature ausführlich. Unterstützt Formatierungen.',
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
          label: 'Feature Bild',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung des Features.',
          },
        },
      ],
    },
  ],
}

export default Layout458
