import React from "react";

import Helmet from "react-helmet";

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
          <div className="about-container">
            About page
          </div>
        </Layout>
      </div>
    );
  }
}

export default AboutPage;
