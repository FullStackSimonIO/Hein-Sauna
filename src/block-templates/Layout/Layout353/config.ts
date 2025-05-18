import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout353: Block = {
  slug: 'layout353',
  interfaceName: 'Layout353',
  labels: {
    singular: 'Layout 353',
    plural: 'Layout 353',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Entdecken Sie unsere Features“',
        description: 'Optionaler kurzer Begriff über dem Titel.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere einzigartigen Features“',
        description: 'Hauptüberschrift für diese Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description:
          'Ausführlicher Text unter dem Titel. Unterstützt Fettschrift, Listen, Links etc.',
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
    {
      name: 'featureSections',
      type: 'array',
      label: 'Feature-Sektionen',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens eine Feature-Sektion mit Titel und Beschreibung hinzu.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature Titel',
          required: true,
          admin: {
            placeholder: 'z. B. „Innovative Technologie“',
            description: 'Überschrift für dieses Feature.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Feature Beschreibung',
          required: false,
          admin: {
            description: 'Beschreibe das Feature ausführlich. Unterstützt Formatierungen.',
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
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Feature Bild oder Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung des Features.',
          },
        },
      ],
    },
  ],
}

export default Layout353
