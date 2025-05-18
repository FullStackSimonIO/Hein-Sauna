import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout414: Block = {
  slug: 'layout414',
  interfaceName: 'Layout414',
  labels: {
    singular: 'Layout 414',
    plural: 'Layout 414',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Entdecken Sie mehr“',
        description: 'Optionaler kurzer Begriff über der Überschrift.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Galerie“',
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
          'Ausführlicher Text unterhalb des Titels. Unterstützt Fettschrift, Listen und Links.',
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
      name: 'imagesPartOne',
      type: 'array',
      label: 'Bildreihe 1',
      required: false,
      minRows: 0,
      admin: {
        description: 'Upload von Bildern für die erste Reihe.',
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
          admin: {
            description: 'Wähle ein Bild aus der Media-Collection.',
          },
        },
      ],
    },
    {
      name: 'imagesPartTwo',
      type: 'array',
      label: 'Bildreihe 2',
      required: false,
      minRows: 0,
      admin: {
        description: 'Upload von Bildern für die zweite Reihe.',
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
          admin: {
            description: 'Wähle ein Bild aus der Media-Collection.',
          },
        },
      ],
    },
  ],
}

export default Layout414
