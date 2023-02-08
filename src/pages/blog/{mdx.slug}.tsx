import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }: { data: Queries.PostDetailQuery }) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.name!}>
      <section className="flex justify-between items-center my-8">
        <h1 className="text-xl">{data.mdx?.frontmatter?.name}</h1>
        <span className="text-zinc-400 text-sm">
          {data.mdx?.frontmatter?.datePublished}
        </span>
      </section>
      <MDXRenderer>{data.mdx?.body!}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query PostDetail($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        author
        datePublished(formatString: "YYYY.MM.DD")
      }
      body
      parent {
        ... on File {
          id
          name
          modifiedTime
        }
      }
    }
  }
`;

export default BlogPost;
