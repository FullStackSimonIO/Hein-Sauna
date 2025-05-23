import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const SaunaCategoryPreview: Block = {
  slug: 'saunaCategoryPreview',
  labels: {
    singular: 'Sauna-Kategorie Preview',
    plural: 'Sauna-Kategorie Previews',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
    },
    {
      name: 'introText',
      type: 'richText',
      label: 'Einleitungstext',
    },
    {
      name: 'categories',
      label: 'Sauna-Kategorien',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
      admin: {
        description: 'Wähle die Kategorien, die hier als Vorschau angezeigt werden sollen.',
      },
    },
    // optional: zusätzlich automatisch generierte „Mehr anzeigen“-Links
    linkGroup({
      appearances: false,

      overrides: {
        maxRows: 1,
      },
    }),
  ],
}
