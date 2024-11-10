'use client'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ContactPage from "./ContactPage";

const ContactUsBgSkeleton = () => (
  <div className="relative h-[600px] bg-gray-100 overflow-hidden border border-gray-300 animate-pulse">
    <div className="absolute inset-0 grid grid-cols-12 gap-4 bg-[length:60px_60px] bg-gray-200" />

    {/* Skeleton floating circles */}
    <div className="absolute top-[-35px] left-[300px] h-36 w-36 bg-gray-300 rounded-full animate-pulse" />
    <div className="absolute top-[50px] right-[50px] h-[400px] w-[400px] bg-gray-300 rounded-full animate-pulse" />
    <div className="absolute bottom-10 right-[500px] h-28 w-28 bg-gray-300 rounded-full animate-pulse" />
    <div className="absolute bottom-[-60px] left-8 h-[200px] w-[200px] bg-gray-300 rounded-full animate-pulse" />

    {/* Skeleton for text content */}
    <div className="relative z-10 flex flex-col items-start justify-center h-full pl-12 text-left space-y-4">
      <div className="h-10 w-3/4 bg-gray-300 rounded-md" />
      <div className="h-10 w-2/3 bg-gray-300 rounded-md mt-2" />
      <div className="h-5 w-1/2 bg-gray-300 rounded-md mt-4" />
      <div className="h-5 w-1/2 bg-gray-300 rounded-md mt-2" />
      
      {/* Skeleton for buttons */}
      <div className="flex space-x-4 mt-8">
        <div className="h-10 w-24 bg-gray-300 rounded-md" />
        <div className="h-10 w-24 bg-gray-300 rounded-md" />
      </div>
    </div>
  </div>
);

const ContactUsBg = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ContactUsBgSkeleton />;
  }

  return (
    <div className="relative h-[1000px] bg-white flex justify-center items-center overflow-hidden border border-gray-300">
      <motion.div
        className="absolute inset-0 grid grid-cols-12 gap-4 bg-[length:60px_60px]"
        style={{
          backgroundImage: `
            linear-gradient(270deg, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0) 25.1%),
            linear-gradient(to right, #e2e8f0 0.5px, transparent 3.1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 70%)`
        }}
      >
        {/* Floating Circles with subtle scaling and hovering animation */}
        <motion.div
          className="absolute top-[-35px] left-[300px] h-36 w-36 bg-indigo-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[50px] right-[50px] h-[400px] w-[400px] bg-black rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="absolute top-[750px] right-[50px] h-[400px] w-[400px] bg-black rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="absolute top-[950px] left-[50px] h-28 w-28 bg-indigo-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[1100px] left-[75px] h-[400px] w-[400px] bg-indigo-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[1900px] left-[75px] h-[200px] w-[200px] bg-indigo-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[200px] left-[50px] h-[200px] w-[200px] bg-black rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-10 right-[500px] h-28 w-28 bg-indigo-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-[-60px] left-8 h-[200px] w-[200px] bg-black rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
        />
      </motion.div>

      {/* Centered White Box */}
      <div className="relative z-10 bg-white -mt-60 -mb-24 rounded-lg shadow-lg p-12 w-[1200px] h-[700px] flex ">
        <div className="w-full">

        <ContactPage/>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBg;
