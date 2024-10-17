import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    if (open === index) {
      setOpen(null); // Close if already open
    } else {
      setOpen(index); // Open the clicked one
    }
  };

  const faqs = [
    {
      question: "What are the benefits of using your blog platform?",
      answer:
        "Our platform is designed to be easy to use and manage, allowing you to focus on creating high-quality content. We offer a variety of features to help you grow your audience and engage with your readers.",
    },
    {
      question: "How do I create a blog post?",
      answer:
        "Creating a blog post is simple! Just log in to your account, navigate to the 'Create Post' section, and start writing. You can easily add images, videos, and other multimedia content to enhance your posts.",
    },
    {
      question: "Can I customize the look and feel of my blog?",
      answer:
        "Absolutely! We offer a variety of themes and customization options to help you create a blog that reflects your own unique style and brand.",
    },
    {
      question: "How do I promote my blog?",
      answer:
        "We provide several tools and resources to help you promote your blog. You can share your posts on social media, submit them to search engines, and even integrate your blog with other platforms to reach a wider audience.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We have a dedicated support team available to answer your questions and help you with any issues you may encounter. You can reach us through email, live chat, or our knowledge base.",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mt-2 mb-2 sm:mt-4"
      >
        <p className="font-bold text-4xl">Frequently Asked Questions</p>
        <p className="text-gray-500 text-sm mt-2 mx-16 ">
          Thank you for visiting our website! We are here to help answer your queries.
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="faq-question text-xl sm:text-2xl font-semibold flex justify-between items-center">
                {faq.question}
                <span
                  className={`transition-transform duration-300 transform ${
                    open === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⌄
                </span>
              </h3>
              {open === index && (
                <motion.p
                  className="faq-answer mt-2 text-sm text-left sm:text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
