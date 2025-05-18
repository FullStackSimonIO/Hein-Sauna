import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Team22: Block = {
  slug: 'team22',
  interfaceName: 'Team22',
  labels: {
    singular: 'Team Section',
    plural: 'Team Sections',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
    },
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
      name: 'teamMembers',
      type: 'array',
      required: true,
      labels: {
        singular: 'Team Member',
        plural: 'Team Members',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Profile Image',
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Name',
        },
        {
          name: 'jobTitle',
          type: 'text',
          required: true,
          label: 'Job Title',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
        },
        {
          name: 'socialLinks',
          type: 'array',
          labels: {
            singular: 'Social Link',
            plural: 'Social Links',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              required: true,
              label: 'Platform',
              options: [
                { label: 'Dribbble', value: 'dribbble' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Twitter', value: 'twitter' },
              ],
            },
            {
              name: 'href',
              type: 'text',
              required: true,
              label: 'URL',
            },
          ],
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

export default Team22
