import React from "react";
import Img from "gatsby-image"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { css } from "@emotion/core"


class ProjectListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        cover: postEdge.node.frontmatter.cover,
        date: postEdge.node.fields.date,
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
              <div css={css`display: flex; flex-direction: row; color: var(--textTitle);`}>
                  <Img fixed={post.cover.childImageSharp.fixed}
                  alt="blog-icon"
                  css={css`margin-top: auto;`}/>
                  <h4 css={css`margin-bottom: auto; margin-top: auto; margin-left: ${rhythm(0.2)}`}> {post.title} </h4>
              </div>
            </Link>
            <hr css={css`margin-bottom: ${rhythm(0.5)};`}></hr>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectListing;
