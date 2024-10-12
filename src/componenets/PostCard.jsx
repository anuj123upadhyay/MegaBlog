import React from "react";
import service from "../appwrite/configAppwrite";
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
      {/* <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4 ">
          <div className="w-full justify-center mb-4">
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          </div>
          <h2 className=" text-xl font-bold">{title}</h2>
        </div>
      </Link> */}

      <div className="p-6 mt-6 flex flex-wrap gap-4">
        <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
          <CardHeader className="p-6">
            <CardTitle className="text-3xl font-bold text-gray-900">
              {toPascalCase(title)}
            </CardTitle>
            <CardDescription className="text-gray-500">
              with @MegaBlog
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl w-100 h-80"
            />
            <p className="text-gray-700 mb-4">
              Don&apos;t miss out on Reading!!!
            </p>
            <div className="flex justify-center">
              <a
                className="mt-8 block rounded-full border border-indigo-600 bg-gradient-to-r from-green-400 to-blue-500 px-12 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              >
                <Link to={`/post/${$id}`}>
                Read full blog
                </Link>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* <section class="p-8 px-4 lg:px-0 bg-purple-500">
        <div class="flex flex-wrap items-center md:max-w-6xl mx-auto">
          <div class="w-full md:w-1/2 flex items-center justify-center md:justify-start space-x-4 mb-8 md:mb-0">
            <h5 class="text-sm font-arvo uppercase tracking-widest text-white">
              Follow Us
            </h5>
            <a
              target="_blank"
              class="block w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-50 bg-white text-purple-500"
              href="https://www.instagram.com/pinchofyum"
              rel="noopener"
            >
              <svg class="w-8 h-8">
                <title>INSTAGRAM</title>
                <desc>INSTAGRAM icon</desc>
                <use xlink:href="#sprite-icon-instagram"></use>
              </svg>
            </a>
            <a
              target="_blank"
              class="block w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-50 bg-white text-purple-500"
              href="https://www.pinterest.com/pinchofyum/_created/"
              rel="noopener"
            >
              <svg class="w-8 h-8">
                <title>PINTEREST</title>
                <desc>PINTEREST icon</desc>
                <use xlink:href="#sprite-icon-pinterest"></use>
              </svg>
            </a>
            <a
              target="_blank"
              class="block w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-50 bg-white text-purple-500"
              href="https://www.facebook.com/pinchofyum"
              rel="noopener"
            >
              <svg class="w-8 h-8">
                <title>FACEBOOK</title>
                <desc>FACEBOOK icon</desc>
                <use xlink:href="#sprite-icon-facebook"></use>
              </svg>
            </a>
            <a
              target="_blank"
              class="block w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-50 bg-white text-purple-500"
              href="https://twitter.com/pinchofyum"
              rel="noopener"
            >
              <svg class="w-8 h-8">
                <title>TWITTER</title>
                <desc>TWITTER icon</desc>
                <use xlink:href="#sprite-icon-twitter"></use>
              </svg>
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default PostCard;
