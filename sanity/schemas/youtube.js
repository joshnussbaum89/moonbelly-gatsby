import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

// Preview component allows Katrina to preview video in editor
// Click this and scroll to 'React' to render the video to the frontend properly - // https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
const Preview = ({ value }) => {
  const { url } = value;
  const id = getYouTubeId(url);
  return <YouTube videoId={id} />;
};

export default {
  name: 'youtube',
  title: 'YouTube Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
};
