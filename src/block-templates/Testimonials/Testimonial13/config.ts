import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Testimonial13: Block = {
  slug: 'test13',
  interfaceName: 'Testimonial13',
  labels: {
    singular: 'Testimonial 13',
    plural: 'Testimonial 13',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Testimonial Bild',
      required: false,
      admin: {
        description: 'Optional: Hauptbild oder Illustration zum Testimonial.',
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
      name: 'richText',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description: 'Optionaler ausführlicher Text unter dem Zitat. Unterstützt Formatierungen.',
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

export default Testimonial13
