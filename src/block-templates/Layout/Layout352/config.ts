import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

const Layout352: Block = {
  slug: 'layout352',
  interfaceName: 'Layout352',
  labels: {
    singular: 'Layout 352 Sektion',
    plural: 'Layout 352 Sektionen',
  },
  fields: [
    {
      name: 'content',
      type: 'group',
      label: 'Feature Inhalt',
      admin: {
        description: 'Hauptinhalt mit Tagline, Überschrift und Beschreibung.',
      },
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Meilensteine“',
            description: 'Optionaler kurzer Begriff über der Überschrift.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Unsere Historie“',
            description: 'Hauptüberschrift für den Feature-Bereich.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          required: false,
          admin: {
            description: 'Ausführlicher Text zum Feature-Inhalt. Unterstützt Formatierungen.',
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
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Timeline Einträge',
      required: true,
      minRows: 1,
      admin: {
        description: 'Erstelle die einzelnen Einträge der Timeline.',
      },
      fields: [
        {
          name: 'date',
          type: 'text',
          label: 'Datum',
          required: true,
          admin: {
            placeholder: 'z. B. „2025-01-01“',
            description: 'Datum des Ereignisses (YYYY-MM-DD).',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          required: false,
          admin: {
            description: 'Ausführliche Beschreibung des Timeline-Eintrags.',
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
            description: 'Optionales Bild oder Video zum Timeline-Eintrag.',
          },
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 3 },
        }),
      ],
    },
  ],
}

export default Layout352
