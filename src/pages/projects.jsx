import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import Header from "../layout/header";
import config from "../../data/SiteConfig";
import ProjectListing from "../components/ProjectListing/ProjectListing";

class ProjectsPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={`Projects | ${config.siteTitle}`} />
        <Header>
        <div className="projects-container">
          <ProjectListing postEdges={postEdges} />
        </div>
        </Header>
      </Layout>
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
