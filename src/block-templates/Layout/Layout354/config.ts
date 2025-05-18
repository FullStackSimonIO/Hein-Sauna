import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout354: Block = {
  slug: 'layout354',
  interfaceName: 'Layout354',
  labels: {
    singular: 'Layout 354',
    plural: 'Layout 354',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Sektionen',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge 1–n Sektionen mit Überschrift, Beschreibung und Hintergrundbild hinzu.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Unsere Werte“',
            description: 'Titel für diese Sektion.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          required: false,
          admin: {
            description: 'Optionaler Erläuterungstext. Unterstützt Fettschrift, Listen, Links etc.',
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
          name: 'image',
          type: 'upload',
          label: 'Hintergrundbild',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Wähle ein Bild aus der Media-Collection als Hintergrund.',
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

export default Layout354
