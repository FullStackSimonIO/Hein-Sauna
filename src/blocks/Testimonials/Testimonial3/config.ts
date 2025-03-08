import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const Testimonial3: Block = {
  slug: 'test3',
  interfaceName: 'Testimonial3',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
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
      name: 'testimonials',
      type: 'array',
      required: true,
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Ensure you have a media collection
          label: 'Company Logo or Testimonial Image',
        },
        {
          name: 'quote',
          type: 'richText',
          required: true,
          label: 'Testimonial Text',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media', // Ensure you have a media collection
          label: 'Avatar',
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Person Name',
        },
        {
          name: 'position',
          type: 'text',
          label: 'Job Position',
        },
        {
          name: 'companyName',
          type: 'text',
          label: 'Company Name',
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

export default Testimonial3
