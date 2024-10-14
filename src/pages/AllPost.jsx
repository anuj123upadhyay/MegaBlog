"use client"
import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../componenets";
import service from "../appwrite/configAppwrite";

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

            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Have a look at our Blog Posts.
            </p>
          </div>

          <div className="p-4 w-full">
            {Object.keys(categorizedPosts).map((category) => (
              <div key={category} className="mb-8">
                <h2 className="text-3xl font-bold mb-4">{category}</h2>
                <div className="flex flex-wrap">
                  {categorizedPosts[category].map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                      <PostCard {...post} />
                    </div>
                  ))}

                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
