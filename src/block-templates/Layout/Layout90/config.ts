import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

const Layout90: Block = {
  slug: 'layout90',
  interfaceName: 'Layout90',
  labels: {
    singular: 'Layout 90',
    plural: 'Layout 90',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Leistungen im Fokus“',
        description: 'Kurze, prägnante Überschrift für die Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description:
          'Optionaler Beschreibungstext unterhalb des Titels. Unterstützt Fettschrift, Listen, Links etc.',
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
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild oder Video',
      required: false,
      admin: {
        description: 'Optionales Bild oder Video zur Bebilderung der Sektion.',
      },
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default Layout90
