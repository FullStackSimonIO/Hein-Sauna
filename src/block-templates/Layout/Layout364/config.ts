import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout364: Block = {
  slug: 'layout364',
  interfaceName: 'Layout364',
  labels: {
    singular: 'Layout 364',
    plural: 'Layout 364',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Was uns auszeichnet“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Kompetenzen“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Optionaler Einführungstext. Unterstützt Formatierungen.',
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
      name: 'sections',
      type: 'array',
      label: 'Sektionen',
      required: true,
      minRows: 1,
      admin: {
        description: 'Erstelle mindestens eine Sektion mit Überschrift, Beschreibung und Medien.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Projektmanagement“',
            description: 'Titel dieser Sektion.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          required: false,
          admin: {
            placeholder: 'Beschreibe diese Sektion.',
            description: 'Ausführliche Beschreibung der Sektion.',
          },
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild oder Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Illustration.',
          },
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 3 },
        }),
      ],
    },
  ],
}

export default Layout364
