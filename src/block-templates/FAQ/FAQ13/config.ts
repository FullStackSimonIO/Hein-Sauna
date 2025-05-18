import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const FAQ13: Block = {
  slug: 'faq13',
  interfaceName: 'FAQ13',
  labels: {
    singular: 'FAQ 13',
    plural: 'FAQ 13',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Häufig gestellte Fragen“',
        description: 'Hauptüberschrift für den FAQ-Bereich.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Optionaler Einleitungstext über den Fragen. Unterstützt Formatierungen.',
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
            placeholder: 'z. B. „Wie funktioniert ...?“',
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
    {
      name: 'footerHeading',
      type: 'text',
      label: 'Footer-Überschrift',
      required: false,
      admin: {
        placeholder: 'z. B. „Noch Fragen?“',
        description: 'Überschrift im Footer unter den FAQs.',
      },
    },
    {
      name: 'footerDescription',
      type: 'richText',
      label: 'Footer-Beschreibung',
      required: false,
      admin: {
        description: 'Optionaler Text im Footer-Bereich. Unterstützt Formatierungen.',
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
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default FAQ13
