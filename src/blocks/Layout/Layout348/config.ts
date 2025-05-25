import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout348: Block = {
  slug: 'layout348',
  interfaceName: 'Layout348',
  labels: {
    singular: 'Layout 348',
    plural: 'Layout 348',
  },
  fields: [
    {
      name: 'contents',
      type: 'array',
      label: 'Inhalte',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge 1–n Inhaltsblöcke mit Tagline, Überschrift etc. hinzu.',
      },
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Highlight“',
            description: 'Optionaler kurzer Begriff über der Überschrift.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Unser Angebot“',
            description: 'Hauptüberschrift für diesen Inhaltsblock.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          required: false,
          admin: {
            description: 'Ausführlicher Text. Unterstützt Fettschrift, Listen, Links etc.',
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
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 3 },
        }),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild oder Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung.',
          },
        },
      ],
    },
  ],
}

export default Layout348
