import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";

import MainLayout from "../layout/layout";
import ProjectListing from "../components/ProjectListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <div className="tag-container">
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <ProjectListing postEdges={postEdges} />
        </div>
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
              fixed(width: 274, height: 365, quality:90) {
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
