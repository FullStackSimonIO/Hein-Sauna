import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Stats23: Block = {
  slug: 'stats23',
  interfaceName: 'Stats23',
  labels: {
    singular: 'Stats 23',
    plural: 'Stats 23',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Leistungsübersicht“',
        description: 'Optionaler kurzer Text oberhalb der Tabs.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Kennzahlen“',
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
      name: 'defaultTabValue',
      type: 'text',
      label: 'Default Tab Value',
      required: true,
      admin: {
        placeholder: 'z. B. „overview“',
        description: 'Gib hier den Wert des Tabs an, der beim Laden standardmäßig angezeigt wird.',
      },
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      required: true,
      minRows: 1,
      admin: {
        description: 'Lege mindestens einen Tab mit seinen Statistiken an.',
      },
      labels: {
        singular: 'Tab',
        plural: 'Tabs',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Tab Value (Unique)',
          required: true,
          admin: {
            placeholder: 'z. B. „overview“',
            description: 'Eindeutiger Wert zur Unterscheidung der Tabs.',
          },
        },
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
            placeholder: 'z. B. „Zufriedenheit“',
            description: 'Kurze Beschreibung oder Titel der Statistik.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Tab Description',
          required: false,
          admin: {
            description: 'Optionaler erläuternder Text zum Tab. Unterstützt Formatierungen.',
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Image',
          required: false,
          admin: {
            description: 'Optionales Bild zur Visualisierung im Tab.',
          },
        },
      ],
    },
  ],
}

export default Stats23
