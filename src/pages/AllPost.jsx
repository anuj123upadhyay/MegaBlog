"use client";
import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../componenets"; // Assuming typo fix for 'components'
import service from "../appwrite/configAppwrite";
import PostCarousel from "../components/ui/carousel";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
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
            <hr className="mt-2"/>
          </div>


          <div className="p-2 w-full">
            {Object.keys(categorizedPosts).map((category) => (
              <div key={category} className="mb-1">
                <h2 className="text-3xl font-bold mb-2 mt-4 text-black text-center underline">{category}</h2>

                {/* Conditional Rendering of Carousel */}
                {categorizedPosts[category].length > 3 ? (
                  <>
                
                 <PostCarousel posts = {categorizedPosts[category]}/>
                      
                    
                  </>
                    
                    
                   
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
  );
}

export default AllPosts;
