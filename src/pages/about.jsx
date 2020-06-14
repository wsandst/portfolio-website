import React from "react";
import {graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Helmet from "react-helmet";
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import MainLayout from "../layout/layout";
import config from "../../data/SiteConfig";

import teaIcon from '../../static/tea.svg'
import contactIcon from '../../static/contact.svg'

class AboutPage extends React.Component {
  render() {
    console.log("Hey");
    return (
      <MainLayout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <div css={css`max-width: 850px; margin-top: ${rhythm(1.5)}; margin-bottom: ${rhythm(6)}; margin-left: auto; margin-right: auto; display: flex; flex-direction: column;`}>
          <div css={css`display: flex; flex-direction: row; 
          @media (max-width: 620px) { flex-direction: column;}`}>
            <div css={css`margin-right: ${rhythm(1.5)}; display: flex; justify-content: center; margin-bottom: ${rhythm(1)};
             @media (max-width: 920px) { margin-right: 0;}`}>
              <Img fixed={this.props.data.profile.childImageSharp.fixed} css={css`margin: auto; max-width: 160px; border-radius: 50%;`}> </Img>
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
          <div css={css`margin-top: ${rhythm(2)};
          display: flex; flex-direction: row; 
          @media (max-width: 620px) { max-width: 920px; margin-right: ${rhythm(1)}; flex-direction: column-reverse; justify-content: flex-end; margin-top: 1rem;}
          @media (max-width: 530px) { max-width: 920px; margin-right: 0; padding-right: 0;}`}>
          <div css={css`border-right: 1px solid var(--hr); padding-right: ${rhythm(1)};`}>
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
            <div css={css`display: flex; justify-content: flex-end; margin-left: ${rhythm(1.5)}; margin-bottom: ${rhythm(1)};
             @media (max-width: 620px) {  margin: 0; margin-left: auto; margin-right: auto; margin-bottom: 1rem; padding-left: ${rhythm(1)};}
             @media (max-width: 530px) { padding-left: 0;}`}>
               <img src={teaIcon} alt="tea" css={css`width: 160px; height: 160px; margin: auto; auto; max-width: 160px;`}/>
            </div>
          </div>
          <div css={css` margin-top: ${rhythm(2)}; display: flex; flex-direction: row;
          @media (max-width: 920px) {margin-left: 0}
          @media (max-width: 530px) {margin-left: 0}`}>
            <div css={css`margin-right: ${rhythm(1.5)}; display: flex; justify-content: flex-start; margin-bottom: ${rhythm(1)};
              @media (max-width: 620px) { margin: 0; display: none;}`}>
              <Img fixed={this.props.data.profile2.childImageSharp.fixed} css={css`margin: auto; max-width: 160px; border-radius: 50%;`}> </Img>
            </div>
            <div>
            <div css={css`padding-left: ${rhythm(1)}; border-left: 1px solid var(--hr);
            @media (max-width: 920px) {margin-left: ${rhythm(1.5)}}
            @media (max-width: 530px) {margin-left: 0}`}>
          <h1> Timeline </h1>
          <span>
                I started programming Python at the age of 15, which started a lifelong passion of programming. I've gone a bit back and forth between
                different university programs but most recently, in the spring of 2020, I decided to drop out of Med School
                to instead pursue a degree in Computer Science. That's about it, so far.
            </span>
          </div>
          </div>
          </div>
          <div css={css`margin-top: ${rhythm(2)};
            display: flex; flex-direction: row; 
            @media (max-width: 620px) { max-width: 920px; margin-right: ${rhythm(1)}; flex-direction: column; justify-content: flex-end;}
            @media (max-width: 530px) { max-width: 920px; margin-right: 0; padding-right: 0;}`}>
          <div css={css`border-right: 1px solid var(--hr); padding-right: ${rhythm(1)};`}>
          <h1 id="contact"> Contact </h1>
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
          <div css={css`display: flex; justify-content: flex-end; margin-left: ${rhythm(1.5)}; margin-bottom: ${rhythm(1)};
             @media (max-width: 620px) { margin: 0; margin-left: auto; margin-right: auto; padding-left: ${rhythm(1)}; padding-top: ${rhythm(1.5)};}`}>
              <Img fixed={this.props.data.cat.childImageSharp.fixed} css={css`margin: auto; max-width: 160px; border-radius: 50%; margin-right: 0;`}> </Img>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
query ImageQuery {
  profile: file(relativePath: { eq: "profile.jpg" }) {
    childImageSharp {
      fixed(width: 160, height: 160, quality:100) {
        ...GatsbyImageSharpFixed
          }
      }
    }
  profile2: file(relativePath: { eq: "profile2.png" }) {
    childImageSharp {
      fixed(width: 160, height: 160, quality:90) {
        ...GatsbyImageSharpFixed
          }
      }
    }
  cat: file(relativePath: { eq: "cat.jpg" }) {
    childImageSharp {
      fixed(width: 160, height: 160, quality:90) {
        ...GatsbyImageSharpFixed
          }
      }
    }
  }
`;
