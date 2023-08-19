/* eslint "no-console": "off" */

const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");
const express = require(`express`)

// Enable static folder in dev, makes the static subsites work then
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`static`))
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);
        createNodeField({ node, name: "date", value: date.toISOString() });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostPage = path.resolve("src/templates/blog-post.jsx");
  const projectPostPage = path.resolve("src/templates/project-post.jsx");
  const blogTagPage = path.resolve("src/templates/blog-tags.jsx");
  const projectTagPage = path.resolve("src/templates/project-tags.jsx");

  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
   {
    blogPosts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content\/blog)/"  }}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                category
                date
              }
            }
          }
        }
    projectPosts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content\/projects)/"  }}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              date
            }
          }
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const projectTagSet = new Set();
  const blogTagSet = new Set();

  const blogPostsEdges = markdownQueryResult.data.blogPosts.edges;
  const projectPostsEdges = markdownQueryResult.data.projectPosts.edges;

  // Sort posts
  blogPostsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  // Sort posts
  projectPostsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  // Post page creating
  blogPostsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        blogTagSet.add(tag);
      });
    }

    createPage({
      path: edge.node.fields.slug,
      component: blogPostPage,
      context: {
        slug: edge.node.fields.slug,
      }
    });
  });

  projectPostsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        projectTagSet.add(tag);
      });
    }

    createPage({
      path: edge.node.fields.slug,
      component: projectPostPage,
      context: {
        slug: edge.node.fields.slug,
      }
    });
  });

  // Create tag pages
  projectTagSet.forEach(tag => {
    createPage({
      path: `/project-tags/${_.kebabCase(tag)}/`,
      component: projectTagPage,
      context: { tag }
    });
  });

  blogTagSet.forEach(tag => {
    createPage({
      path: `/blog-tags/${_.kebabCase(tag)}/`,
      component: blogTagPage,
      context: { tag }
    });
  });
};
