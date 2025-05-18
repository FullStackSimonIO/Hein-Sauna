import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const FAQ8: Block = {
  slug: 'faq8',
  interfaceName: 'FAQ8',
  labels: {
    singular: 'FAQ 8',
    plural: 'FAQ 8',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Ihre Fragen beantwortet“',
        description: 'Hauptüberschrift für den FAQ-Bereich.',
      },
    },
    {
      name: 'headingDescription',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description:
          'Optionaler Einleitungstext unterhalb der Überschrift. Unterstützt Formatierungen.',
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
      name: 'questions',
      type: 'array',
      label: 'Fragen',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens eine Frage mit Antwort hinzu.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Frage',
          required: true,
          admin: {
            placeholder: 'z. B. „Wie kann ich ...?“',
            description: 'Formuliere hier die Frage.',
          },
        },
        {
          name: 'answer',
          type: 'richText',
          label: 'Antwort',
          required: false,
          admin: {
            description: 'Antwort auf die Frage. Unterstützt Formatierungen.',
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default FAQ8
