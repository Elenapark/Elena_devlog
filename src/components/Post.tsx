import { Link } from "gatsby";
import React from "react";

export default function Post({ node }: { node: any }) {
  return (
    <Link to={`/blog/${node.frontmatter.slug}`}>
      <li className="flex flex-col md:flex-row rounded-md mb-4 min-h-[300px] max-h-[350px] md:min-h-[120px] md:h-[120px] shadow-sm overflow-hidden border">
        <div className="w-full h-[250px] md:h-auto md:w-1/4 mr-2">
          <img
            src={node.frontmatter.thumbnail}
            alt={node.frontmatter.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-around w-full p-2 md:p-1">
          <h2 className="text-md font-bold">{node.frontmatter.title}</h2>
          <span className="text-zinc-400 text-sm">
            {node.frontmatter.datePublished}
          </span>
          {node.excerpt && (
            <p className="text-zinc-500 text-sm">{node.excerpt}</p>
          )}
        </div>
      </li>
    </Link>
  );
}
