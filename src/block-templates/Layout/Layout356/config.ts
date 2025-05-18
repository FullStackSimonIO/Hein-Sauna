import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout356: Block = {
  slug: 'layout356',
  labels: {
    singular: 'Layout356 Sektion',
    plural: 'Layout356 Sektionen',
  },
  interfaceName: 'Layout356',
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      fields: [
        {
          name: 'anchor',
          type: 'group',
          label: 'Feature-Anker',
          fields: [
            { name: 'url', type: 'text', label: 'URL', required: false },
            { name: 'number', type: 'text', label: 'Nummer', required: false },
            { name: 'title', type: 'text', label: 'Titel', required: true },
          ],
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: false,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
        },
        {
          name: 'richText',
          type: 'richText',
          label: 'Text',
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
          overrides: {
            maxRows: 2,
          },
        }),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild oder Video',
          required: false,
        },
        {
          name: 'buttons',
          type: 'array',
          label: 'Buttons',
          fields: [
            { name: 'title', type: 'text', label: 'Button-Text', required: true },
            {
              name: 'variant',
              type: 'select',
              label: 'Variante',
              options: ['primary', 'secondary', 'link'],
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Layout356
