import type { Block } from 'payload'

import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Layout488: Block = {
  slug: 'layout488',
  labels: {
    singular: 'Layout 488 Sektion',
    plural: 'Layout 488 Sektionen',
  },
  interfaceName: 'Layout488',
  fields: [
    {
      name: 'leftHeading',
      type: 'text',
      label: 'Linke Überschrift (Desktop)',
      required: false,
    },
    {
      name: 'rightHeading',
      type: 'text',
      label: 'Rechte Überschrift (Desktop)',
      required: false,
    },
    {
      name: 'mobileHeading',
      type: 'text',
      label: 'Mobile Überschrift',
      required: false,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
  ],
}
