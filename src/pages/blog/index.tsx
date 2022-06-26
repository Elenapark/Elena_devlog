import { Link, graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <Post key={node.id}>
            <h2 style={{ color: "tomato" }}>
              <StyledLink to={`/blog/${node.slug}`}>
                {node.frontmatter.name}
              </StyledLink>
            </h2>
            <p>{node.frontmatter.datePublished}</p>
          </Post>
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

const Post = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
