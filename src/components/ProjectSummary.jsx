import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import GitHubButton from "../../node_modules/react-github-btn/index";

import PostTags from "./ProjectPostTags";
import DownloadButton from "./DownloadButton";
import "../layout/layout.css";

// Component for the summary of a project which is at the top of a project markdown page
class ProjectSummary extends React.Component {  
    render() {
    const post = this.props.post;
    const date = post.date;
    const authorSnippet = (post.authors == "") ? date : (date + " \u00a0·\u00a0 " + post.authors)
    return (
        <div css={css`max-width: 1000px; margin-top: ${rhythm(1.5)}; padding-bottom: ${rhythm(0.5)}; margin-left: auto; margin-right: auto; `}>
        <div css={css`display: flex; justify-content: center; flex-direction: row; 
                        @media (max-width: 800px) { flex-direction: column; margin-bottom: ${rhythm(5)};}`}>
            <ProjectCoverSimple post= {post}></ProjectCoverSimple>
            <div css={css`margin-left: ${rhythm(0.7)}; max-width: 50%; 
             @media (max-width: 800px) { max-width: 100%; margin-left: 0;}`}>
                <h1 css={css`margin-bottom: ${rhythm(0.5)};`}> {post.title} </h1>
                <div dangerouslySetInnerHTML={{ __html: post.description }} />
                <div css={css`margin-top: ${rhythm(1)};`}>
                    <h3 css={css`margin-bottom: ${rhythm(0.2)}`}> Aim </h3>
                    <div dangerouslySetInnerHTML={{ __html: post.aim }} />
                </div>
                <div css={css`display: flex; flex-direction: row;`}>
                  <div css={css`margin-top:${rhythm(0.7)}; margin-bottom: ${rhythm(0.2)};`}>
                      <GitHubButton href={post.github} data-size="large"> View Code</GitHubButton>
                  </div>
                  <div css={css`margin-top:${rhythm(0.7)}; margin-bottom: ${rhythm(0.2)}; margin-left: ${rhythm(1)} `}>
                      <DownloadButton location={post.download}> Download</DownloadButton>
                  </div>
                </div>
                <div css={css``}>
                  <span css={css`color: var(--textLight); font-size: 80%;`}> {authorSnippet} </span>
                </div>
                <div css={css`margin-top: ${rhythm(0.5)};`} >
                    <PostTags tags={post.tags} />
                </div>
            </div>
        </div>
      </div>
      
    );
  }
}

const ProjectBoxCSS = styled.div`
border-radius: 3px; 
background-color: var(--bgup1);
padding: ${rhythm(0.6)}; 
word-wrap: break-word;
transition: all .3s ease;
box-shadow: 2px 6px 30px var(--backgroundShadow);
@media (max-width: 800px) { 
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${rhythm(1)};
}
`

class ProjectCoverSimple extends React.Component {  
    render() {
      const post = this.props.post
      return (
        <div css={css`margin: ${rhythm(0.6)}; margin-top: auto; margin-bottom: auto; flex-grow: 1; `}>
            <ProjectBoxCSS>
              <Img
              className="project-cover"

              fluid={post.cover.childImageSharp.fluid}
              alt="cover"
              css={css`height: 100%; width: 100%;  `}
              />
            </ProjectBoxCSS>
        </div>
      );
    }
  }


export default ProjectSummary;
