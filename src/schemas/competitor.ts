export default {
    name: 'competitor',
    title: 'Competitors',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.required()
      },
      {
        name: 'pros',
        title: 'Pros',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'cons',
        title: 'Cons',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  'Content Creation',
                  'Analytics',
                  'Automation',
                  'Export Options',
                  'Integration'
                ]
              }
            },
            {
              name: 'name',
              title: 'Feature Name',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'hasFeature',
              title: 'Has Feature',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'note',
              title: 'Additional Note',
              type: 'string'
            },
            {
              name: 'highlight',
              title: 'Highlight Feature',
              type: 'boolean',
              initialValue: false
            }
          ]
        }]
      }
    ]
  }