import React from "react";
import Img from "gatsby-image"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { css } from "@emotion/core"

class BlogListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        cover: postEdge.node.frontmatter.cover,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div css={css`max-width: 800px; padding: 0 1.5rem; margin-left: auto; margin-right: auto;`}>
        <div css={css`display: flex; justify-content: center; flex-wrap: wrap; flex-direction: column;`}>
          {
          postList.map(post => (
            <div>
            <Link to={post.path} key={post.title}>
              <div css={css`display: flex; flex-direction: row; color: var(--textTitle); align-items: start;
              padding-bottom: ${rhythm(0.7)}; padding-top: ${rhythm(0.7)};
              &:hover { background-color: var(--hover)}; border-radius: 5px;`}>
                <div css={css`margin-bottom: auto;`}>
                  <Img fixed={post.cover.childImageSharp.fixed}
                  alt="blog-post-icon"
                  css={css``}/>
                </div>
                <div css={css`display: flex; flex-direction: column; margin-left: ${rhythm(0.5)}; margin-top: auto; margin-bottom: auto;`}>
                  <h4 css={css`color: var(--textNormal); text-align: left; margin-bottom: ${rhythm(0.1)};`}> {post.title} </h4>
                  <span css={css`font-size: 75%; color: var(--textLight)`}>{post.date} &nbsp;·&nbsp; {post.timeToRead} min read</span>
                </div>
              </div>
            </Link>
            <hr css={css`margin-bottom: 0;`}></hr>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogListing;
