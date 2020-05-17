import React from "react";

import Helmet from "react-helmet";

import MainLayout from "../layout/layout";
import config from "../../data/SiteConfig";

class BlogPage extends React.Component {
  render() {
    return (
      <MainLayout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <div className="blog-container">
        Blog
      </div>
      </MainLayout>
    );
  }
}

export default BlogPage;
