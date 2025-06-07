import { Block } from 'payload'

export const ShowroomPreview: Block = {
  slug: 'showroomPreview',
  interfaceName: 'ShowroomPreview',
  labels: {
    singular: 'Showroom Preview',
    plural: 'Showroom Previews',
  },
  fields: [
    {
      name: 'link',
      type: 'text',
      label: 'Link to Virtual Tour',
      required: true,
    },
  ],
}
