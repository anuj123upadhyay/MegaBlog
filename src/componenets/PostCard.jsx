import React from "react";
import service from "../appwrite/configAppwrite";
import image from "../assets/favicon.png";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function PostCard({ $id, title, featuredImage }) {
  const toPascalCase = (str) => {
    return str
      .toLowerCase()
      .split(/[\s_]+/) // Split by space or underscore
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter
      .join(" "); // Join with a space
  };

  return (
    <>
      

      <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden w-full flex flex-col items-center sm:mt-2 mt-5">
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-bold text-gray-900">
            {toPascalCase(title)}
          </CardTitle>
          <CardDescription className="text-gray-500 text-center">
            with @MegaBlog
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img src={service.getFilePreview(featuredImage)} alt={title} className="rounded-xl w-[280px]" />
          <p className="text-gray-700 mt-2 mb-2 text-center">
            Don&apos;t miss out on Reading!!!
          </p>
          <div className="flex justify-center">
            <a className="mt-3 block rounded-full border border-indigo-600 bg-gradient-to-r cursor-pointer from-green-400 to-blue-500 px-12 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
              <Link to={`/post/${$id}`}>Read full blog</Link>
            </a>
          </div>
        </CardContent>
      </Card>


    </>
  );
}

export default PostCard;
