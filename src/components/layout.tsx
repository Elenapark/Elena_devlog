import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useStaticQuery, graphql } from "gatsby";

interface LayoutProps {
  pageTitle: string;
}

type MetaTypes = {
  pageTitle: string;
  data: Queries.MetadataQuery;
};

export const MetaTitle = ({ pageTitle, data }: MetaTypes) => {
  return (
    <title>
      {pageTitle} | {data.site?.siteMetadata?.description}
    </title>
  );
};

const NAVBAR = [{ title: "글 목록으로", url: "/blog" }];

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  pageTitle,
  children,
}) => {
  const data = useStaticQuery<Queries.MetadataQuery>(graphql`
    query Metadata {
      site {
        id
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <main>
      <MetaTitle pageTitle={pageTitle} data={data} />
      {/* header */}
      <header className="border-b bg-neutral-200 p-2">
        <div className="max-w-4xl mx-auto p-2">
          <section className="flex justify-between items-center">
            <h2 className="text-xl">
              <Link to="/">{data.site?.siteMetadata?.description}</Link>
            </h2>
            <ul className="flex justify-between items-center text-lg">
              {NAVBAR.map((el, idx) => (
                <li key={el.url + idx}>
                  <Link to={el.url}>{el.title}</Link>
                </li>
              ))}
              <a
                href="https://github.com/Elenapark"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <FaGithub />
              </a>
            </ul>
          </section>
        </div>
      </header>
      {/* main contents */}
      <div className="h-[100vh]">
        <main className="max-w-4xl mx-auto p-2 font-lato">{children}</main>
      </div>
    </main>
  );
};

export default Layout;
