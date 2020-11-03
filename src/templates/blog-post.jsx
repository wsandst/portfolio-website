import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image"

import Helmet from "react-helmet";
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import MainLayout from "../layout/layout";
import PostTags from "../components/BlogPostTags";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";


const MarkdownLayout = styled.div`
    max-width: 800px;
    padding: 0 1.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    margin-bottom: 8rem;
    .post-meta
    {
      padding-top: 1.5rem;
    }
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
    const date = postNode.frontmatter.date;
    return (
      <MainLayout>
       <Helmet> <title>{`${post.title} | ${config.siteTitle}`}</title> </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
            <div css={css`display: flex; flex-direction: row; margin-bottom: 3rem; 
            max-width: 800px; padding: 0 1.5rem; margin-left: auto; margin-right: auto; margin-top: 2rem;
            @media (max-width: 620px) {flex-direction: column; margin-top: 0.5rem;}`}>
              <div css={css`display: none;}
                            @media (max-width: 620px) {display: initial; margin: 0; }`}>
              <Img
              className="project-cover"
              fixed={post.cover.childImageSharp.fixed}
              alt="cover"
              css={css`border-radius: 3px; display: none; min-width: 60px; max-width: 60px; min-height: 60px; max-height: 60px;}`}
              />
              </div>
              <div css={css`display: flex; flex-direction: column;  `}>
                <h1 css={css`margin: 0; padding-right: 2rem; padding-top: 1rem;
                @media (max-width: 620px) {font-size: 170%; padding-top: 0.2rem;}`}>
                  {post.title}
                </h1>
                <span css={css`color: var(--textLight); font-size: 85%; padding-top: 0.5rem; padding-bottom: 1rem;`}>
                  {date} &nbsp;·&nbsp; {postNode.timeToRead} min read
                </span>
                <PostTags tags={post.tags} />
              </div>
              <div css={css`@media (max-width: 620px) { display: none }`}>
              <Img
              className="project-cover"
              fixed={post.cover.childImageSharp.fixed}
              alt="cover"
              css={css`border-radius: 3px; min-width: 150px; padding-left: 1rem; margin-bottom: 1rem;`}
              />
              </div>
          </div>
          <MarkdownLayout>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
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
            fixed(width: 150, height: 150, quality:90) {
            ...GatsbyImageSharpFixed
              }
          }
        }
        date(formatString: "MMMM Do, YYYY")
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
