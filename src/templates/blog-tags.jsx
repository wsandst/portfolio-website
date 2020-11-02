import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";
import { css } from "@emotion/core"

import MainLayout from "../layout/layout";
import BlogListing from "../components/BlogListing";
import config from "../../data/SiteConfig";

export default class BlogTagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
        <Helmet title={`Articles tagged as "${tag}" | ${config.siteTitle}`} />
        <div className="tag-container" css={css`max-width: 800px; padding: 0 1.5rem; margin-left: auto; margin-right: auto; margin-top: 2rem; margin-bottom: 2rem;`}>
    <h1 css={css`max-width: 800px; padding: 0 1.5rem; margin-left: auto; margin-right: auto; margin-top: 2rem;`}>Articles tagged as <u>{tag}</u></h1>
            <BlogListing postEdges={postEdges} />
        </div>
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogTagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: {regex: "/(blog)/"  }, frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`;
