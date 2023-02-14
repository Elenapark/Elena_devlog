import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../components/layout";
import Post from "../../components/Post";

const BlogPage = ({ data }: PageProps<Queries.BlogListQuery>) => {
  return (
    <Layout pageTitle="Blog">
      <ul className="h-full">
        {data.allMdx.nodes.map((node: any) => {
          return <Post key={node.id} node={node} />;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query BlogList {
    allMdx(sort: { frontmatter: { datePublished: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          author
          thumbnail
          datePublished(formatString: "")
          slug
        }
        excerpt(pruneLength: 50)
        body
      }
    }
  }
`;

export default BlogPage;
