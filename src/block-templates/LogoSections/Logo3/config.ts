import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

export const Logo3: Block = {
  slug: 'logo3',
  interfaceName: 'Logo3',
  labels: {
    singular: 'Logo 3',
    plural: 'Logo 3',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Markenlogos“',
        description: 'Hauptüberschrift für die Logo-Sektion.',
      },
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens ein Logo hinzu, das in dieser Sektion angezeigt wird.',
      },
      labels: {
        singular: 'Logo',
        plural: 'Logos',
      },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Bild',
          required: true,
          admin: {
            description: 'Wähle ein Logo aus der Media-Collection.',
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

export default Logo3
