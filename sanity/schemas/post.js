import { FaPencilAlt as icon } from 'react-icons/fa';

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon,
  fields: [
    {
      name: 'post',
      title: 'Post Title',
      type: 'string',
      description: 'Name of the blog post',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'post',
        maxLength: 100,
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
      description: 'Enter your blog post here',
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
      ],
    },
  ],
};
