import { FaTicketAlt as icon } from 'react-icons/fa';

export default {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'tag',
      title: 'Post Tags',
      type: 'string',
      description:
        'Enter tags here that will later be associated with your posts ex/ vegan',
    },
    {
      name: 'recipes',
      title: 'Recipes',
      type: 'boolean',
      option: {
        layout: 'checkbox',
      },
    },
    {
      name: 'diy',
      title: 'DIY',
      type: 'boolean',
      option: {
        layout: 'checkbox',
      },
    },
  ],
  // customise what preview looks like
  preview: {
    select: {
      name: 'tag',
      recipes: 'recipes',
      diy: 'diy',
    },
    // dynamically change emoji based on category
    prepare: ({ name, recipes, diy }) => ({
      title: `${name} ${recipes ? ' 🧑‍🍳' : diy ? ' 🛠️' : ''}`,
    }),
  },
};
