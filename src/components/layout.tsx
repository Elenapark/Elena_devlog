import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

interface LayoutProps {
  pageTitle: string;
}

interface IMetaTitleProps {
  pageTitle: string;
  site: {
    id: string;
    siteMetadata: {
      description: string;
      siteUrl: string;
      title: string;
    };
  };
}

export const MetaTitle = ({ pageTitle, site }: IMetaTitleProps) => {
  return (
    <title>
      {pageTitle} | {site.siteMetadata.description}
    </title>
  );
};

const NAVBAR = [{ title: "BLOG", url: "/blog" }];

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
    <main>
      <MetaTitle pageTitle={pageTitle} site={site} />
      {/* header */}
      <header className="border-b bg-neutral-200 p-2">
        <div className="max-w-4xl mx-auto p-2">
          <section className="flex justify-between items-center">
            <h2>
              <Link to="/">{site.siteMetadata.description}</Link>
            </h2>
            <ul className="flex justify-between items-center">
              {NAVBAR.map((el, idx) => (
                <li key={el.url + idx}>
                  <Link to={el.url}>{el.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </header>
      {/* main contents */}
      <main className="max-w-4xl mx-auto p-2 h-[100vh] font-lato">
        {children}
      </main>
    </main>
  );
};

export default Layout;
