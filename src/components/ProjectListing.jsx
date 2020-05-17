import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import ProjectCover from "./ProjectCover"

class ProjectListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    console.log(postList);
    return (
      <div css={css`display: flex; justify-content: center; flex-wrap: wrap`}>
        {/* Your post list here. */
        postList.map(post => (
          <ProjectCover post={post}/>
        ))}
      </div>
    );
  }
}

export default ProjectListing;
