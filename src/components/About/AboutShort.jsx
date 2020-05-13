import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { rhythm, scale } from "../../utils/typography"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export default function AboutShort() {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 160, height: 160, quality:90) {
              ...GatsbyImageSharpFixed
                }
            }
          }
        }
    `)
    return (
      <div>
        <div css={css`height:180px; display: flex; justify-content: center; `}>
        <Img fixed={data.file.childImageSharp.fixed} css={css`border-radius: 50%`}> </Img>
        <h1>Hello there. I'm William.</h1>
        <span>
        I'm a self-taught full-stack developer.
        You can read about my projects here.
        </span>
        </div>
        <hr></hr>
      </div>
      
    );
  }

  