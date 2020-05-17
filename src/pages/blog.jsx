import React from "react";

import Helmet from "react-helmet";

import Layout from "../layout/layout";
import Header from "../layout/header";
import config from "../../data/SiteConfig";

class BlogPage extends React.Component {
  render() {
    return (
      <div>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Header>
      </Header>
      <Layout>
        <div className="blog-container">
          Blog
        </div>
      </Layout>
      </div>
    );
  }
}

export default BlogPage;
