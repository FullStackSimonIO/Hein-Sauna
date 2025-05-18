import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Logo1: Block = {
  slug: 'logo1',
  interfaceName: 'Logo1',
  labels: {
    singular: 'Logo 1',
    plural: 'Logo 1',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Partner“',
        description: 'Hauptüberschrift für die Logo-Sektion.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description: 'Optionaler erläuternder Text unter der Überschrift.',
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
      name: 'logos',
      type: 'array',
      label: 'Logos',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens ein Logo hinzu, das in dieser Sektion angezeigt wird.',
      },
      labels: {
        singular: 'Logo',
        plural: 'Logos',
      },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Bild',
          required: true,
          admin: {
            description: 'Wähle ein Logo aus der Media-Collection.',
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
