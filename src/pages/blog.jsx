import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import Header from "../layout/header";
import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <Header>
        <div className="blog-container">
          <Helmet title={`Blog | ${config.siteTitle}`} />
          Blog
        </div>
        </Header>
      </Layout>
    );
  }
}

export default BlogPage;
