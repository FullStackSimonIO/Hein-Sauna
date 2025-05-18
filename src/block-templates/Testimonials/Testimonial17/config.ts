import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Testimonial17: Block = {
  slug: 'testimonial17',
  interfaceName: 'Testimonial17',
  labels: {
    singular: 'Testimonial 17',
    plural: 'Testimonial 17',
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
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: false,
      admin: {
        placeholder: 'Optionaler Einleitungstext unter der Überschrift.',
        description: 'Kurzer Beschreibungstext. Unterstützt einfache Formatierung.',
      },
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      required: true,
      minRows: 1,
      admin: {
        description: 'Lege mindestens ein Testimonial an.',
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
            description: 'Optional: Bild oder Avatar der Person.',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name der Person',
          required: true,
          admin: {
            placeholder: 'z. B. „Max Mustermann“',
            description: 'Name der Person, die das Testimonial abgegeben hat.',
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
            description: 'Name des Unternehmens.',
          },
        },
      ],
    },
  ],
}

export default Testimonial17
