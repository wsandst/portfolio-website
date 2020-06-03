import React from "react";
import {graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Helmet from "react-helmet";
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import MainLayout from "../layout/layout";
import config from "../../data/SiteConfig";

class AboutPage extends React.Component {
  render() {
    return (
      <MainLayout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <div css={css`max-width: 850px; margin-top: ${rhythm(1.5)}; margin-bottom: ${rhythm(6)}; margin-left: auto; margin-right: auto; display: flex; flex-direction: column;`}>
          <div css={css`display: flex; flex-direction: row; 
          @media (max-width: 920px) { flex-direction: column;}`}>
            <div css={css`min-width: 200px; display: flex; justify-content: center; margin-bottom: ${rhythm(1)};`}>
              <Img fixed={this.props.data.file.childImageSharp.fixed} css={css`margin: auto; max-width: 160px; border-radius: 50%;`}> </Img>
            </div>
            <div css={css`padding-left: ${rhythm(1)}; border-left: 1px solid var(--hr);
            @media (max-width: 920px) {margin-left: ${rhythm(1.5)}}
            @media (max-width: 530px) {margin-left: 0}`}>
              <h1 css={css``}> About me </h1>
              <div>
                <span>
                I'm William Sandström, a self taught full stack developer. 
                This website is dedicated to my various projects and ventures. 
                It serves as compendium over the things I have learned through the years. 
                </span>
              </div>
              <div css={css`padding-top: ${rhythm(0.5)};`}>
                <span>
                On a more personal side, I enjoy tea, reading and cats. I live in the small city of Umeå, located in northern Sweden. 
                </span>
              </div>
            </div>
          </div>
          <div css={css`margin-top: ${rhythm(2)}; max-width: 620px; padding-right: ${rhythm(1)}; border-right: 1px solid var(--hr);
          @media (max-width: 920px) { max-width: 920px; margin-right: ${rhythm(1)}}
          @media (max-width: 530px) { max-width: 920px; margin-right: ${rhythm(0.4)}}`}>
          <h1> Knowledge </h1>
          <span>
                Throughout my various projects I have learned many different programming languages and frameworks.
                Here's a list of some of them.
                <ul css={css`padding-top: 1rem;`}>
                  <li><strong>
                  <Link to="/project-tags/c">C++</Link>,&nbsp;
                  <Link to="/project-tags/python"> Python</Link>,&nbsp;
                  <Link to="/project-tags/javascript"> Javascript</Link>
                  </strong></li>
                  <li><strong>
                  <Link to="/project-tags/wordpress">Wordpress</Link>,&nbsp;
                  <Link to="/project-tags/gatsby">Gatsby</Link>
                  </strong></li>
                  <li><strong>
                  <Link to="/project-tags/react">React</Link>,&nbsp;
                  <Link to="/project-tags/open-gl">OpenGL</Link>,&nbsp;
                  <Link to="/project-tags/py-torch">PyTorch</Link>,&nbsp;
                  <Link to="/project-tags/qt-5">QT5</Link>,&nbsp;
                  <Link to="/project-tags/sdl-2">SDL2</Link>
                  </strong></li>
                  <li><strong>
                  Linux
                  </strong></li>
                </ul>
            </span>
          </div>
          <div css={css`margin-left: ${rhythm(8)}; padding-left: ${rhythm(1.5)}; margin-top: ${rhythm(2)}; border-left: 1px solid var(--hr);
          @media (max-width: 920px) {margin-left: ${rhythm(1.5)}}
          @media (max-width: 530px) {margin-left: 0}`}>
          <h1> Timeline </h1>
          <span>
                I started programming Python at the age of 15, which started a lifelong passion of programming. In the spring of 2020 I decided to drop out of Med School
                to instead pursue a degree in Computer Science. That's about it, so far.
            </span>
          </div>
          <div css={css`margin-top: ${rhythm(2)}; max-width: 620px; padding-right: ${rhythm(1)}; border-right: 1px solid var(--hr);
            @media (max-width: 920px) { max-width: 920px; margin-right: ${rhythm(1)}}
            @media (max-width: 530px) { max-width: 920px; margin-right: ${rhythm(0.4)}}`}>
          <h1> Contact </h1>
          <span>
                You can email me at "<strong>williamsandstrom99</strong> at <strong>hotmail</strong> dot <strong>com</strong>" if you'd like to speak with me. I'm also
                available at various platforms around the web. 
                <ul css={css`padding-top: 1rem;`}>
                <li><strong>Github:</strong> <a href="https://github.com/wsandst"> wsandst </a> </li>
                <li><strong>Twitter:</strong> <a href="https://twitter.com/_wsandst_">_wsandst_</a> </li>
                <li><strong>Discord:</strong> Wydal#4592 </li>
                </ul>
                </span>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
query ImageQuery {
  file(relativePath: { eq: "profile.png" }) {
    childImageSharp {
      fixed(width: 160, height: 160, quality:90) {
        ...GatsbyImageSharpFixed
          }
      }
    }
  }
`;
