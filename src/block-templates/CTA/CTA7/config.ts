// src/blocks/cta/CTA7/config.ts
import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CTA7: Block = {
  slug: 'cta7',
  interfaceName: 'CTA7',
  labels: {
    singular: 'CTA 7',
    plural: 'CTA 7',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Aktion starten“',
        description: 'Hauptüberschrift der Call-to-Action.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Fließtext',
      required: false,
      admin: {
        description:
          'Weiterführender Text unter der Überschrift. Unterstützt Formatierungen (fett, Listen, Links o. Ä.).',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default CTA7
