import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout412: Block = {
  slug: 'layout412',
  interfaceName: 'Layout412',
  labels: {
    singular: 'Layout 412',
    plural: 'Layout 412',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Neuigkeiten“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unser Angebot“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'txt',
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
            placeholder: 'z. B. „Feature X“',
            description: 'Titel der Unterüberschrift.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          required: false,
          admin: {
            placeholder: 'Beschreibe diese Unterüberschrift.',
            description: 'Ausführlicher Text zur Unterüberschrift.',
          },
        },
      ],
    },
    {
      name: 'big',
      type: 'group',
      label: 'Link-Bereich',
      admin: {
        description: 'Bereich für einen oder zwei Links.',
      },
      fields: [
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 2 },
        }),
      ],
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild',
      required: true,
      admin: {
        description: 'Wähle ein Bild aus der Media-Collection.',
      },
    },
  ],
}

export default Layout412
