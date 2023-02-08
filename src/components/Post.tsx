import { Link } from "gatsby";
import React from "react";

export default function Post({ node }) {
  return (
    <Link to={`/blog/${node.slug}`}>
      <li className="flex border p-2 rounded-md mb-4">
        <div className="w-1/6 h-[120px] mr-4">
          <img
            src={node.frontmatter.image}
            alt={node.frontmatter.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-around w-full">
          <h2 className="text-lg">
            {node.frontmatter.name}
            <span className="text-zinc-400 text-sm ml-2">
              {node.frontmatter.datePublished}
            </span>
          </h2>
          <p className="text-zinc-500 ">{node.excerpt}</p>
        </div>
      </li>
    </Link>
  );
}
