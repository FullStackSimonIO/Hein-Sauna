import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const BlogPreview: Block = {
  slug: 'blogPreview',
  interfaceName: 'Blog35',
  labels: {
    singular: 'Blog Vorschau',
    plural: 'Blog Vorschauen',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Untertitel',
    },
    {
      name: 'categoryLabel',
      type: 'text',
      label: 'Kategorie (z. B. "Tipps & Tricks")',
    },
    {
      name: 'maxItems',
      type: 'number',
      label: 'Maximale Anzahl angezeigter Tipps',
      defaultValue: 3,
    },

    {
      name: 'posts',
      label: 'Ausgewählte Posts',
      type: 'relationship',
      relationTo: 'posts', // <- wichtig!
      hasMany: true,
    },
    {
      name: 'buttonLabel',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'Alle anzeigen',
    },
    linkGroup({}),
  ],
}
