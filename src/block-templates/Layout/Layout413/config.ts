import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout413: Block = {
  slug: 'layout413',
  interfaceName: 'Layout413',
  labels: {
    singular: 'Layout 413',
    plural: 'Layout 413',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Hauptbild',
      required: true,
      admin: {
        description: 'Wähle ein Bild aus der Media-Collection für diese Sektion.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Highlight“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Services“',
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
    {
      name: 'subHeadings',
      type: 'array',
      label: 'Unterüberschriften',
      required: false,
      minRows: 0,
      admin: {
        description: 'Füge optionale Unterüberschriften mit Beschreibungen hinzu.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Unterüberschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Vorteil X“',
            description: 'Titel der Unterüberschrift.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          required: false,
          admin: {
            placeholder: 'Beschreibe diesen Vorteil.',
            description: 'Ausführlicher Text zur Unterüberschrift.',
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

export default Layout413
