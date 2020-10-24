import React, { Component } from "react";
import { Link } from "gatsby";

import styled from "@emotion/styled"
import _ from "lodash";

import "../layout/layout.css";

const TagContainerCSS = styled.div`
display: inline-block; 
padding: 0.2rem 0.5rem; 
margin: 0 0.5rem 0.5rem 0; 
background-color: var(--button); 
border-radius: 6px; 
font-size: 80%;
&:hover {
  background: var(--buttondown); 
  color: var(--textNormal);
} 
a {
    color: var(--textNormal);
}
`

class BlogTagContainer extends Component {
  render() {
    const tag = this.props.tag;
    const toPath = (tag.tagType )
    return (
      <TagContainerCSS>
        <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/blog-tags/${_.kebabCase(tag)}`}
            >
              {tag}
          </Link>
      </TagContainerCSS>
    );
  }
}

// Component for listing the tags of a blog post
class BlogPostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <BlogTagContainer tag={tag}>
            </BlogTagContainer>
          ))}
      </div>
    );
  }
}

export default BlogPostTags;
