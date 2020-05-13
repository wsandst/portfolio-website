import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import config from "../../data/SiteConfig";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import lighticon from '../../static/light.svg'
import darkicon from '../../static/dark.svg'
import "./layout.css";

//CSS
const HeaderLink = styled(Link)`
  padding-left: ${rhythm(1.5)}; 
  color: var(--textTitle);
  &:hover {
    color: var(--textHighlight);
  }
  `

const DarkModeToggleButtonCSS = styled.div
`
padding-left: ${rhythm(1.5)}; 
button {
  -webkit-appearance: none;
  border: 0;
  background: transparent;

  &:focus {
    outline: none;
  }
img {
  height: 25px;
  width: 25px;
  min-width: 25px;
}
}
`

export default class Header extends React.Component {
  render(){
    const { children } = this.props;
  return (
    <div
      css={css`
        padding-top: ${rhythm(1.5)};
        padding-bottom: ${rhythm(1.5)};
      `}
    >
      <div css={css`display: flex; justify-content:flex-end`}>
        <div css={css`
                margin-right: auto;
                h3
                {
                &:hover {
                  color: var(--textHighlight);
                }
                @media (max-width: 550px)
                {
                  display: none;
                  visibility: hidden;
                }`}>
          <Link to={`/`}>
            <h3>
            {config.siteTitleShort}
            </h3>
          </Link>
        </div>
        <div css={css`display: flex; justify-content:flex-end;`}>
          <HeaderLink to={`/about/`}>
            About
          </HeaderLink>
          <HeaderLink to={`/projects/`}>
            Projects
          </HeaderLink>
          <HeaderLink to={`/blog/`}>
            Blog
          </HeaderLink>
          <DarkModeToggleButtonCSS>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <button onClick={e => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
                    title="Toggle Dark Mode">
                  {theme === 'dark' ? (
                      <img src={lighticon} className="theme-icon" alt="Light Mode" />
                    ) : (
                      <img src={darkicon} className="theme-icon" alt="Dark Mode" />
                    )}
                </button>
              )}
            </ThemeToggler>
          </DarkModeToggleButtonCSS>
        </div>
      </div>
      <hr css={css``}></hr>
      {children}
    </div>
  )
  }
}