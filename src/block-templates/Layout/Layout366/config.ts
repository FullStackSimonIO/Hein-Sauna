import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout366: Block = {
  slug: 'layout366',
  interfaceName: 'Layout366',
  labels: {
    singular: 'Layout 366',
    plural: 'Layout 366',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Neu“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Top-Angebote“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'txt',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Optionaler Fließtext. Unterstützt Fettschrift, Listen, Links etc.',
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
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
      label: 'Hauptbild',
      required: false,
      admin: {
        description: 'Optionales Bild zur Illustration der Sektion.',
      },
    },
    {
      name: 'big',
      type: 'group',
      label: 'Hauptkarte',
      admin: {
        description: 'Hervorgehobene Karte mit Tagline, Überschrift, Beschreibung und Links.',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          label: 'Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Highlight“',
            description: 'Optionaler kurzer Begriff über der Karte.',
          },
        },
        {
          name: 'head',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Perfekte Lösung“',
            description: 'Haupttitel der hervorgehobenen Karte.',
          },
        },
        {
          name: 'desc',
          type: 'textarea',
          label: 'Beschreibung',
          required: false,
          admin: {
            placeholder: 'Beschreibe den Inhalt der Karte ausführlich.',
            description: 'Ausführliche Beschreibung der Karte.',
          },
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 2 },
        }),
      ],
    },
    {
      name: 'small',
      type: 'array',
      label: 'Kleine Karten',
      required: true,
      minRows: 1,
      admin: {
        description:
          'Füge mindestens eine kleine Karte mit Titel, Beschreibung, Bild und Links hinzu.',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          label: 'Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Neu“',
            description: 'Optionaler kurzer Begriff über der Karte.',
          },
        },
        {
          name: 'head',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Funktion X“',
            description: 'Titel der kleinen Karte.',
          },
        },
        {
          name: 'desc',
          type: 'textarea',
          label: 'Beschreibung',
          required: false,
          admin: {
            placeholder: 'Kurze Beschreibung der Funktion.',
            description: 'Beschreibe die kleine Karte.',
          },
        },
        {
          name: 'img',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
          admin: {
            description: 'Wähle ein Bild für die kleine Karte aus der Media-Collection.',
          },
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 2 },
        }),
      ],
    },
  ],
}

export default Layout366
