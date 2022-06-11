import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allFile.nodes.map((blog) => {
        return <p>{blog.name}</p>;
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
