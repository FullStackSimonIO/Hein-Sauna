import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const FAQ1: Block = {
  slug: 'faq1',
  interfaceName: 'FAQ1',
  labels: {
    singular: 'FAQ 1',
    plural: 'FAQ 1',
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
      name: 'richText',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Optionaler Einleitungstext oberhalb der Fragen. Unterstützt Formatierungen.',
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
          name: 'question',
          type: 'text',
          label: 'Frage',
          required: true,
          admin: {
            placeholder: 'z. B. „Wie funktioniert ...?“',
            description: 'Formuliere hier die Frage.',
          },
        },
        {
          name: 'richText',
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
        description: 'Überschrift im Footer-Bereich unter den FAQs.',
      },
    },
    {
      name: 'footerDescription',
      type: 'textarea',
      label: 'Footer-Beschreibung',
      required: false,
      admin: {
        placeholder: 'z. B. weitere Informationen oder Kontakthinweise',
        description: 'Beschreibungstext im Footer unter der Footer-Überschrift.',
      },
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default FAQ1
