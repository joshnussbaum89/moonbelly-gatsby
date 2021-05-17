import { FaPencilAlt as icon } from 'react-icons/fa';

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
      description: 'Name of the blog post.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'A "slug" needs to be generated to sync up your comments and blog posts.',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'diy',
      title: 'DIY',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'recipe',
      title: 'Recipe',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      title: 'Cover',
      name: 'cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'text',
      title: 'Blog Post',
      type: 'array',
      description: 'Enter your blog post here.',
      of: [
        {
          type: 'block',
        },
        // allow user to add image to blog post
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        // allow user to add video to blog post
        {
          type: 'youtube',
        },
      ],
    },
    {
      name: 'tag',
      title: 'Tags',
      type: 'array',
      description:
        'Add tags to your post here. You can add/edit tags and tag sub-categories in the "Tags" Content section :)',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'tag',
            },
          ],
        },
      ],
    },
  ],
};
