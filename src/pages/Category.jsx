import React, { useEffect, useState } from "react";
import service from "../appwrite/configAppwrite";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { WandSparkles } from "lucide-react";
import PostCard from "../componenets/PostCard";
import { motion } from 'framer-motion';


function CategoryPosts() {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      service.getCategory(category).then((post) => {
        if (post) {
          setPosts(post);
          console.log("postssss", posts);
          toast.success("Posts loaded successfully!");
        }
      });
    } else {
      navigate("/");
    }
  }, [category, navigate]);

  const handleCreateNewBlog = () => {
    navigate("/add-post");
  };

  const handleGoBackHome = () => {
    navigate("/");
  };

  const toPascalCase = (str) => {
    return str
      .toLowerCase()
      .split(/[\s_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };


  return posts && posts.length > 0 ? (
    <>
    <div className=" flex flex-col items-center p-4 ">
        <div className="lg:w-11/12 w-full rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold text-center text-black mb-6">
            {toPascalCase(category)}
            </h1>
          </motion.div>

          
        </div>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12">
      {posts.map((post) => (
        <PostCard key={post.$id} {...post} />
      ))}
    </div>
    </>
  ) : (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog">
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className="opacity-25 w-full h-full absolute z-10 inset-0"></div>
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
          <div className="md:flex items-center">
            <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
              <WandSparkles size={32} className="text-indigo-500" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="font-bold">Nothing Found!</p>
              <p className="text-sm text-gray-700 mt-1">
                This category does not have any blogs currently.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              id="confirm-create-btn"
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-indigo-200 text-indigo-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
              onClick={handleCreateNewBlog}
            >
              Create a New Blog
            </button>
            <button
              id="confirm-cancel-btn"
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
              onClick={handleGoBackHome}
            >
              Go Back to Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPosts;
