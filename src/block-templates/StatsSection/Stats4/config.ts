import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Stats4: Block = {
  slug: 'stats4',
  interfaceName: 'Stats4',
  labels: {
    singular: 'Stats 4',
    plural: 'Stats 4',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Zahlen“',
        description: 'Hauptüberschrift für die Statistik-Sektion.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description: 'Optionaler Text unterhalb der Überschrift. Unterstützt Formatierungen.',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild',
      required: true,
      admin: {
        description: 'Wähle ein Bild aus der Media-Collection, das zur Statistik-Sektion passt.',
      },
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistiken',
      required: true,
      minRows: 3,
      maxRows: 3,
      admin: {
        description: 'Lege genau drei Statistik-Einträge an.',
      },
      fields: [
        {
          name: 'percentage',
          type: 'text',
          label: 'Prozentwert',
          required: true,
          admin: {
            placeholder: 'z. B. „75 %“',
            description: 'Zahlenwert als Prozentangabe.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Statistik-Beschriftung',
          required: true,
          admin: {
            placeholder: 'z. B. „Kundenzufriedenheit“',
            description: 'Kurze Beschreibung bzw. Titel der Statistik.',
          },
        },
      ],
    },
  ],
}

export default Stats4
