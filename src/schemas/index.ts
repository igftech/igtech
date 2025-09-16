// Sanity CMS Schema Definitions
export const schemaTypes = [
  {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Site Title',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'description',
        title: 'Site Description',
        type: 'text'
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image'
      },
      {
        name: 'primaryColor',
        title: 'Primary Color',
        type: 'string'
      },
      {
        name: 'secondaryColor',
        title: 'Secondary Color', 
        type: 'string'
      }
    ]
  },
  {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Main Title',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'ctaText',
        title: 'Call to Action Text',
        type: 'string'
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image'
      },
      {
        name: 'stats',
        title: 'Statistics',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'description', title: 'Description', type: 'string' }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'aboutSection',
    title: 'About Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'story',
        title: 'Our Story',
        type: 'text'
      },
      {
        name: 'promise',
        title: 'Our Promise',
        type: 'text'
      },
      {
        name: 'values',
        title: 'Values',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
              { name: 'icon', title: 'Icon', type: 'string' }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'program',
    title: 'Program',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Program Title',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'string'
      },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' }
      }
    ]
  },
  {
    name: 'mathTournament',
    title: 'Math Tournament',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tournament Title',
        type: 'string'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string'
      },
      {
        name: 'edition',
        title: 'Edition',
        type: 'string'
      },
      {
        name: 'date',
        title: 'Tournament Date',
        type: 'datetime'
      },
      {
        name: 'venue',
        title: 'Venue Name',
        type: 'string'
      },
      {
        name: 'address',
        title: 'Venue Address',
        type: 'text'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'registrationOpen',
        title: 'Registration Open',
        type: 'boolean'
      },
      {
        name: 'prizes',
        title: 'Prizes',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'position', title: 'Position', type: 'string' },
              { name: 'amount', title: 'Prize Amount', type: 'string' }
            ]
          }
        ]
      },
      {
        name: 'timeline',
        title: 'Tournament Timeline',
        type: 'array',
        of: [
          {
            type: 'object', 
            fields: [
              { name: 'date', title: 'Date', type: 'string' },
              { name: 'event', title: 'Event', type: 'string' },
              { name: 'status', title: 'Status', type: 'string' }
            ]
          }
        ]
      },
      {
        name: 'eligibility',
        title: 'Eligibility Criteria',
        type: 'array',
        of: [{ type: 'string' }]
      }
    ]
  },
  {
    name: 'contactInfo',
    title: 'Contact Information',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string'
      },
      {
        name: 'offices',
        title: 'Offices',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', title: 'Office Name', type: 'string' },
              { name: 'address', title: 'Address', type: 'text' },
              { name: 'phone', title: 'Phone', type: 'string' },
              { name: 'email', title: 'Email', type: 'string' },
              { name: 'hours', title: 'Hours', type: 'string' }
            ]
          }
        ]
      },
      {
        name: 'socialLinks',
        title: 'Social Media Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'platform', title: 'Platform', type: 'string' },
              { name: 'url', title: 'URL', type: 'url' }
            ]
          }
        ]
      }
    ]
  }
];