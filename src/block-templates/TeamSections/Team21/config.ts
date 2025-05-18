import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Team21: Block = {
  slug: 'team21',
  interfaceName: 'Team21',
  labels: {
    singular: 'Team 21',
    plural: 'Team 21',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Unser großartiges Team“',
        description: 'Optionaler kurzer Text über der Team-Sektion.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Lerne uns kennen“',
        description: 'Hauptüberschrift für die Team-Sektion.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description:
          'Optionaler Einleitungstext unterhalb der Überschrift. Unterstützt Formatierungen.',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'teamMembers',
      type: 'array',
      label: 'Team-Mitglieder',
      required: true,
      minRows: 1,
      admin: {
        description: 'Füge mindestens ein Team-Mitglied hinzu.',
      },
      labels: {
        singular: 'Team Member',
        plural: 'Team Members',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Profilbild',
          required: false,
          admin: {
            description: 'Optionales Foto des Team-Mitglieds.',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
          admin: {
            placeholder: 'z. B. „Anna Beispiel“',
            description: 'Name des Team-Mitglieds.',
          },
        },
        {
          name: 'jobTitle',
          type: 'text',
          label: 'Position',
          required: true,
          admin: {
            placeholder: 'z. B. „Produktmanager“',
            description: 'Berufsbezeichnung des Team-Mitglieds.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Steckbrief',
          required: false,
          admin: {
            description: 'Optionaler kurzer Steckbrief zum Team-Mitglied.',
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          required: false,
          admin: {
            description: 'Füge bis zu 3 Social-Media-Profile hinzu.',
          },
          labels: {
            singular: 'Social Link',
            plural: 'Social Links',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Plattform',
              required: true,
              options: [
                { label: 'Dribbble', value: 'dribbble' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Twitter', value: 'twitter' },
              ],
              admin: {
                description: 'Wähle die Social-Media-Plattform aus.',
              },
            },
            {
              name: 'href',
              type: 'text',
              label: 'URL',
              required: true,
              admin: {
                placeholder: 'https://…',
                description: 'Link zum Social-Media-Profil.',
              },
            },
          ],
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: { maxRows: 2 },
    }),
  ],
}

export default Team21
