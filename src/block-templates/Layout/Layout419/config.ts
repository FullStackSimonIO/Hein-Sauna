import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout419: Block = {
  slug: 'layout419',
  interfaceName: 'Layout419',
  labels: {
    singular: 'Layout 419',
    plural: 'Layout 419',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Erste Einblicke“',
        description: 'Optionaler kurzer Begriff über der Überschrift.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Produktübersicht“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description:
          'Optionaler Fließtext unter dem Titel. Unterstützt Fettschrift, Listen, Links etc.',
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
      name: 'data',
      type: 'array',
      label: 'Datenpunkte',
      required: true,
      minRows: 1,
      admin: {
        description:
          'Füge mindestens einen Datenpunkt mit Bild, Unterüberschrift und Beschreibung hinzu.',
      },
      fields: [
        {
          name: 'img',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: false,
          admin: {
            description: 'Optionales Bild für den Datenpunkt.',
          },
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Unterüberschrift',
          required: false,
          admin: {
            placeholder: 'z. B. „Merkmal A“',
            description: 'Unterüberschrift für den Datenpunkt.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          required: false,
          admin: {
            placeholder: 'Beschreibe den Datenpunkt.',
            description: 'Ausführlicher Text zum Datenpunkt.',
          },
        },
      ],
    },
  ],
}

export default Layout419
