export default {
  name: 'pricingTier',
  title: 'Pricing Tier',
  type: 'document',
  fields: [
    {
      name: 'checkType',
      title: 'Check Type',
      type: 'string',
      options: {
        list: [
          { title: 'Basic', value: 'basic' },
          { title: 'Standard', value: 'standard' },
          { title: 'Enhanced', value: 'enhanced' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Starting Price (GBP)',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'turnaround',
      title: 'Turnaround Time',
      type: 'string',
    },
    {
      name: 'popular',
      title: 'Popular Badge',
      type: 'boolean',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};
