import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

interface LayoutProps {
  pageTitle: string;
}

const NAVBAR = [
  // { title: "Home", url: "/" },
  { title: "BLOG", url: "/blog" },
  { title: "ABOUT", url: "/about" },
];

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  pageTitle,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  const { site } = data;
  return (
    <Wrapper>
      <title>
        {pageTitle} | {site.siteMetadata.description}
      </title>
      <Header>
        <h2>
          <StyledLink to="/">{site.siteMetadata.description}</StyledLink>
        </h2>
        <Navbar>
          {NAVBAR.map((el, idx) => (
            <ListItem key={el.url + idx}>
              <StyledLink to={el.url}>{el.title}</StyledLink>
            </ListItem>
          ))}
        </Navbar>
      </Header>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e9f1f7;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const ListItem = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    text-decoration: none;
  }
`;
