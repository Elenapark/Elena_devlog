import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../../components/layout";
import Post from "../../components/Post";

const BlogPage = ({ data }: PageProps<Queries.BlogListQuery>) => {
  return (
    <Layout pageTitle="Blog">
      <ul className="h-full">
        {data.allMdx.nodes.map((node) => {
          return <Post key={node.id} node={node} />;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query BlogList {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        id
        frontmatter {
          author
          image
          datePublished(formatString: "")
          image_alt
          name
          title
        }
        body
        parent {
          ... on File {
            modifiedTime
          }
        }
        slug
      }
    }
  }
`;

export default BlogPage;
