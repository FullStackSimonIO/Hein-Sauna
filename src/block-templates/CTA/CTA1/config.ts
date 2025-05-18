// src/blocks/cta/CTA1/config.ts
import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const CTA1: Block = {
  slug: 'cta1',
  interfaceName: 'CTA1',
  labels: {
    singular: 'CTA 1',
    plural: 'CTA 1',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Jetzt starten!“',
        description: 'Hauptüberschrift, die den Nutzer zum Klicken animiert.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Fließtext',
      required: true,
      admin: {
        description:
          'Kurzer erläuternder Text unterhalb der Überschrift. Unterstützt Formatierungen.',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild / Grafik',
      required: false,
      admin: {
        description:
          'Optionales Bild oder Icon neben dem Text. In der Media-Collection anlegen und hier auswählen.',
      },
    },
    // Link-Gruppe (z. B. Button-Link / Sekundärlink)
    linkGroup({
      overrides: {
        maxRows: 2,
      },
      appearances: ['default', 'outline'],
    }),
  ],
}

export default CTA1
