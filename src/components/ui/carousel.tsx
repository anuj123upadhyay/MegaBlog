
import PostCard from "../../componenets/PostCard"; // Assuming 'components' is the correct path
// components/PostCarousel.js
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';



const PostCarousel = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 940px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 941px)' });
  const postsWidth = isSmallScreen ? 100 : 100 / 3;

  const nextPost = useCallback(() => {
    if (!isHovered) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        // When at the last post, reset to the first post
        if (prevIndex === posts.length - 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(1); // Reset to the first post
          }, 500);
          return prevIndex; // Prevent updating immediately
        }
        return prevIndex + 1; // Move to the next post
      });
    }
  }, [isHovered, posts.length]);

  const prevPost = useCallback(() => {
    if (!isHovered) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        // If at the first post, loop back to the second last post
        if (prevIndex === 1) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(posts.length - 1); // Set to the last post
          }, 500);
          return prevIndex; // Prevent updating immediately
        }
        return prevIndex - 1; // Move to the previous post
      });
    }
  }, [isHovered, posts.length]);

  useEffect(() => {
    const timer = setInterval(nextPost, 4000);
    return () => clearInterval(timer);
  }, [nextPost]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="py-2 px-8 rounded-lg shadow-md max-w-5xl mx-auto overflow-hidden bg-indigo-100">
      <div className="max-w-7xl mx-auto  ">
        <div className="relative mt-5  border border-b-indigo-500 shadow-b-lg">
          <div className="overflow-hidden ">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${!isTransitioning ? 'transition-none' : ''}`}
              style={{
                transform: `translateX(-${(currentIndex - 1) * postsWidth}%)`,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {posts.map((post, index) => (
                <div key={index} className={`w-full ${isSmallScreen ? 'flex-shrink-0' : 'sm:w-1/3 flex-shrink-0'} px-2 justify-center items-center px-1` }>
                  <PostCard key={index} {...post} />
                </div>
              ))}
            </div>
          </div>

          {currentIndex > 1 && (
            <button
              onClick={prevPost}
              className="absolute top-1/2 -left-4 ml-1 bg-indigo-600 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:shadow-lg hover:bg-indigo-700"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {currentIndex < posts.length - 2 && (
            <button
              onClick={nextPost}
              className="absolute top-1/2 -right-4 mr-1 bg-indigo-600 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:shadow-lg hover:bg-indigo-700"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
        <div className="flex justify-center mt-8">
          {posts.slice(1, isLargeScreen ? posts.length - 1 : posts.length).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index + 1)}
              className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index + 1 ? 'bg-indigo-600' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostCarousel;