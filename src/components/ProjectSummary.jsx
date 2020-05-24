import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import GitHubButton from "../../node_modules/react-github-btn/index";

import PostTags from "./PostTags";
import "../layout/layout.css";
import { formatDate } from '../utils/global'

class ProjectSummary extends React.Component {  
    render() {
    const post = this.props.post;
    const date = formatDate(post.date)
    const authorSnippet = (post.authors == "") ? date : (post.authors + "   |  " + date)
    return (
        <div css={css`max-width: 1000px; margin-top: ${rhythm(1.5)}; margin-bottom: ${rhythm(1.5)}; margin-left: auto; margin-right: auto; `}>
        <div css={css`display: flex; justify-content: center; flex-direction: row;
                        @media (max-width: 750px) { flex-direction: column;}`}>
            <ProjectCoverSimple post= {post}></ProjectCoverSimple>
            <div css={css`margin-left: ${rhythm(0.7)}; max-width: 50%; 
             @media (max-width: 750px) { max-width: 100%;}`}>
                <h1 css={css`margin-bottom: ${rhythm(0.5)};`}> {post.title} </h1>
                <span> {post.description} </span>
                <div css={css`margin-top: ${rhythm(1)};`}>
                    <h3 css={css`margin-bottom: ${rhythm(0.2)}`}> Aim </h3>
                    <span> {post.aim} </span>
                </div>
                <div css={css`margin-top:${rhythm(0.7)}; margin-bottom: ${rhythm(0.2)};`}>
                    <GitHubButton href={post.github} data-size="large"> View Code</GitHubButton>
                </div>
                <div css={css``}>
                  <span css={css`color: var(--textNormal); font-size: 80%;`}> {authorSnippet} </span>
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
@media (max-width: 750px) { 
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
