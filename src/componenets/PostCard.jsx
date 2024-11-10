import React from "react";
import service from "../appwrite/configAppwrite";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";

export default function PostCard({
  $id,
  title,
  featuredImage,
  date,
  $createdAt,
  tags,
  metaData,
}) {
  const toPascalCase = (str) => {
    return str
      .toLowerCase()
      .split(/[\s_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <article className="flex flex-col items-center overflow-hidden w-full max-w-xs text-center m-auto my-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Image section */}
      <div className="flex justify-center w-full">
        <img
          alt={title}
          src={service.getFilePreview(featuredImage)}
          className="w-full max-h-64 object-cover rounded-t-lg"
        />
      </div>
      
      {/* Content section */}
      <div className="bg-white p-4 sm:p-6 w-full flex flex-col flex-grow">
        <div className="flex justify-between">
          {/* Date section */}
          <time dateTime={$createdAt} className="block text-xs text-gray-500">
            {new Date($createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>

          <div className="flex flex-wrap gap-2 mb-2 -mt-1">
            {tags.map((tag, index) => (
              <Badge key={index} className="rounded-lg">
                {toPascalCase(tag)}
              </Badge>
            ))}
          </div>
        </div>

        {/* Title section */}
        <Link to={`/post/${$id}`}>
          <h3 className="mt-0.5 text-lg text-gray-900 line-clamp-2">
            {toPascalCase(title)}
          </h3>
        </Link>

        <div className="flex flex-col justify-between h-full">
          {/* Description section */}
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {metaData ||
              "Don't miss out on reading this amazing blog at @MegaBlog!"}
          </p>

          <div className="flex justify-center mt-3">
            <Link
              to={`/post/${$id}`}
              className="w-full block rounded-md border border-indigo-600 bg-gradient-to-r cursor-pointer from-green-400 to-blue-500 px-12 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            >
              Read full blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

