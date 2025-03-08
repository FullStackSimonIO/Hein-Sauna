import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Layout354: Block = {
  slug: 'layout354',
  interfaceName: 'Layout354',
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      required: true,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
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
        {
          name: 'image',
          type: 'upload',
          label: 'Background Image',
          relationTo: 'media',
          required: true,
        },
        linkGroup({
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
}
