import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/configAppwrite";
import { Container } from "../componenets";
import { Button } from "../components/ui/button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Trash2, WandSparkles } from "lucide-react";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const [blogId, setBlogId] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          console.log("postinfo", post);
          setBlogId(post.$id);
          console.log("postinfo", post.$id);
          setUserId(userId);
          console.log("user", post.userId);
        } else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = async (blogId, userId) => {
    console.log("Deleting post with blogId:", blogId, "by userId:", userId);
    if (!blogId) return;

    const deletionSuccess = await service.deletePost(blogId);
    if (deletionSuccess) {
      if (post.featuredImage) {
        await service.deleteFile(post.featuredImage); // Call to delete the associated file
      }
      navigate("/"); // Redirect after deletion
    } else {
      console.error("Failed to delete the post");
    }
  };

  const handleEditClick = async (blogId) => {
    navigate(`/edit/${blogId}`);
  };

  const toPascalCase = (str) => {
    return str
      .toLowerCase()
      .split(/[\s_]+/) // Split by space or underscore
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter
      .join(" "); // Join with a space
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="min-h-screen flex flex-col items-center p-4 ">
          {isAuthor && (
            <div className="absolute right-6 flex gap-2 mb-2 ">
                
              <button
                className="bg-red-500 flex items-center justify-cente gap-2 p-2 rounded-md text-white text-center font-medium px-3 mr-3"
                onClick={() => {
                  console.log("Delete button clicked"); // Test if click works
                  deletePost(blogId, userData.$id);
                }}
              >
                Delete <Trash2 size={20}/>
              </button>
              
              <Link
              to={`/edit/${blogId}`}
              className="w-full block flex gap-2 rounded-md border border-indigo-600 bg-indigo-500 px-3 py-3 text-center text-sm font-semibold text-white "
            >
              Edit Post <WandSparkles size={20} />
            </Link>
            </div>
          )}
          <div className="lg:w-11/12 w-full rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-center"
            >
              <h1 className="text-5xl font-extrabold text-center text-black mb-6">
                {toPascalCase(post.title)}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
                {post.slug ||
                  "Excited to read the blog, let us know how it goes :)"}
              </p>
            </motion.div>
          </div>

          <div className="w-full flex justify-center mb-4 relative rounded-xl p-2">
            <img
              src={service.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl text-center items-center border-2 border-gray-300"
            />
          </div>
          {/* Display the post content */}
          <div className="lg:w-11/12 w-full bg-white p-6 rounded-lg shadow-md">
            {post.content && parse(post.content)}
          </div>

          <div className="bg-gray-100 w-full">
            <h2 className="text-3xl font-bold text-center my-8">
              Share with your friends!
            </h2>
            <div className="flex gap-5 w-full justify-center items-center py-4 relative">
              <LinkedinShareButton
                url={`https://mega-blog-8587.vercel.app/${slug}`}
                className="group relative"
              >
                <FontAwesomeIcon
                  className="text-[#0072b1] text-4xl transition-transform transform group-hover:scale-125 duration-300"
                  icon={faLinkedin}
                />
                <span className="text-md font-semibold italic absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-gray-600 hidden group-hover:inline-block">
                  LinkedIn
                </span>
              </LinkedinShareButton>

              <WhatsappShareButton
                url={`https://mega-blog-8587.vercel.app/${slug}`}
                className="group relative"
              >
                <FontAwesomeIcon
                  className="text-[#25D366] text-4xl transition-transform transform group-hover:scale-125 duration-300"
                  icon={faWhatsapp}
                />
                <span className="text-md font-semibold italic absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-gray-600 hidden group-hover:inline-block">
                  WhatsApp
                </span>
              </WhatsappShareButton>

              <TwitterShareButton
                url={`https://mega-blog-8587.vercel.app/${slug}`}
                className="group relative"
              >
                <FontAwesomeIcon
                  className="text-[#1DA1F2] text-4xl transition-transform transform group-hover:scale-125 duration-300"
                  icon={faXTwitter}
                />
                <span className="text-md font-semibold italic absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-gray-600 hidden group-hover:inline-block">
                  Twitter
                </span>
              </TwitterShareButton>

              <FacebookShareButton
                url={`https://mega-blog-8587.vercel.app/${slug}`}
                className="group relative"
              >
                <FontAwesomeIcon
                  className="text-[#4267B2] text-4xl transition-transform transform group-hover:scale-125 duration-300"
                  icon={faFacebook}
                />
                <span className="text-md font-semibold italic absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-gray-600 hidden group-hover:inline-block">
                  Facebook
                </span>
              </FacebookShareButton>

              <EmailShareButton
                url={`https://mega-blog-8587.vercel.app/${slug}`}
                className="group relative"
              >
                <FontAwesomeIcon
                  className="text-[#EA4335] text-4xl transition-transform transform group-hover:scale-125 duration-300"
                  icon={faEnvelope}
                />
                <span className="text-md font-semibold italic absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-gray-600 hidden group-hover:inline-block">
                  Email
                </span>
              </EmailShareButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
