import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";
import { css } from "@emotion/react"

import MainLayout from "../layout/layout";
import ProjectListing from "../components/ProjectListing";
import config from "../../data/SiteConfig";

export default class ProjectTagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
        <Helmet title={`Projects tagged as "${tag}" | ${config.siteTitle}`} />
        <div className="tag-container" css={css`margin-bottom: 7rem; padding-bottom: 1rem;`}>
          <h1 css={css`text-align: center; margin-top: 1rem;`}>Projects tagged as <u>{tag}</u></h1>
          <ProjectListing postEdges={postEdges} />
        </div>
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectTagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: {fields: {date: DESC}}
      filter: {fileAbsolutePath: {regex: "/(content/projects)/"}, frontmatter: {tags: {in: [$tag]}}}
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
                fixed(width: 255, height: 339, quality: 90) {
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
