import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

const Team2: Block = {
  slug: 'team2',
  interfaceName: 'Team2',
  labels: {
    singular: 'Team 2',
    plural: 'Team 2',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Unser Team“',
        description: 'Optionaler kurzer Text oberhalb der Team-Überschrift.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Lerne unser Team kennen“',
        description: 'Hauptüberschrift für die Team-Sektion.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: false,
      admin: {
        description: 'Optionaler Einleitungstext. Unterstützt Fettschrift, Listen, Links etc.',
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
            description: 'Optional: Foto des Team-Mitglieds.',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
          admin: {
            placeholder: 'z. B. „Max Mustermann“',
            description: 'Name des Team-Mitglieds.',
          },
        },
        {
          name: 'jobTitle',
          type: 'text',
          label: 'Position',
          required: true,
          admin: {
            placeholder: 'z. B. „Lead Developer“',
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
          labels: {
            singular: 'Social Link',
            plural: 'Social Links',
          },
          admin: {
            description: 'Füge bis zu 3 Social-Media-Profile hinzu.',
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
                description: 'Link zum Profil des Team-Mitglieds.',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer-Bereich',

      admin: {
        description: 'Optionaler Footer unter den Team-Mitgliedern.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Footer-Überschrift',
          required: true,
          admin: {
            placeholder: 'z. B. „Mehr erfahren“',
            description: 'Überschrift im Footer.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Footer-Beschreibung',
          required: false,
          admin: {
            description: 'Beschreibungstext im Footer.',
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
          name: 'button',
          type: 'group',
          label: 'Footer-Button',

          admin: {
            description: 'Konfiguration des Footer-Buttons.',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Button-Text',
              required: true,
              admin: {
                placeholder: 'z. B. „Kontaktieren“',
                description: 'Text des Buttons.',
              },
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button-URL',
              required: true,
              admin: {
                placeholder: 'https://…',
                description: 'Ziel-URL des Buttons.',
              },
            },
            {
              name: 'appearance',
              type: 'select',
              label: 'Button-Variante',
              required: true,
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Outline', value: 'outline' },
              ],
              admin: {
                description: 'Darstellungsvariante des Buttons.',
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

export default Team2
