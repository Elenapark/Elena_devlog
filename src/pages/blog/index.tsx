import { Link, graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2 style={{ color: "tomato" }}>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.name}</Link>
            </h2>
            <p>Posted : {node.frontmatter.name}</p>
            <p>Last updated: {node.parent.modifiedTime}</p>
          </article>
        );
      })}
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
        parent {
          ... on File {
            modifiedTime(formatString: "YYYY.MM.DD hh:mm")
          }
        }
        slug
        id
      }
    }
  }
`;

export default BlogPage;
