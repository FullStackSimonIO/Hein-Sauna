import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Layout493: Block = {
  slug: 'layout493',
  interfaceName: 'Layout493',
  labels: {
    singular: 'Layout-493',
    plural: 'Layout-493',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Entdecken Sie mehr“',
        description: 'Optionaler kurzer Text über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Funktionen im Überblick“',
        description: 'Hauptüberschrift für die Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Ausführlicher Beschreibungstext. Unterstützt Fettschrift, Listen, Links etc.',
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
          'Erstelle mindestens einen Tab mit Titel, Beschreibung und optionalem Medieninhalt.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Tab Titel',
          required: true,
          admin: {
            placeholder: 'z. B. „Übersicht“',
            description: 'Titel für diesen Tab.',
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

export default Layout493
