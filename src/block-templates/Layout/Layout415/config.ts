import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Layout415: Block = {
  slug: 'layout415',
  interfaceName: 'Layout415',
  labels: {
    singular: 'Layout 415',
    plural: 'Layout 415',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Highlights“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Features“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Optionaler Fließtext unter dem Titel. Unterstützt Fett, Listen, Links etc.',
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
      label: 'Feature-Sektionen',
      required: true,
      minRows: 1,
      admin: {
        description: 'Erstelle mindestens eine Feature-Sektion mit Titel, Beschreibung und Media.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature Titel',
          required: true,
          admin: {
            placeholder: 'z. B. „Echtzeit-Statistiken“',
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
          label: 'Feature Bild',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung.',
          },
        },
      ],
    },
  ],
}

export default Layout415
