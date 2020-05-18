import React from "react";

import Helmet from "react-helmet";

import MainLayout from "../layout/layout";
import BlogListing from "../components/BlogListing";
import config from "../../data/SiteConfig";

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <div className="blog-container">
        <BlogListing postEdges={postEdges}/>
      </div>
      </MainLayout>
    );
  }
}

export default BlogPage;

export const blogPageQuery = graphql`
query BlogQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"  }}, sort: { fields: [fields___date], order: DESC })
  {
    edges {
      node {
        fields {
          slug
          date
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          cover {
            childImageSharp {
            fixed(width: 50, height: 50, quality:90) {
              ...GatsbyImageSharpFixed
                }
            }
          }
          date
        }
      }
    }
  }
}
`;