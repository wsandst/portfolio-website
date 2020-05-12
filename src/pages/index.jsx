import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import ProjectListing from "../components/ProjectListing/ProjectListing";

class HomePage extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <Layout>
          <div className="landing-container">
            <div className="posts-container">
              <Helmet title={config.siteTitle} />
              <SEO />
              <h1>Home page</h1>
              <ProjectListing postEdges={postEdges} />
            </div>
          </div>
        </Layout>
      );
    }
  }
  
  export default HomePage;
  
  /* eslint no-undef: "off" */
  // Show only pinned projects
  export const pageQuery = graphql`
    query IndexQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects)/"  }, frontmatter:{ tags: { in: ["pinned"] } }}, sort: { fields: [fields___date], order: DESC })
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
  