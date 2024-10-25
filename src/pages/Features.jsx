import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Create Engaging Blog Posts",
    description:
      "Easily create rich and engaging blog posts with our user-friendly editor. Add multimedia content like images, videos, and more.",
    icon: "📝",
  },
  {
    title: "Interact with Blogs",
    description:
      "Read, like, and comment on blogs created by others. Engage with the community and share your thoughts.",
    icon: "❤️",
  },
  {
    title: "Explore Blog Categories",
    description:
      "Browse blogs across different categories to discover new content and follow topics that matter to you.",
    icon: "🔍",
  },
  {
    title: "Responsive Design",
    description:
      "Access your favorite blogs anytime, anywhere with our mobile-friendly, responsive design.",
    icon: "📱",
  },
  {
    title: "Customize Your Blog",
    description:
      "Personalize your blog’s theme and layout to reflect your style. Make your blog stand out with ease.",
    icon: "🎨",
  },
  {
    title: "Analytics and Growth Tools",
    description:
      "Track your blog’s performance and use our integrated tools to help grow your audience.",
    icon: "📈",
  },
];

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Features We Offer
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="feature-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center text-4xl mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
