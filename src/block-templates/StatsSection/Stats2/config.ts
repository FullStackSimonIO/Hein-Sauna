import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Stats2: Block = {
  slug: 'stats2',
  interfaceName: 'Stats2',
  labels: {
    singular: 'Stats 2',
    plural: 'Stats 2',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Kennzahlen“',
        description: 'Hauptüberschrift für den Statistikbereich.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description: 'Optionaler erläuternder Text unter der Überschrift.',
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
        description: 'Füge mindestens eine Statistik mit Prozentwert und Titel hinzu.',
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
            placeholder: 'z. B. „85%“',
            description: 'Prozentwert der Statistik, inkl. Prozentzeichen.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Statistik-Titel',
          required: true,
          admin: {
            placeholder: 'z. B. „Kundenzufriedenheit“',
            description: 'Titel der Statistik.',
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

export default Stats2
