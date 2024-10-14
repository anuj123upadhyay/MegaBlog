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

  return (
    <div className="w-full py-8">
      <Container>
        <div className="min-h-screen flex flex-col flex-wrap items-center p-4 ">
          <div className="lg:w-11/12 w-full rounded-lg">
            <h1 className="text-5xl font-extrabold text-center text-black mb-6">
              Visit All Blogs
            </h1>

            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Have a look at our Blog Posts.
            </p>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap justify-around">
              {posts.map((post) => (
                <div
                  key={post.$id}
                  className="p-2 flex flex-wrap sm:w-[350px] w-[300px]"
                >
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
