import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";

import MainLayout from "../layout/layout";
import ProjectListing from "../components/ProjectListing";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
        <div className="category-container">
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <ProjectListing postEdges={postEdges} />
        </div>
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
              fixed(width: 125, height: 125) {
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
