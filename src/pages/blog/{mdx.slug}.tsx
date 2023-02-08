import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogPost = ({ data }: { data: Queries.PostDetailQuery }) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.name!}>
      <section className="flex justify-between items-center py-4 mb-4 border-b px-1">
        <h1 className="text-2xl">{data.mdx?.frontmatter?.name}</h1>
        <span className="text-zinc-400">
          {data.mdx?.frontmatter?.datePublished}
        </span>
      </section>
      <article className="px-1">
        <MDXRenderer localImages={data.mdx?.frontmatter?.mdxImage}>
          {data.mdx?.body!}
        </MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query PostDetail($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        title
        author
        datePublished(formatString: "YYYY.MM.DD")
        mdxImage {
          childImageSharp {
            gatsbyImageData
          }
        }
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
