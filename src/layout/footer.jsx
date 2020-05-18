import React, { Component } from "react";
import { Link } from "gatsby";

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import config from "../../data/SiteConfig";
import "./layout.css";

import githubDarkIcon from '../../static/logos/github-dark.svg'
import githubLightIcon from '../../static/logos/github-light.svg'
import gatsbyDarkIcon from '../../static/logos/gatsby-dark.svg'
import gatsbyLightIcon from '../../static/logos/gatsby-light.svg'

const FooterLink = styled(Link)`
  padding-left: ${rhythm(1)}; 
  color: var(--textTitle);
  &:hover {
    color: var(--textHighlight);
  }
  font-size: 90%;
  margin-top: auto; margin-bottom: auto;
  `


  
class Footer extends Component {
  render() {
    const year = new Date().getFullYear()

    return (
      <footer className="footer">
        <hr css={css``}></hr>
        <div css={css`display: flex`}>
            <FooterLink to={`/about/`}>
              Contact
            </FooterLink>
            <span css={css`color: var(--textTitle); font-size: 75%; margin-left: auto; padding-right: ${rhythm(1)}; margin-top: auto; margin-bottom: auto;`}>
              Copyright {year}
            </span>
            <a href="https://github.com/wsandst" title="wsandst's Github">
              <img css={css`margin-top: auto; margin-bottom: auto;`} src={githubDarkIcon} alt="Github" />
            </a>
            <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
              <img css={css`margin-top: auto; margin-bottom: auto; margin-left: ${rhythm(0.5)}; margin-right: ${rhythm(0.5)};`} src={gatsbyDarkIcon} alt="Gatsby" />
            </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
