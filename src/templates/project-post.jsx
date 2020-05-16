import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import ProjectSummary from "../components/ProjectSummary";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import Header from "../layout/header";
import "./b16-tomorrow-dark.css";
import "./post.css";
import styled from "@emotion/styled"
import { css } from "@emotion/core"


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
      <Layout>
        <Header>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
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
        </Header>
      </Layout>
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
      }
      fields {
        slug
        date
      }
    }
  }
`;

