import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Stats13: Block = {
  slug: 'stats13',
  interfaceName: 'Stats13',
  labels: {
    singular: 'Stats 13',
    plural: 'Stats 13',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Unsere Erfolge“',
        description: 'Optionaler kurzer Text über der Überschrift.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Leistungskennzahlen“',
        description: 'Hauptüberschrift für die Statistik-Sektion.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description:
          'Optionaler Einleitungstext unter der Überschrift. Unterstützt Formatierungen.',
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
      name: 'stats',
      type: 'array',
      label: 'Statistiken',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge deine Statistikeinträge hinzu (mindestens 1).',
      },
      labels: {
        singular: 'Stat',
        plural: 'Stats',
      },
      fields: [
        {
          name: 'percentage',
          type: 'text',
          label: 'Prozentwert',
          required: true,
          admin: {
            placeholder: 'z. B. „85 %“',
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
            description: 'Kurze Beschreibung oder Titel der Statistik.',
          },
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 3 },
    }),
  ],
}

export default Stats13
