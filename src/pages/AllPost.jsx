"use client";
import React, { useState, useEffect } from "react";

import PostCard from "../componenets/PostCard.jsx"; // Assuming typo fix for 'components'
import  Container  from "../componenets/container/Container";

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

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }else{
        setPosts([])//set as empty array if response is undefined
      }
    });
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

  return posts ? (
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
            {/* <hr className="mt-2" /> */}

            <SearchBar/>
          </div>

          <div className="px-4 mb-4 w-full">
            //TODO//
            
            {Object.keys(categorizedPosts).map((category) => (
              <div key={category} className="mb-8">
                <h2 class="flex flex-row flex-nowrap items-center mt-16 mb-16">
                  <span class="flex-grow block border-t border-black"></span>
                  <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
                    {category}
                  </span>
                  <span class="flex-grow block border-t border-black"></span>
                </h2>

                {/* Conditional Rendering of Carousel */}
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
                    {/* <CarouselPrevious  className="absolute left-2 top-1/2 transform -translate-y-1/2" style={{ width: "40px", height: "40px" }}/>
                    <CarouselNext  className="absolute right-2 top-1/2 transform -translate-y-1/2" style={{ width: "40px", height: "40px" }}/> */}
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
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(0, 0, 0, 0.7)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(0, 0, 0, 0.5)")
                      }
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
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(0, 0, 0, 0.7)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(0, 0, 0, 0.5)")
                      }
                    />
                  </Carousel>
                ) : (
                  // If less than or equal to 4 posts, render normally
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
  ) : (
    <>
      <div class="animate-pulse block-item shadow-md max-w-xl mx-auto mt-20">
        {/* <!-- Head line --> */}
        <div class="bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 h-6 rounded-t-3xl"></div>
        <div class="py-4 px-6">
          {/* <!-- User card (avatar + username) --> */}
          <div class="flex items-center space-x-2">
            <div class="h-7 w-7 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full"></div>
            <div class="h-3 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-1/3"></div>
          </div>
          {/* <!-- Text block --> */}
          <div class="my-6">
            {/* <!-- Heading --> */}
            <div class="h-5 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-3/4"></div>
            {/* <!-- Description --> */}
            <div class="my-4">
              <div class="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-full"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-5/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-4/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-5/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-3/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-2/6"></div>
            </div>
          </div>
          <div class="my-4">
            {/* <!-- Button --> */}
            <div class="h-11 bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-lg w-full"></div>
            {/* <!-- Post data + time --> */}
            <div class="h-3 my-4 mx-auto bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPosts;
