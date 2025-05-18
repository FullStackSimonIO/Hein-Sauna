import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Testimonial3: Block = {
  slug: 'test3',
  interfaceName: 'Testimonial3',
  labels: {
    singular: 'Testimonial 3',
    plural: 'Testimonial 3',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Was unsere Kunden sagen“',
        description: 'Hauptüberschrift für die Testimonials-Sektion.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description: 'Optionaler Einleitungstext unterhalb der Überschrift.',
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo oder Bild',
          required: false,
          admin: {
            description: 'Optional: Firmenlogo oder Bild zum Testimonial.',
          },
        },
        {
          name: 'quote',
          type: 'richText',
          label: 'Zitat',
          required: true,
          admin: {
            description: 'Hier das Testimonial eintragen. Unterstützt Formatierungen.',
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
            description: 'Name des Unternehmens.',
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

export default Testimonial3
