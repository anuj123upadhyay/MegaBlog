import React, { useState } from "react";

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
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="faq-qeustion text-xl sm:text-2xl font-semibold flex justify-between items-center">
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
              <p className="faq-answer mt-2 text-sm text-left sm:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
