import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout517: Block = {
  slug: 'layout517',
  interfaceName: 'Layout517',
  labels: {
    singular: 'Layout 517',
    plural: 'Layout 517',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild oder Video',
      required: true,
      admin: {
        description: 'Wähle ein Bild oder Video aus der Media-Collection als zentrales Element.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Einzigartig“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Vision“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description: 'Ausführlicher Beschreibungstext. Unterstützt Fettschrift, Listen, Links etc.',
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
  ],
}

export default Layout517
