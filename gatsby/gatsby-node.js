const path = require(`path`);

async function turnPostsIntoPages({ graphql, actions }) {
  const { createPage } = actions;
  // 1. get a template for this page
  const postTemplate = path.resolve('./src/templates/Post.js');
  // 2. query all posts
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          title
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. loop over each post and create a page for that post
  data.posts.nodes.forEach((post) => {
    createPage({
      // What is the url for this new page?
      path: `post/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  // Created pages dynamically
  // 1. Posts
  await turnPostsIntoPages(params);
  // 2. Tags
};
