import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Helmet from "react-helmet";
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import Layout from "../layout/layout";
import Header from "../layout/header";
import config from "../../data/SiteConfig";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Header>
        </Header>
        <Layout>
          <div css={css`max-width: 850px; margin-top: ${rhythm(1.5)}; margin-bottom: ${rhythm(1.5)}; margin-left: auto; margin-right: auto; display: flex; flex-direction: column;`}>
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
                  On a more personal side, I enjoy tea. Tea, especially awesome tea, is often said to be good for your health. But if tea is good for you, how good? And why?
                  It turns out that tea does contain substances that have been linked to a lower risk for heart disease, cancer, and other health problems that affect men. 
                  Grab those saucer cups and get chugging — tea is officially awesome for your health.
                  </span>
                </div>
              </div>
            </div>
            <div css={css`margin-top: ${rhythm(2)}; max-width: 620px; padding-right: ${rhythm(1)}; border-right: 1px solid var(--hr);
            @media (max-width: 920px) { max-width: 920px; margin-right: ${rhythm(1)}}
            @media (max-width: 530px) { max-width: 920px; margin-right: ${rhythm(0.4)}}`}>
            <h1> Knowledge </h1>
            <span>
                  On a more personal side, I enjoy tea. Tea, especially awesome tea, is often said to be good for your health. But if tea is good for you, how good? And why?
                  It turns out that tea does contain substances that have been linked to a lower risk for heart disease, cancer, and other health problems that affect men.
                  Grab down those saucer cups and get chugging — tea is officially awesome for your health.
              </span>
            </div>
            <div css={css`margin-left: ${rhythm(8)}; padding-left: ${rhythm(1.5)}; margin-top: ${rhythm(2)}; border-left: 1px solid var(--hr);
            @media (max-width: 920px) {margin-left: ${rhythm(1.5)}}
            @media (max-width: 530px) {margin-left: 0}`}>
            <h1> Timeline </h1>
            <span>
                  On a more personal side, I enjoy tea. Tea, especially awesome tea, is often said to be good for your health. But if tea is good for you, how good? And why?
                  It turns out that tea does contain substances that have been linked to a lower risk for heart disease, cancer, and other health problems that affect men. 
                  Grab down those saucer cups and get chugging — tea is officially awesome for your health.
              </span>
            </div>
            <div css={css`margin-top: ${rhythm(2)}; max-width: 620px; padding-right: ${rhythm(1)}; border-right: 1px solid var(--hr);
             @media (max-width: 920px) { max-width: 920px; margin-right: ${rhythm(1)}}
             @media (max-width: 530px) { max-width: 920px; margin-right: ${rhythm(0.4)}}`}>
            <h1> Contact </h1>
            <span>
                  On a more personal side, I enjoy tea. Tea, especially awesome tea, is often said to be good for your health. But if tea is good for you, how good? And why?
                  It turns out that tea does contain substances that have been linked to a lower risk for heart disease, cancer, and other health problems that affect men. 
                  Grab down those saucer cups and get chugging — tea is officially awesome for your health.
                  </span>
            </div>
          </div>
        </Layout>
      </div>
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
