import React from "react";

import Helmet from "react-helmet";

import Header from "../layout/header";
import Footer from "../layout/footer";
import config from "../../data/SiteConfig";
import "./layout.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header></Header>
        <div className="layout-container">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          {children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}