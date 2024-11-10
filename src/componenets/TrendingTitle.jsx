import React, { useState, useEffect } from "react";

const TrendingTitles = () => {
  const [titles, setTitles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to show the first title
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const fetchTrendingTitles = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/generate_trending_titles"
        );
        const data = await response.json();

        // Clean and format the titles
        const cleanedTitles = data.trending_titles.map(
          (item) =>
            item
              .replace(/^\d+\.\s*/, "") // Remove numbering
              .replace(/^\*\*(.*)\*\*$/, "$1") // Remove bold formatting
        );

        setTitles(cleanedTitles);
        console.log(cleanedTitles);
      } catch (error) {
        console.error("Error fetching trending titles:", error);
      }
    };

    fetchTrendingTitles();
  }, []);

  const renderNextTitle = () => {
    if (currentIndex < titles.length) {
      setCurrentIndex(currentIndex + 1);
    }

    if (currentIndex + 1 === titles.length) {
      setIsButtonVisible(false);
    }
  };

  return (
    <>
      <div class="relative overflow-hidden border-b w-full bg-indigo-600 mb-2">
        <div class="px-6 py-8 sm:px-6 sm:py-20">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-2xl font-semibold tracking-tight text-center text-black sm:text-4xl dark:text-white">
              ✨ Discover Inspiring Ideas for Your Next Blog Post ✨
            </h2>
            <p class="max-w-xl mx-auto mt-3 text-gray-700 sm:mt-6 text-md sm:text-lg sm:leading-snug dark:text-gray-300">
              We're constantly working to improve and expand our toolset to meet
              your needs. Uncover unique topics and spark creativity for your
              blog with these hand-picked ideas.
            </p>
            <div class="flex items-center justify-center mt-6 sm:mt-10 gap-x-6">
              {titles.slice(0, currentIndex).map((title, index) => (
                <div
                  key={index}
                  className={`text-xl font-semibold text-gray-900 dark:text-gray-200 transform animate-fade-in-up transition-all duration-1000`}
                  style={{
                    animationDelay: `${index * 0.3}s`, // Staggering the animations
                  }}
                >
                  {title}
                </div>
              ))}

              {isButtonVisible && (
                <button
                  id="nextTitleButton"
                  onClick={renderNextTitle}
                  className="mt-6 py-3 w-2/5 bg-white text-black font-bold text-xl rounded-lg shadow-md"
                >
                  Generate New Title ✨
                </button>
              )}
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 z-10 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#gradient-indigo)"
            fill-opacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="gradient-indigo">
              <stop offset="0" stop-color="white"></stop>
              <stop offset="1" stop-color="#4338ca"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* <div className="p-6 mx-auto bg-white shadow-lg dark:bg-gray-800">
        <div>
          <div className="mx-auto p-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-4">
              ✨ Discover Inspiring Ideas for Your Next Blog Post ✨
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Uncover unique topics and spark creativity for your blog with
              these hand-picked ideas.
            </p>
          </div>

          <div className="my-6 border-t border-gray-300 dark:border-gray-600"></div>

          <div id="trending-titles" className="space-y-4">
            {titles.slice(0, currentIndex).map((title, index) => (
              <div
                key={index}
                className={`text-xl font-semibold text-gray-900 dark:text-gray-200 transform animate-fade-in-up transition-all duration-1000`}
                style={{
                  animationDelay: `${index * 0.3}s`, // Staggering the animations
                }}
              >
                {title}
              </div>
            ))}
          </div>

          {isButtonVisible && (
            <button
              id="nextTitleButton"
              onClick={renderNextTitle}
              className="mt-6  py-3 w-2/5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-md"
            >
              Generate New Title ✨
            </button>
          )}
        </div>
      </div> */}
    </>
  );
};

export default TrendingTitles;
