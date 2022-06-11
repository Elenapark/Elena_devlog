import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
interface LayoutProps {
  pageTitle: string;
}

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
    <div>
      <title>
        {pageTitle} | {site.siteMetadata.description}
      </title>
      <h1>{site.siteMetadata.description}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
