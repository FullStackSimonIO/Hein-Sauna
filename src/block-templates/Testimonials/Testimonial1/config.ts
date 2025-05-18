import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Testimonial1: Block = {
  slug: 'test1',
  interfaceName: 'Testimonial1',
  labels: {
    singular: 'Testimonial 1',
    plural: 'Testimonial 1',
  },
  fields: [
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
      name: 'richText',
      type: 'richText',
      label: 'Zitat',
      required: true,
      admin: {
        description: 'Zitat oder Erfahrungsbericht. Unterstützt Formatierungen.',
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
        description: 'Optional: Bild der Person, die das Zitat abgegeben hat.',
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
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default Testimonial1
