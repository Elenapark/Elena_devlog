import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <ul>
        {data.allMdx.nodes.map((node) => {
          return (
            <li key={node.id}>
              <h3>
                <Link to={`/blog/${node.slug}`}>{node.frontmatter.name}</Link>
              </h3>
              <p>{node.frontmatter.datePublished}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;

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
