import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Gallery8: Block = {
  slug: 'gallery8',
  interfaceName: 'Gallery8',
  labels: {
    singular: 'Gallery 8',
    plural: 'Gallery 8',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Highlights“',
        description: 'Hauptüberschrift für den Galerie-Bereich.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Optionaler Begleittext oberhalb der Galerie. Unterstützt Formatierungen.',
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
      name: 'images',
      type: 'array',
      label: 'Bilder',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Bild',
        plural: 'Bilder',
      },
      admin: {
        description: 'Füge mindestens ein Bild mit optionalem Link hinzu.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
          admin: {
            description: 'Wähle ein Bild aus der Media-Collection.',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: 'Bild-Link (optional)',
          required: false,
          admin: {
            placeholder: 'https://example.com',
            description: 'Optional: URL, zu der das Bild verlinkt.',
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

export default Gallery8
