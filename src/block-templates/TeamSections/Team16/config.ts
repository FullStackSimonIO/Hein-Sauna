import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Team16: Block = {
  slug: 'team16',
  interfaceName: 'Team16',
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
    {
      name: 'footerContent',
      type: 'group',
      label: 'Footer Section',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Footer Heading',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Footer Description',
        },
        {
          name: 'button',
          type: 'group',
          label: 'Footer Button',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Button Text',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'Button URL',
            },
            {
              name: 'appearance',
              type: 'select',
              required: true,
              label: 'Button Appearance',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Outline', value: 'outline' },
              ],
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

export default Team16
