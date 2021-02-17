import React from "react";

import Helmet from "react-helmet";
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import MainLayout from "../layout/layout";

import config from "../../data/SiteConfig";
import "../layout/layout.css";
import teaIcon from '../../static/tea.svg'

class ErrorPage extends React.Component {
    render() {
      return (
        <MainLayout>
          <Helmet title={`Page not found | ${config.siteTitle}`} />
          <div css={css`color: var(--textNormal); display: flex; flex-direction: column; align-items: center;`}>
            <h1 css={css`text-align: center; margin-top: 7rem;`}>Error 404</h1>
            <h2 css={css`text-align: center; margin-top: 1rem;`}> The page you were looking for does not appear to exist</h2>
            <h2 css={css`text-align: center; margin-top: 1rem;`}> Perhaps you could have some tea instead? </h2>
            <img src={teaIcon} alt="tea" css={css`width: 200px; height: 200px; margin-left: auto; margin-right: auto; margin-top: 1rem;`}/>
          </div>
        </MainLayout>
      );
    }
  }
  
  export default ErrorPage;