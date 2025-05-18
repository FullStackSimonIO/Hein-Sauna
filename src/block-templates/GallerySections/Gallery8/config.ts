import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Gallery8: Block = {
  slug: 'gallery8',
  interfaceName: 'Gallery8',
  labels: {
    singular: 'Gallery 8',
    plural: 'Gallery 8',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      label: 'Images',
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Image Link (Optional)',
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default Gallery8
