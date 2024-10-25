
import React from "react";
import service from "../appwrite/configAppwrite";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, date }) {
  const toPascalCase = (str) => {
    return str
      .toLowerCase()
      .split(/[\s_]+/) // Split by space or underscore
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter
      .join(" "); // Join with a space
  };

  return (
    <article className="overflow-hidden rounded-lg shadow-lg shadow transition hover:shadow-lg">
      {/* Image section */}
      <img
        alt={title}
        src={service.getFilePreview(featuredImage)} // Using the provided image URL
        className="h-56 w-full object-cover"
      />

      {/* Content section */}
      <div className="bg-white p-4 sm:p-6">
        {/* Date section */}
        <time dateTime={date} className="block text-xs text-gray-500">
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>

        {/* Title section */}
        <Link to={`/post/${$id}`}>
          <h3 className="mt-0.5 text-lg text-gray-900">
            {toPascalCase(title)}
          </h3>
        </Link>

        {/* Description section */}
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Don&apos;t miss out on reading this amazing blog at @MegaBlog!
        </p>

        <div className="flex justify-center">
          <a className="mt-3 w-full block rounded-md border border-indigo-600 bg-gradient-to-r cursor-pointer from-green-400 to-blue-500 px-12 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
            <Link to={`/post/${$id}`}>Read full blog</Link>
          </a>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
