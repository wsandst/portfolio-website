import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

import "../layout/layout.css";

const ProjectBoxCSS = styled.div`
border-radius: 3px; 
background-color: var(--bgup1);
padding: ${rhythm(0.6)}; 
width: 285px; word-wrap: break-word;
transition: all .3s ease;
box-shadow: 2px 6px 30px var(--backgroundShadow);
&:hover {
  box-shadow: 2px 6px 30px var(--highlightShadow);
  h1 {transition: all .3s ease; color: var(--textHighlight);}
}
`
// Component for the cover art and title of a project
class ProjectCover extends React.Component {  
    render() {
      const post = this.props.post
      return (
        <div css={css`width: 285 px; margin: ${rhythm(0.6)}; transition: all .3s ease;
        &:hover { margin-top: ${rhythm(0.4)};}; @media (max-width: 1320px) {margin-right: ${rhythm(0.4)}; margin-left: ${rhythm(0.4)};}`}>
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
