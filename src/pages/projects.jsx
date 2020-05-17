import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";

import MainLayout from "../layout/layout";
import ProjectListing from "../components/ProjectListing";
import config from "../../data/SiteConfig";

class ProjectsPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
        <Helmet title={`Projects | ${config.siteTitle}`} />
        <div className="projects-container">
          <ProjectListing postEdges={postEdges} />
        </div>
      </MainLayout>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
query ProjectsQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects)/"  }}, sort: { fields: [fields___date], order: DESC })
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
