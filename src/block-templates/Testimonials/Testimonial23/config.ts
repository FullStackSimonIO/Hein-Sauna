import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Testimonial23: Block = {
  slug: 'test23',
  interfaceName: 'Testimonial23',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
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
        description: 'Kurzer Beschreibungstext.',
      },
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
        singular: 'Testimonial 23',
        plural: 'Testimonial 23',
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
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Firmenlogo',
          required: false,
          admin: {
            description: 'Optional: Logo des Unternehmens.',
          },
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Avatar',
          required: false,
          admin: {
            description: 'Optional: Bild der Person.',
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
            description: 'Name des Unternehmens.',
          },
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 2 },
        }),
      ],
    },
  ],
}

export default Testimonial23
