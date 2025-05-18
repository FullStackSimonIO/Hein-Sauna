import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Testimonial32: Block = {
  slug: 'test32',
  interfaceName: 'Testimonial32',
  labels: {
    singular: 'Testimonial 32',
    plural: 'Testimonial 32',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Kundenstimmen“',
        description: 'Hauptüberschrift für die Testimonial-Sektion.',
      },
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
    {
      name: 'richText',
      type: 'richText',
      label: 'Einleitender Text',
      required: false,
      admin: {
        description: 'Optionaler Fließtext oberhalb der Testimonials. Unterstützt Formatierungen.',
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
        description: 'Füge mindestens ein Testimonial mit allen Feldern hinzu.',
      },
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Zitat',
          required: true,
          admin: {
            placeholder: 'z. B. „Ausgezeichnete Zusammenarbeit!“',
            description: 'Kern-Zitat des Testimonials.',
          },
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
  ],
}

export default Testimonial32
