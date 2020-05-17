import React from "react";
import { Link, graphql } from "gatsby"

import Helmet from "react-helmet";
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import MainLayout from "../layout/layout";
import Header from "../layout/header";
import SEO from "../components/SEO";
import ProjectListing from "../components/ProjectListing";
import AboutShort from "../components/AboutShort";
import config from "../../data/SiteConfig";

class HomePage extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <div>
          <Helmet title={config.siteTitle} />
          <SEO />
          <Header>
          </Header>
          <MainLayout>
            <div className="landing-container">
              <AboutShort></AboutShort>
              <div className="posts-container">
                <ProjectListing postEdges={postEdges} />
                <Link to={"/projects/"} css={css`margin-top: ${rhythm(1)}; display: flex; justify-content: center; font-size:90%; color: var(--textNormal);
                &:hover {color: var(--textHighlight);} `}> 
                More Projects
                </Link>
              </div>
            </div>
          </MainLayout>
        </div>
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
  