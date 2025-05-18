import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout486: Block = {
  slug: 'layout486',
  interfaceName: 'Layout486',
  labels: {
    singular: 'Layout 486',
    plural: 'Layout 486',
  },
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      minRows: 1,
      admin: {
        description:
          'Erstelle mindestens ein Feature mit Titel, Beschreibung und optionalen Links.',
      },
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Feature Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Neu“',
            description: 'Optionaler kurzer Begriff über der Überschrift.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Feature Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Echtzeit-Statistiken“',
            description: 'Hauptüberschrift für dieses Feature.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Feature Beschreibung',
          required: false,
          admin: {
            description: 'Beschreibe das Feature ausführlich. Unterstützt Formatierungen.',
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
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 2 },
        }),
      ],
    },
  ],
}

export default Layout486
