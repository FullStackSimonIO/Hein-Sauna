import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout424: Block = {
  slug: 'layout424',
  interfaceName: 'Layout424',
  labels: {
    singular: 'Layout 424',
    plural: 'Layout 424',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Unsere Themen“',
        description: 'Optionaler kurzer Begriff oberhalb der Überschriften.',
      },
    },
    {
      name: 'headings',
      type: 'array',
      label: 'Überschriften',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens eine Überschrift hinzu.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Feature A“',
            description: 'Titel für diesen Abschnitt.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          required: false,
          admin: {
            description:
              'Optionaler erläuternder Text. Unterstützt Fettschrift, Listen, Links etc.',
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
          overrides: { maxRows: 2 },
        }),
      ],
    },
  ],
}

export default Layout424
