import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class ProjectsPage extends Component {
  render() {
    return (
      <Layout>
        <div className="projects-container">
          <Helmet title={`Projects | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default ProjectsPage;
