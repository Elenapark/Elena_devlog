import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/Post";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({
  data: { allMdx },
}: PageProps<Queries.MainBlogListQuery>) => {
  return (
    <Layout pageTitle="Home">
      <div className="mt-4 mb-8 rounded-md overflow-hidden h-[400px]">
        <StaticImage
          src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt="main-bg"
          className="w-full h-full object-fill"
        />
      </div>
      <h2 className="text-2xl text-center">최신 글</h2>
      <ul className="h-full mt-8">
        {allMdx.nodes.slice(0, 4).map((node) => {
          return <Post key={node.id} node={node} />;
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MainBlogList {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        id
        frontmatter {
          author
          thumbnail
          datePublished(formatString: "")
          name
          title
        }
        excerpt(pruneLength: 50)
        parent {
          ... on File {
            modifiedTime
          }
        }
        slug
        body
      }
    }
  }
`;
