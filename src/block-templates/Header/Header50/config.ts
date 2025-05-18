import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

const Header50: Block = {
  slug: 'header50',
  interfaceName: 'Header50',
  labels: {
    singular: 'Header 50',
    plural: 'Header 50',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Entdecken Sie unsere Welt“',
        description: 'Optionaler kurzer Begriff oberhalb des Titels.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Ihr Partner für Innovation“',
        description: 'Hauptüberschrift im Header-Bereich.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: false,
      admin: {
        description:
          'Optionaler Fließtext unter dem Titel. Unterstützt Fettschrift, Listen, Links etc.',
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
      label: 'Hintergrundbild',
      required: false,
      admin: {
        description: 'Optionales Hintergrundbild für den Header.',
      },
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default Header50
