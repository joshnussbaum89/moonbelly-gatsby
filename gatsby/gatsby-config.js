module.exports = {
  siteMetadata: {
    title: 'Moonbelly Makes',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ubyb73h6',
        dataset: 'production',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // create tracking code here: https://analytics.google.com/analytics/
        // you need a working URL to link analytics
        trackingId: '1234',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
  ],
};
