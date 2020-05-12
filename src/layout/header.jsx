import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import config from "../../data/SiteConfig";

//CSS
const HeaderLink = styled(Link)`
  padding-left: ${rhythm(1.5)}; 
  float: right;
  `

export default class Header extends React.Component {
  render(){
    const { children } = this.props;
  return (
    <div
      css={css`
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        padding-bottom: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3 css={css`
            margin-bottom: ${rhythm(1.5)};
            display: inline-block;
            font-style: normal; `}
        >
          {config.siteTitleShort}
        </h3>
      </Link>
      <HeaderLink to={`/projects/`}>
        Projects
      </HeaderLink>
      <HeaderLink to={`/blog/`}>
        Blog
      </HeaderLink>
      <HeaderLink to={`/about/`}>
        About
      </HeaderLink>
      <hr></hr>
      {children}
    </div>
  )
  }
}