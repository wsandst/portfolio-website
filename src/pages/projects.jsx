import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";
import { css } from "@emotion/react"

import MainLayout from "../layout/layout";
import ProjectListing from "../components/ProjectListing";
import config from "../../data/SiteConfig";

class ProjectsPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
        <Helmet title={`Projects | ${config.siteTitle}`} />
        <div css={css`margin-bottom: 7rem;`} className="projects-container">
          <h1 css={css`text-align: center; margin-top: 1rem;`}>Projects</h1>
          <ProjectListing postEdges={postEdges} />
        </div>
      </MainLayout>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(content/projects)/"}}
      sort: {fields: {date: DESC}}
    ) {
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
                fixed(width: 255, height: 339, quality: 90) {
                  ...GatsbyImageSharpFixed_withWebp
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
