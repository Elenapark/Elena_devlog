import * as React from "react";
import { Link } from "gatsby";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  pageTitle,
  children,
}) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
