import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const FAQ4: Block = {
  slug: 'faq4',
  interfaceName: 'FAQ4',
  labels: {
    singular: 'FAQ 4',
    plural: 'FAQ 4',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Alles, was Sie wissen müssen“',
        description: 'Hauptüberschrift für den FAQ-Bereich.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description:
          'Optionaler erläuternder Text oberhalb der Fragen. Unterstützt Formatierungen.',
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
            placeholder: 'z. B. „Wie funktioniert...?“',
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
        placeholder: 'z. B. „Noch nicht fündig geworden?“',
        description: 'Überschrift im Footer-Bereich unter den FAQs.',
      },
    },
    {
      name: 'footerDescription',
      type: 'textarea',
      label: 'Footer-Beschreibung',
      required: false,
      admin: {
        placeholder: 'z. B. Kontaktiere uns für mehr Infos',
        description: 'Beschreibungstext im Footer unter der Footer-Überschrift.',
      },
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default FAQ4
