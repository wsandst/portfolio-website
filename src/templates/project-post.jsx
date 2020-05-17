import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../layout/layout";
import Header from "../layout/header";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import ProjectSummary from "../components/ProjectSummary";
import config from "../../data/SiteConfig";


const MarkdownLayout = styled.div`
    max-width: 800px;
    padding: 0 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
  `

export default class ProjectPostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <div>
       <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <Header> </Header>
        <Layout>
          <ProjectSummary post={post}> </ProjectSummary>
          <hr></hr>
          <MarkdownLayout>
            <SEO postPath={slug} postNode={postNode} postSEO />
            <div>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              <div className="post-meta">
                <PostTags tags={post.tags} />
              </div>
            </div>
          </MarkdownLayout>
        </Layout>
      </div>
    );
  }
}

//<SocialLinks postPath={slug} postNode={postNode} />
//<Disqus postNode={postNode} />
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 372, maxHeight: 494, quality:90) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 372, height: 494, quality:90) {
            ...GatsbyImageSharpFixed
              }
          }
        }
        date
        category
        tags
        description
        aim
        github
      }
      fields {
        slug
        date
      }
    }
  }
`;

