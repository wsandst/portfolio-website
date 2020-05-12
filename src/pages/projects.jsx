import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import Header from "../layout/header";
import config from "../../data/SiteConfig";

class ProjectsPage extends Component {
  render() {
    return (
      <Layout>
        <Header>
        <div className="projects-container">
          <Helmet title={`Projects | ${config.siteTitle}`} />
          Projects
        </div>
        </Header>
      </Layout>
    );
  }
}

export default ProjectsPage;
