import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout349: Block = {
  slug: 'layout349',
  interfaceName: 'Layout349',
  labels: {
    singular: 'Layout349 Sektion',
    plural: 'Layout349 Sektionen',
  },
  fields: [
    {
      name: 'contents',
      type: 'array',
      label: 'Inhalte',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens einen Inhaltsblock mit Tagline, Überschrift etc. hinzu.',
      },
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Neu & Innovativ“',
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
            description: 'Hauptüberschrift für diesen Inhaltsblock.',
          },
        },
        {
          name: 'richText',
          type: 'richText',
          label: 'Beschreibung',
          required: false,
          admin: {
            description: 'Detaillierte Beschreibung des Inhalts. Unterstützt Formatierungen.',
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
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild oder Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur visuellen Unterstützung.',
          },
        },
      ],
    },
  ],
}

export default Layout349
