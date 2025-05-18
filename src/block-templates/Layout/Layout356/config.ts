import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const Layout356: Block = {
  slug: 'layout356',
  interfaceName: 'Layout356',
  labels: {
    singular: 'Layout 356',
    plural: 'Layout 356',
  },
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens ein Feature mit Anker, Titel und weiteren Feldern hinzu.',
      },
      fields: [
        {
          name: 'anchor',
          type: 'group',
          label: 'Feature-Anker',
          admin: {
            description: 'Optionaler Link-Anker für dieses Feature.',
          },
          fields: [
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: false,
              admin: {
                placeholder: 'z. B. „/section#feature1“',
                description: 'Interne oder externe URL als Anker.',
              },
            },
            {
              name: 'number',
              type: 'text',
              label: 'Nummer',
              required: false,
              admin: {
                placeholder: 'z. B. „01“',
                description: 'Optional fortlaufende Nummer zur Kennzeichnung.',
              },
            },
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              required: true,
              admin: {
                placeholder: 'z. B. „Performance“',
                description: 'Kurzbezeichnung des Features.',
              },
            },
          ],
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: false,
          admin: {
            placeholder: 'z. B. „Neu“',
            description: 'Optionaler kurzer Begriff über dem Haupttitel.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Echtzeit-Analyse“',
            description: 'Hauptüberschrift für dieses Feature.',
          },
        },
        {
          name: 'richText',
          type: 'richText',
          label: 'Text',
          required: false,
          admin: {
            description: 'Ausführliche Beschreibung des Features. Unterstützt Formatierungen.',
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
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild oder Video',
          required: false,
          admin: {
            description: 'Optionales Bild oder Video zur Veranschaulichung des Features.',
          },
        },
        {
          name: 'buttons',
          type: 'array',
          label: 'Buttons',
          required: false,
          admin: {
            description: 'Optional: Füge bis zu mehrere Buttons hinzu.',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Button-Text',
              required: true,
              admin: {
                placeholder: 'z. B. „Mehr erfahren“',
                description: 'Text, der im Button angezeigt wird.',
              },
            },
            {
              name: 'variant',
              type: 'select',
              label: 'Variante',
              required: true,
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Link', value: 'link' },
              ],
              admin: {
                description: 'Visueller Stil des Buttons.',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default Layout356
