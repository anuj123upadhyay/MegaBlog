"use client";
import React, { useState, useEffect } from "react";


import PostCard from "../componenets/PostCard.jsx"; // Assuming typo fix for 'components'
import Container from "../componenets/container/Container.jsx";


import service from "../appwrite/configAppwrite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";



import SearchBar from "../componenets/SearchBar.jsx";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [categorizedPosts, setCategorizedPosts] = useState({});
  
  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await service.getPosts();
      if (response && response.documents) {
        const grouped = groupPostsByCategory(response.documents);
        setCategorizedPosts(grouped);
        setPosts(response.documents);
      } else {
        setCategorizedPosts({});
        setPosts([]);
      }
    };
    fetchPosts();
  }, []);

  // Group posts by category, defaulting to "Uncategorized"
  const groupPostsByCategory = (posts) => {
    return posts.reduce((acc, post) => {
      const category = post.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(post);
      return acc;
    }, {});
  };

  return (
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
            {Object.keys(categorizedPosts).length > 0 ? (
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {categorizedPosts[category].map((post) => (
                        <PostCard key={post.$id} {...post} />
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No posts available at the moment.</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;


