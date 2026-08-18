export default {
  name: 'aboutContent',
  title: 'About Page Content',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'story',
      title: 'Company Story',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
    },
  ],
};
