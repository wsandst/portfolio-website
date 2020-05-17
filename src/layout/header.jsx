import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import config from "../../data/SiteConfig";
import lighticon from '../../static/light.svg'
import darkicon from '../../static/dark.svg'
import "./layout.css";

//CSS

const HeaderTitleCSS = styled.div`
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
}
`

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
  state = {
    showHeaderScroll: false,
    prevScrollpos: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (this.state.prevScrollpos > currentScrollPos) {
      this.setState({ showHeaderScroll: true })
    } else {
      this.setState({ showHeaderScroll: false })
    }
    this.setState({ prevScrollpos: currentScrollPos })
  }

  render(){
    const { showHeaderScroll } = this.state
    const { children } = this.props;
  return (
    <div className='header' css={showHeaderScroll ? css`top: 0` : css`top: -82px`}>
      <div css= {css`display: flex; justify-content:flex-end;`}>
        <HeaderTitleCSS>
          <Link to={`/`}>
            <h3>
            {config.siteTitleShort}
            </h3>
          </Link>
        </HeaderTitleCSS>
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
    </div>
  )
  }
}