import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

const Layout488: Block = {
  slug: 'layout488',
  interfaceName: 'Layout488',
  labels: {
    singular: 'Layout 488',
    plural: 'Layout 488',
  },
  fields: [
    {
      name: 'leftHeading',
      type: 'text',
      label: 'Linke Überschrift (Desktop)',
      required: false,
      admin: {
        placeholder: 'z. B. „Über uns“',
        description: 'Überschrift, die auf Desktop links angezeigt wird.',
      },
    },
    {
      name: 'rightHeading',
      type: 'text',
      label: 'Rechte Überschrift (Desktop)',
      required: false,
      admin: {
        placeholder: 'z. B. „Unsere Mission“',
        description: 'Überschrift, die auf Desktop rechts angezeigt wird.',
      },
    },
    {
      name: 'mobileHeading',
      type: 'text',
      label: 'Mobile Überschrift',
      required: false,
      admin: {
        placeholder: 'z. B. „Willkommen“',
        description: 'Überschrift, die auf mobilen Geräten angezeigt wird.',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild',
      required: true,
      admin: {
        description: 'Wähle ein Bild oder Video aus der Media-Collection als visuelles Element.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description:
          'Ausführlicher Text zur Erläuterung. Unterstützt Fettschrift, Listen, Links etc.',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
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

export default Layout488
