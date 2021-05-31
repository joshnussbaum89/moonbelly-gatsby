const path = require(`path`);

// Blog post pages
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

// Recipe tag pages
async function turnRecipeTagsIntoPages({ graphql, actions }) {
  const { createPage } = actions;
  // 1. get a template for this page
  const recipeTagTemplate = path.resolve('./src/pages/recipes.js');
  // 2. query all tags
  const { data } = await graphql(`
    query {
      tags: allSanityTag(filter: { recipes: { eq: true } }) {
        nodes {
          tag
        }
      }
    }
  `);

  // 3. createPage for that recipe tag
  data.tags.nodes.forEach((tag) => {
    createPage({
      // url for the new page
      path: `category/${tag.tag}`,
      component: recipeTagTemplate,
      context: {
        category: tag.tag,
      },
    });
  });
}

// DIY tag pages
async function turnDiyTagsIntoPages({ graphql, actions }) {
  const { createPage } = actions;
  // 1. get a template for this page
  const diyTagTemplate = path.resolve('./src/pages/diy.js');
  // 2. query all tags
  const { data } = await graphql(`
    query {
      tags: allSanityTag(filter: { diy: { eq: true } }) {
        nodes {
          tag
        }
      }
    }
  `);

  // 3. createPage for that diy tag
  data.tags.nodes.forEach((tag) => {
    createPage({
      // url for the new page
      path: `category/${tag.tag}`,
      component: diyTagTemplate,
      context: {
        category: tag.tag,
      },
    });
  });
}

exports.createPages = async (params) => {
  // Created pages dynamically
  await Promise.all([
    // 1. Posts
    turnPostsIntoPages(params),
    // 2. Recipe Tags
    turnRecipeTagsIntoPages(params),
    // 3. Diy tags
    turnDiyTagsIntoPages(params),
  ]);
};
