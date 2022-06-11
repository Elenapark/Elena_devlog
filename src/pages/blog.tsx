import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2 style={{ color: "tomato" }}>{node.frontmatter.name}</h2>
          <p>Posted : {node.frontmatter.name}</p>
          <p>Last updated: {node.parent.modifiedTime}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        frontmatter {
          name
          datePublished(formatString: "")
          author
        }
        body
        id
        parent {
          ... on File {
            modifiedTime(formatString: "YYYY.MM.DD hh:mm")
          }
        }
      }
    }
  }
`;

export default BlogPage;
