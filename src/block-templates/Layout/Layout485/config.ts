import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout485: Block = {
  slug: 'layout485',
  interfaceName: 'Layout485',
  labels: {
    singular: 'Layout 485',
    plural: 'Layout 485',
  },
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      minRows: 1,
      admin: {
        description: 'Erstelle mindestens ein Feature mit Nummer, Titel und optionalen Details.',
      },
      fields: [
        {
          name: 'number',
          type: 'number',
          label: 'Nummer',
          required: true,
          admin: {
            description: 'Fortlaufende Nummer für dieses Feature.',
          },
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Neu“',
            description: 'Optionaler kurzer Begriff über der Überschrift.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Echtzeit-Statistiken“',
            description: 'Hauptüberschrift für dieses Feature.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          required: false,
          admin: {
            description: 'Optionaler erläuternder Text zum Feature.',
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
          overrides: { maxRows: 3 },
        }),
      ],
    },
  ],
}

export default Layout485
