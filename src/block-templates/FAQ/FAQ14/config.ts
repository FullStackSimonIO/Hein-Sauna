import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const FAQ14: Block = {
  slug: 'faq14',
  interfaceName: 'FAQ14',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere FAQs auf einen Blick“',
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
          'Optionaler erläuternder Text unter der Überschrift. Unterstützt Formatierungen.',
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
        description: 'Füge mindestens eine Frage mit Icon und Antwort hinzu.',
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          options: [
            { label: 'Star', value: 'star' },
            { label: 'Check Circle', value: 'check' },
            { label: 'Question Circle', value: 'question' },
            { label: 'Lightbulb', value: 'lightbulb' },
          ],
          admin: {
            description: 'Wähle ein Icon, das neben der Frage angezeigt wird.',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Frage',
          required: true,
          admin: {
            placeholder: 'z. B. „Wie funktioniert ...?“',
            description: 'Text der Frage.',
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
        description: 'Überschrift im Footer-Bereich unter den FAQs.',
      },
    },
    {
      name: 'footerDescription',
      type: 'richText',
      label: 'Footer-Beschreibung',
      required: false,
      admin: {
        description: 'Optionaler Text im Footer unter der Footer-Überschrift.',
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

export default FAQ14
