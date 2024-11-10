"use client";
import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../componenets"; // Assuming typo fix for 'components'
import service from "../appwrite/configAppwrite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import SearchBar from "../componenets/SearchBar";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate 2 seconds loading
    setTimeout(() => {
      service.getPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
        setLoading(false); // Set loading to false after 2 seconds
      });
    }, 2000); // Delay of 2 seconds
  }, []);

  // Helper function to group posts by category
  const groupPostsByCategory = (posts) => {
    return posts.reduce((acc, post) => {
      const category = post.category || "Uncategorized"; // Fallback to 'Uncategorized' if no category
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(post);
      return acc;
    }, {});
  };

  const categorizedPosts = groupPostsByCategory(posts);

  return loading ? (
    // Skeleton Loading UI while loading state is true
    <div className="animate-pulse block-item shadow-md max-w-full mx-auto mt-4 max-h-4xl">
      <div className="bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 h-6 rounded-t-3xl"></div>
      <div className="py-4 px-6">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full"></div>
          <div className="h-3 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-1/3"></div>
        </div>
        <div className="my-6">
          <div className="h-5 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-3/4"></div>
          <div className="my-4">
            <div className="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-full"></div>
            <div className="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-5/6"></div>
            <div className="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-4/6"></div>
            <div className="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-5/6"></div>
            <div className="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-3/6"></div>
            <div className="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-2/6"></div>
          </div>
        </div>
        <div className="my-4">
          <div className="h-11 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-lg w-full"></div>
          <div className="h-3 my-4 mx-auto bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-1/2"></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="min-h-screen flex flex-col flex-wrap items-center p-4">
          <div className="lg:w-11/12 w-full rounded-lg">
            <h1 className="text-5xl font-extrabold text-center text-black mb-6">
              Visit All Blogs
            </h1>
            <p className="text-lg text-gray-600 text-center mb-2 leading-relaxed">
              Have a look at our Blog Posts.
            </p>
            <SearchBar />
          </div>

          <div className="px-4 mb-4 w-full">
            {Object.keys(categorizedPosts).length > 0 &&
              Object.keys(categorizedPosts).map((category) => (
                <div key={category} className="mb-8">
                  <h2 className="flex flex-row flex-nowrap items-center mt-16 mb-16">
                    <span className="flex-grow block border-t border-black"></span>
                    <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
                      {category}
                    </span>
                    <span className="flex-grow block border-t border-black"></span>
                  </h2>

                  {categorizedPosts[category].length > 5 ? (
                    <Carousel>
                      <CarouselContent className="-ml-1 mb-4">
                        {categorizedPosts[category].map((post) => (
                          <CarouselItem
                            key={post.$id}
                            className="pl-4 md:basis-1/2 lg:basis-1/4"
                          >
                            <PostCard {...post} />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious
                        style={{
                          position: "absolute",
                          width: "40px",
                          height: "40px",
                          top: "50%",
                          left: "10px",
                          transform: "translateY(-50%)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                          zIndex: 10,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          borderRadius: "50%",
                        }}
                      />
                      <CarouselNext
                        style={{
                          position: "absolute",
                          width: "40px",
                          height: "40px",
                          top: "50%",
                          right: "10px",
                          transform: "translateY(-50%)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                          zIndex: 10,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          borderRadius: "50%",
                        }}
                      />
                    </Carousel>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {categorizedPosts[category].map((post) => (
                        <PostCard key={post.$id} {...post} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
