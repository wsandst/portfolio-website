import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm, scale } from "../../utils/typography"

const ProjectBoxCSS = styled.div`
border-radius: 3px; 
background-color: 
gray; padding: ${rhythm(0.6)}; 
width: 300px; word-wrap: break-word;
transition: all .3s ease;
&:hover {
  box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.2);
}
`

class ProjectCover extends React.Component {  
    render() {
      const post = this.props.post
      return (
        <div css={css`width: 300 px; margin: ${rhythm(0.6)};`}>
            <Link to={post.path} key={post.title}>
            <ProjectBoxCSS>
              <div css={css`position: relative; padding-bottom: ${rhythm(1.8)}`}>
                <h1 css={css`position: absolute; font-size:95%;`}>{post.title}</h1>
              </div>
              <Img
              className="project-cover"
              fixed={post.cover.childImageSharp.fixed}
              alt="cover"
              css={css`border-radius: 3px;`}
              />
            </ProjectBoxCSS>
            </Link>
        </div>
      );
    }
  }

  export default ProjectCover;
