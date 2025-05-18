// src/blocks/gallery/Gallery26/config.ts
import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Gallery26: Block = {
  slug: 'gallery26',
  interfaceName: 'Gallery26',
  labels: {
    singular: 'Gallery 26',
    plural: 'Gallery 26',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Projekt-Galerie“',
        description: 'Hauptüberschrift für die Galerie-Sektion.',
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
        description: 'Füge mindestens ein Bild zur Galerie hinzu.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Galerie-Bild',
          required: true,
          admin: {
            description: 'Wähle ein Bild aus der Media-Collection.',
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

export default Gallery26
