import React from "react";
import { Link, graphql } from "gatsby"

import Helmet from "react-helmet";
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

import MainLayout from "../layout/layout";
import SEO from "../components/SEO";
import ProjectListing from "../components/ProjectListing";
import AboutShort from "../components/AboutShort";
import config from "../../data/SiteConfig";

class HomePage extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <MainLayout>
          <SEO />
          <AboutShort></AboutShort>
          <div className="posts-container" css={css`height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-grow: 1;`}>
            <ProjectListing postEdges={postEdges} />
            <Link to={"/projects/"} css={css`margin-top: ${rhythm(1)}; padding-bottom: ${rhythm(4.5)}; display: flex; justify-content: center; font-size:90%; color: var(--textNormal);
            &:hover {color: var(--textHighlight);} `}> 
            More Projects
            </Link>
          </div>
        </MainLayout>
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
                fixed(width: 255, height: 339, quality:90) {
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
  