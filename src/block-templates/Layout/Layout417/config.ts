import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout417: Block = {
  slug: 'layout417',
  interfaceName: 'Layout417',
  labels: {
    singular: 'Layout 417',
    plural: 'Layout 417',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Highlights“',
        description: 'Hauptüberschrift für die Feature-Sektionen.',
      },
    },
    {
      name: 'featureSections',
      type: 'array',
      label: 'Feature-Sektionen',
      required: true,
      minRows: 1,
      admin: {
        description:
          'Füge mindestens eine Feature-Sektion mit Titel, Beschreibung und Medien hinzu.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature-Titel',
          required: true,
          admin: {
            placeholder: 'z. B. „Echtzeit-Daten“',
            description: 'Überschrift für dieses Feature.',
          },
        },
        {
          name: 'richText',
          type: 'richText',
          label: 'Feature-Beschreibung',
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
          label: 'Feature Bild/Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung des Features.',
          },
        },
      ],
    },
  ],
}

export default Layout417
