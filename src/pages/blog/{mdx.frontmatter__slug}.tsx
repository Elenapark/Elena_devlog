import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const BlogPost = ({
  data,
  children,
}: {
  data: Queries.PostDetailQuery;
  children: React.ReactNode;
}) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title!}>
      <section className="flex justify-between items-center py-4 mb-4 border-b px-1">
        <h1 className="text-2xl">{data.mdx?.frontmatter?.title}</h1>
        <span className="text-zinc-400">
          {data.mdx?.frontmatter?.datePublished}
        </span>
      </section>
      <article className="px-1">{children}</article>
    </Layout>
  );
};

export const query = graphql`
  query PostDetail($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        author
        datePublished(formatString: "YYYY.MM.DD")
        title
      }
    }
  }
`;

export default BlogPost;
