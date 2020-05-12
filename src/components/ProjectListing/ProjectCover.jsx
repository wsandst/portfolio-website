import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm, scale } from "../../utils/typography"

const ProjectBoxCSS = styled.div`
width: 300 px;
margin: ${rhythm(0.6)};
`

class ProjectCover extends React.Component {  
    render() {
      const post = this.props.post
      return (
        <ProjectBoxCSS>
            <Link to={post.path} key={post.title}>
            <div css={css`border-radius: 3px; background-color: gray; padding: ${rhythm(0.6)}; width: 300px; word-wrap: break-word;`}>
              <div css={css`position: relative; padding-bottom: ${rhythm(1.8)}`}>
                <h1 css={css`position: absolute; font-size:95%;`}>{post.title}</h1>
              </div>
              <Img
              className="project-cover"
              fixed={post.cover.childImageSharp.fixed}
              alt="cover"
              css={css`border-radius: 3px;`}
              />
            </div>
            </Link>
        </ProjectBoxCSS>
      );
    }
  }

  export default ProjectCover;
