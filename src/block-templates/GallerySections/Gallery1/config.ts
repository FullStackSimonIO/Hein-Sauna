import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Gallery1: Block = {
  slug: 'gallery1',
  interfaceName: 'Gallery1',
  labels: {
    singular: 'Gallery 1',
    plural: 'Gallery 1',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Galerie“',
        description: 'Hauptüberschrift für den Galerie-Bereich.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description:
          'Optionaler Beschreibungstext oberhalb der Galerie. Unterstützt Formatierungen.',
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
        description: 'Füge mindestens ein Bild hinzu.',
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
          label: 'Link-URL',
          required: false,
          admin: {
            placeholder: 'https://example.com',
            description: 'Optional: Verlinkung beim Klick auf das Bild.',
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

export default Gallery1
