import React from "react";

import { css } from "@emotion/core"

class ProjectListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    console.log(this.props);
    const postList = this.getPostList();
    console.log(postList);
    return (
      <div css={css`display: flex; justify-content: center; flex-wrap: wrap; flex-direction: column`}>
        {
        postList.map(post => (
          <div>
            <h2> {post.title} </h2>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectListing;
