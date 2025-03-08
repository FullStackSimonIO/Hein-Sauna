import { Block } from 'payload'

const Gallery27: Block = {
  slug: 'gallery27',
  interfaceName: 'Gallery27',
  labels: {
    singular: 'Gallery Section',
    plural: 'Gallery Sections',
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
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Gallery Image',
        },
      ],
    },
  ],
}

export default Gallery27
