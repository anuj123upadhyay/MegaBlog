import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../componenets";
import service from "../appwrite/configAppwrite";
import { useNavigate, useParams } from "react-router-dom";
import EditPostForm from "../componenets/EditPostForm";

function EditPost() {
  const [postData, setPostsData] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogId, setBlogId] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (slug) {
      service
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPostsData(post);
            setBlogId(post.$id);
            setUserId(post.userId); // Assuming `userId` is coming from the post object
            console.log("postinfo", post);
            console.log("postinfo", post.$id);
            console.log("user", post.userId);
          } else {
            console.log("Post not found");
          }
        })
        .catch((error) => {
          console.log("Error fetching post:", error);
        });
    } else {
      console.log("Slug is missing or invalid");
    }
  }, [slug]);

  //   return post ? (
  //     <div className='py-8'>
  //         <Container>
  //             <PostForm post={post} />
  //         </Container>
  //     </div>
  //   ) : null

  return postData ? (
    <>
      <div className="p-6">
        <EditPostForm post={postData} />
      </div>
    </>
  ) : (
    <>
      <div class="animate-pulse block-item shadow-md max-w-full mx-auto mt-20">
        <div class="bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 h-6 rounded-t-3xl"></div>
        <div class="py-4 px-6">
          <div class="flex items-center space-x-2">
            <div class="h-7 w-7 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full"></div>
            <div class="h-3 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-1/3"></div>
          </div>
          <div class="my-6">
            <div class="h-5 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-3/4"></div>
            <div class="my-4">
              <div class="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-full"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-5/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-4/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-5/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-3/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-2/6"></div>
            </div>
          </div>
          <div class="my-4">
            <div class="h-11 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-lg w-full"></div>
            <div class="h-3 my-4 mx-auto bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPost;
