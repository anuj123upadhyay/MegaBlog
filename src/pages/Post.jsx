import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/configAppwrite";
import { Button, Container } from "../componenets";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import {
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from "react-share";
import { faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
                <h2 className="text-2xl">Share with your friends!</h2>
                <div className="flex gap-5 w-full justify-center items-center py-2">
                    <LinkedinShareButton url="https://mega-blog-8587.vercel.app/">
                        <FontAwesomeIcon className="text-[#0072b1] hover:text-[#34B7F1] text-4xl transition-colors duration-300" icon={faLinkedin} />
                    </LinkedinShareButton>
                    <WhatsappShareButton url="https://mega-blog-8587.vercel.app/">
                        <FontAwesomeIcon className="text-[#1ca04c] hover:text-[#25D366] text-4xl transition-colors duration-300" icon={faWhatsapp} />
                    </WhatsappShareButton>
                    <TwitterShareButton url="https://mega-blog-8587.vercel.app/">
                        <FontAwesomeIcon className="text-gray-600 hover:text-black text-4xl transition-colors duration-300" icon={faXTwitter} />
                    </TwitterShareButton>
                </div>
            </Container>
        </div>
    ) : null;
    
}