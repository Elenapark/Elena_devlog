import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <Wrapper>
        <LeftContents>
          {data.allMdx.nodes.map((node) => {
            return (
              <Post key={node.id}>
                <h3 style={{ color: "tomato" }}>
                  <StyledLink to={`/blog/${node.slug}`}>
                    {node.frontmatter.name}
                  </StyledLink>
                </h3>
                <p>{node.frontmatter.datePublished}</p>
              </Post>
            );
          })}
        </LeftContents>
        <AsideContents>
          {/* <StaticImage
            src="../images/fruits.jpg"
            alt="unsplash Img"
            width={400}
          ></StaticImage> */}
          <div>프로필 컨텐츠</div>
        </AsideContents>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContents = styled.section`
  width: 70%;
`;

const Post = styled.article`
  margin: 30px 0;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #e9f1f7;
`;

const AsideContents = styled.aside`
  width: 27%;
  margin: 30px 0;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #e9f1f7;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    text-decoration: none;
  }
`;
