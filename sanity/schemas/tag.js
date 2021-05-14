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
    // Main category - Recipes
    {
      name: 'recipes',
      title: 'Recipes',
      type: 'boolean',
      description: 'Select all subcategories that apply below.',
    },
    // Recipes subcategories
    // Recipe Type
    {
      name: 'recipeType',
      title: 'Recipe Type',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    // Ingredient
    {
      name: 'ingredient',
      title: 'Ingredient',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    // Restriction
    {
      name: 'restriction',
      title: 'Restriction',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    // Main category - DIY
    {
      name: 'diy',
      title: 'DIY',
      type: 'boolean',
      description: 'Select all subcategories that apply below.',
    },
    // DIY subcategories
    // Materials
    {
      name: 'materials',
      title: 'Materials',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    // Location
    {
      name: 'location',
      title: 'Location',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    // Placeholder *** Change to real subcategory
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  // Customise what preview looks like
  preview: {
    select: {
      name: 'tag',
      recipes: 'recipes',
      diy: 'diy',
    },
    // Dynamically change emoji based on category
    prepare: ({ name, recipes, diy }) => ({
      title: `${name} ${recipes ? ' 🧑‍🍳' : diy ? ' 🛠️' : ''}`,
    }),
  },
};
