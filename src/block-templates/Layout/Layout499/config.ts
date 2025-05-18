import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Layout499: Block = {
  slug: 'layout499',
  interfaceName: 'Layout499',
  labels: {
    singular: 'Layout 499',
    plural: 'Layout 499',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Entdecken Sie unsere Tabs“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Kernfunktionen“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Optionaler Fließtext unter dem Titel. Unterstützt Formatierungen.',
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
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      required: true,
      minRows: 1,
      admin: {
        description:
          'Erstelle mindestens einen Tab mit Wert, Titel, Beschreibung und optionalem Medieninhalt.',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Tab-Wert',
          required: true,
          admin: {
            placeholder: 'z. B. „overview“',
            description: 'Technischer Wert/Schlüssel des Tabs.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Tab Titel',
          required: true,
          admin: {
            placeholder: 'z. B. „Übersicht“',
            description: 'Angezeigter Titel des Tabs.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Tab Beschreibung',
          required: false,
          admin: {
            description: 'Inhalt des Tabs. Unterstützt Formatierungen.',
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
          label: 'Tab Bild oder Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video für diesen Tab.',
          },
        },
      ],
    },
  ],
}

export default Layout499
