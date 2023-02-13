import { Link } from "gatsby";
import React from "react";

export default function Post({ node }) {
  return (
    <Link to={`/blog/${node.slug}`}>
      <li className="flex border rounded-md mb-4">
        <div className="w-1/4 h-[120px] mr-4">
          <img
            src={node.frontmatter.thumbnail}
            alt={node.frontmatter.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-around w-full">
          <h2 className="text-lg">{node.frontmatter.title}</h2>
          <span className="text-zinc-400 text-sm">
            {node.frontmatter.datePublished}
          </span>
          {node.excerpt && <p className="text-zinc-500 ">{node.excerpt}</p>}
        </div>
      </li>
    </Link>
  );
}
