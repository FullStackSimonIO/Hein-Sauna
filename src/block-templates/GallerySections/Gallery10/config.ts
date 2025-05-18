import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Gallery10: Block = {
  slug: 'gallery10',
  interfaceName: 'Gallery10',
  labels: {
    singular: 'Gallery 10',
    plural: 'Gallery 10',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Galerie der Highlights“',
        description: 'Hauptüberschrift für den Galerie-Abschnitt.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Optionaler Text unterhalb der Überschrift. Unterstützt Formatierungen.',
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
        description: 'Mindestens ein Bild erforderlich.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
          admin: {
            description: 'Wähle ein Bild aus der Media-Collection aus.',
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

export default Gallery10
