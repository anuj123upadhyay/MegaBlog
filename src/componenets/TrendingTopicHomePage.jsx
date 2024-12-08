import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Button from './Button'; // Button component for styling
import SparkelIcons from './SparkelIcons'; // Sparkle icon component

const TrendingTopicHomePage = () => {
  return (
    <>
      
          <div class="relative overflow-hidden border-b w-full bg-indigo-600 mb-2">
  <div class="px-6 py-8 sm:px-6 sm:py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-2xl font-semibold text-black sm:text-4xl dark:text-white">
        ✨ Discover Inspiring Ideas for Your Next Blog Post ✨
      </h2>
      <p class="max-w-xl mx-auto mt-3 text-gray-700 sm:mt-6 sm:text-lg dark:text-gray-300">
        Uncover unique topics and spark creativity for your blog with these hand-picked ideas.
      </p>

        {/* Button to navigate to /gen-topic */}
        <div className="flex justify-center mt-8">
          <Link to="/gen-topic">
            <Button className="bg-white text-blue-600 py-3 px-7 rounded-lg w-fit flex items-center hover:bg-blue-300 transition-all duration-300">
              <span>Generate Trending Topics</span>
              <SparkelIcons height={20} className="ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </div> 
    </div>


    </>
    
  );
};

export default TrendingTopicHomePage;
