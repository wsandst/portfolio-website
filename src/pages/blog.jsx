import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <div className="blog-container">
          <Helmet title={`Blog | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default BlogPage;
