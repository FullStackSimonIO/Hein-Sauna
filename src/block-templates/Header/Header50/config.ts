import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

export const Header50: Block = {
  slug: 'header50',
  labels: {
    singular: 'Header50 Block',
    plural: 'Header50 Blöcke',
  },
  interfaceName: 'Header50',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
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
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media', // Verknüpfung zur Media Collection
      label: 'Hintergrundbild',
      required: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default Header50
