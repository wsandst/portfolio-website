import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import Header from "../layout/header";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Header>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          About page
        </div>
        </Header>
      </Layout>
    );
  }
}

export default AboutPage;
