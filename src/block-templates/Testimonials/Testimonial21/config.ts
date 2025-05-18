import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Testimonial21: Block = {
  slug: 'test21',
  interfaceName: 'Testimonial21',
  labels: {
    singular: 'Testimonial 21',
    plural: 'Testimonial 21',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Was unsere Kunden sagen“',
        description: 'Hauptüberschrift für die Testimonial-Sektion.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description:
          'Optionaler Einführungstext unter der Überschrift. Unterstützt Formatierungen.',
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
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens ein Testimonial hinzu.',
      },
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      fields: [
        {
          name: 'quote',
          type: 'richText',
          label: 'Zitat',
          required: true,
          admin: {
            description: 'Hier das Testimonial-Zitat eingeben. Unterstützt Formatierungen.',
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
        {
          name: 'numberOfStars',
          type: 'number',
          label: 'Sternebewertung',
          required: true,
          min: 1,
          max: 5,
          admin: {
            description: 'Bewertung in Sternen (1–5).',
          },
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Avatar',
          required: false,
          admin: {
            description: 'Optional: Bild der Person, die das Testimonial gegeben hat.',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name der Person',
          required: true,
          admin: {
            placeholder: 'z. B. „Max Mustermann“',
            description: 'Name der Person für das Testimonial.',
          },
        },
        {
          name: 'position',
          type: 'text',
          label: 'Position',
          required: false,
          admin: {
            placeholder: 'z. B. „CEO, Beispiel GmbH“',
            description: 'Berufsbezeichnung der Person.',
          },
        },
        {
          name: 'companyName',
          type: 'text',
          label: 'Unternehmensname',
          required: false,
          admin: {
            placeholder: 'z. B. „Beispiel GmbH“',
            description: 'Name des Unternehmens der Person.',
          },
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default Testimonial21
