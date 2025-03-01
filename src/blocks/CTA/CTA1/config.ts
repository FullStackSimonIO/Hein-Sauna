import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const CTA1: Block = {
  slug: 'cta1',
  labels: {
    singular: 'CTA1 Block',
    plural: 'CTA1 Blöcke',
  },
  interfaceName: 'CTA1',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
      required: true,
    },
    {
      name: 'media',
      label: 'Bild',
      type: 'upload',
      relationTo: 'media', // Verknüpfung zur Media Collection
      required: true,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default CTA1
