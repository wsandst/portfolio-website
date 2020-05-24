import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import MainLayout from "../layout/layout";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { formatDate } from '../utils/global'


const MarkdownLayout = styled.div`
    max-width: 800px;
    padding: 0 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
  `

export default class BlogPostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    const hasContent = (postNode.html != "");
    const date = formatDate(post.date)
    return (
      <MainLayout>
       <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <MarkdownLayout>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <h1 css={css``}>
            {post.title}
          </h1>
          <span css={css`color: var(--textNormal); font-size: 85%;`}>
            {date}
          </span>
          <PostTags tags={post.tags} />
          <div>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
          </div>
        </MarkdownLayout>
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const blogPageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
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
