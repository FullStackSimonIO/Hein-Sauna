import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 10,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'bottomLinks',
      label: 'Infobox Links (z. B. Kontakt, Karriere etc.)',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'icon',
          label: 'Icon (Heroicon, Lucide, etc.)',
          type: 'text',
        },
        {
          name: 'label',
          label: 'Text',
          type: 'text',
        },
        link({ appearances: false }),
      ],
    },
    {
      name: 'ctaButton',
      label: 'CTA Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          label: 'Button Text',
          type: 'text',
        },
        link({ appearances: false }),
      ],
    },
    {
      name: 'disclaimer',
      label: 'Kleiner Hinweis unter dem Button',
      type: 'text',
    },
  ],
}
