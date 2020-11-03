import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { rhythm, scale } from "../utils/typography"
import { css } from "@emotion/core"
import GitHubButton from 'react-github-btn'

export default function AboutShort() {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 160, height: 160, quality:100) {
              ...GatsbyImageSharpFixed_withWebp
                }
            }
          }
        }
    `)
    return (
      <div>
        <div css={css`height:180px; margin-left: ${rhythm(2)};display: flex; justify-content: left;
                    50%; @media (max-width: 630px) { margin-left:${rhythm(0.5) }}`}>
          <div css={css`@media (max-width: 630px) { display: none; visibility: hidden; }`}>
          <Link to={`/about`} alt="About page">
            <Img fixed={data.file.childImageSharp.fixed} css={css`border-radius: 50%;`} alt ="Profile Image"> </Img>
          </Link>
          </div>
          <div css={css`margin-left: ${rhythm(1.5)}; margin-bottom: ${rhythm(1)}; display: flex; flex-direction: column; justify-content: center; h2{margin:0}
          @media (max-width: 550px) {margin-left: 0 }`}>
            <h2 css={css`padding-bottom: ${rhythm(0.2)}`}> Hello there. I'm William.</h2>
            <span>
            I'm a self-taught full-stack developer.
            </span>
            <span css={css`margin-bottom: ${rhythm(0.4)}`}>
            You can read about my projects here.
            </span>
            <GitHubButton href="https://github.com/wsandst" data-size="large">wsandst</GitHubButton>
          </div>
        </div>
        <hr></hr>
      </div>
      
    );
  }

  