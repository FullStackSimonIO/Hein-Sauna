import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const Testimonial23: Block = {
  slug: 'test23',
  interfaceName: 'Testimonial23',
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
      type: 'textarea',
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
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Testimonial Quote',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media', // Ensure you have a media collection
          label: 'Company Logo',
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
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
}

export default Testimonial23
