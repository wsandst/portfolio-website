import React from "react";
import { graphql } from "gatsby";


import Helmet from "react-helmet";
import { css } from "@emotion/core"

import MainLayout from "../layout/layout";
import BlogListing from "../components/BlogListing";
import config from "../../data/SiteConfig";

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
      <Helmet title={`Articles | ${config.siteTitle}`} />
      <div className="blog-container">
        <h1 css={css`max-width: 800px; padding: 0 1.5rem; margin-left: auto; margin-right: auto; margin-top: 2rem;`}>Articles</h1>
        <BlogListing postEdges={postEdges}/>
      </div>
      </MainLayout>
    );
  }
}

export default BlogPage;

export const blogPageQuery = graphql`
query BlogQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"  }}, sort: { fields: [fields___date], order: DESC })
  {
    edges {
      node {
        fields {
          slug
          date
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          cover {
            childImageSharp {
            fixed(width: 50, height: 50, quality:90) {
              ...GatsbyImageSharpFixed
                }
            }
          }
          date
        }
      }
    }
  }
}
`;