// // // import React, { useState, useEffect } from "react";

// // // const TrendingTitles = () => {
// // //   const [titles, setTitles] = useState([]);
// // //   const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to show the first title
// // //   const [isButtonVisible, setIsButtonVisible] = useState(true);

// // //   useEffect(() => {
// // //     const fetchTrendingTitles = async () => {
// // //       try {
// // //         const response = await fetch(
// // //           "http://127.0.0.1:8000/generate_trending_titles"
// // //         );
// // //         const data = await response.json();

// // //         // Clean and format the titles
// // //         const cleanedTitles = data.trending_titles.map(
// // //           (item) =>
// // //             item
// // //               .replace(/^\d+\.\s*/, "") // Remove numbering
// // //               .replace(/^\*\*(.*)\*\*$/, "$1") // Remove bold formatting
// // //         );

// // //         setTitles(cleanedTitles);
// // //         console.log(cleanedTitles);
// // //       } catch (error) {
// // //         console.error("Error fetching trending titles:", error);
// // //       }
// // //     };

// // //     fetchTrendingTitles();
// // //   }, []);

// // //   const renderNextTitle = () => {
// // //     if (currentIndex < titles.length) {
// // //       setCurrentIndex(currentIndex + 1);
// // //     }

// // //     if (currentIndex + 1 === titles.length) {
// // //       setIsButtonVisible(false);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <div class="relative overflow-hidden border-b w-full bg-indigo-600 mb-2">
// // //         <div class="px-6 py-8 sm:px-6 sm:py-20">
// // //           <div class="max-w-4xl mx-auto text-center">
// // //             <h2 class="text-2xl font-semibold tracking-tight text-center text-black sm:text-4xl dark:text-white">
// // //               ✨ Discover Inspiring Ideas for Your Next Blog Post ✨
// // //             </h2>
// // //             <p class="max-w-xl mx-auto mt-3 text-gray-700 sm:mt-6 text-md sm:text-lg sm:leading-snug dark:text-gray-300">
// // //               We're constantly working to improve and expand our toolset to meet
// // //               your needs. Uncover unique topics and spark creativity for your
// // //               blog with these hand-picked ideas.
// // //             </p>
// // //             <div class="flex items-center justify-center mt-6 sm:mt-10 gap-x-6">
// // //               {titles.slice(0, currentIndex).map((title, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className={`text-xl font-semibold text-gray-900 dark:text-gray-200 transform animate-fade-in-up transition-all duration-1000`}
// // //                   style={{
// // //                     animationDelay: `${index * 0.3}s`, // Staggering the animations
// // //                   }}
// // //                 >
// // //                   {title}
// // //                 </div>
// // //               ))}

// // //               {isButtonVisible && (
// // //                 <button
// // //                   id="nextTitleButton"
// // //                   onClick={renderNextTitle}
// // //                   className="mt-6 py-3 w-2/5 bg-white text-black font-bold text-xl rounded-lg shadow-md"
// // //                 >
// // //                   Generate New Title ✨
// // //                 </button>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <svg
// // //           viewBox="0 0 1024 1024"
// // //           class="absolute left-1/2 z-10 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
// // //           aria-hidden="true"
// // //         >
// // //           <circle
// // //             cx="512"
// // //             cy="512"
// // //             r="512"
// // //             fill="url(#gradient-indigo)"
// // //             fill-opacity="0.7"
// // //           ></circle>
// // //           <defs>
// // //             <radialGradient id="gradient-indigo">
// // //               <stop offset="0" stop-color="white"></stop>
// // //               <stop offset="1" stop-color="#4338ca"></stop>
// // //             </radialGradient>
// // //           </defs>
// // //         </svg>
// // //       </div>

// // //       {/* <div className="p-6 mx-auto bg-white shadow-lg dark:bg-gray-800">
// // //         <div>
// // //           <div className="mx-auto p-6 text-center">
// // //             <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-4">
// // //               ✨ Discover Inspiring Ideas for Your Next Blog Post ✨
// // //             </h1>
// // //             <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
// // //               Uncover unique topics and spark creativity for your blog with
// // //               these hand-picked ideas.
// // //             </p>
// // //           </div>

// // //           <div className="my-6 border-t border-gray-300 dark:border-gray-600"></div>

// // //           <div id="trending-titles" className="space-y-4">
// // //             {titles.slice(0, currentIndex).map((title, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`text-xl font-semibold text-gray-900 dark:text-gray-200 transform animate-fade-in-up transition-all duration-1000`}
// // //                 style={{
// // //                   animationDelay: `${index * 0.3}s`, // Staggering the animations
// // //                 }}
// // //               >
// // //                 {title}
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {isButtonVisible && (
// // //             <button
// // //               id="nextTitleButton"
// // //               onClick={renderNextTitle}
// // //               className="mt-6  py-3 w-2/5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-md"
// // //             >
// // //               Generate New Title ✨
// // //             </button>
// // //           )}
// // //         </div>
// // //       </div> */}
// // //     </>
// // //   );
// // // };

// // // export default TrendingTitles;


// // import React, { useState } from 'react';
// // import { Client, Databases } from 'appwrite';
// // import conf from "../config/config"

// // const TrendingTopics = () => {
// //   const [category, setCategory] = useState('');
// //   const [topics, setTopics] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');

// //   // Initialize Appwrite SDK
// //   const client = new Client();
// //   client
// //     .setEndpoint(conf.appwriteUrl)  // Appwrite endpoint
// //     .setProject(conf.appwriteProjectId);  // Project ID

// //   const databases = new Databases(client);

// //   // Function to store data in Appwrite collection
// //   const storeTopicsInAppwrite = async (topicsData) => {
// //     try {
// //       await databases.createDocument(
// //         conf.appwriteTrendinTopicCollectionId, // Collection ID
// //         'unique()', // Document ID (you can use 'unique()' to auto-generate)
// //         topicsData  // Data to store
// //       );
// //     } catch (err) {
// //       setError('Error storing topics in Appwrite: ' + err.message);
// //     }
// //   };

// //   // Function to fetch trending topics from Hugging Face API
// //   const fetchTrendingTopics = async () => {
// //     setLoading(true);
// //     setError('');
// //     // const payload = {
// //     //   inputs: "<s>[INST] What are the trending topics in health? [/INST]",
// //     // };

// //     // console.log('Payload:', payload);



// //     try {
// //       const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2', {
// //         method: 'POST',
// //         headers: {
// //           Authorization: `Bearer ${conf.appwriteHuggingFaceAcessToken}`,
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           inputs: "<s>[INST] Provide 7 trending topics related to: health [/INST]",
// //           parameters: {
// //             max_new_tokens: 50,
// //           },
// //         }), // Pass the category as input
// //       });

// //       const result = await response.json();

// //       if (response.ok) {
// //         const topicsData = result;  // Parse the response data into topics

// //         // Store the topics in Appwrite
// //         await storeTopicsInAppwrite(topicsData);

// //         // Set the topics to display on frontend
// //         setTopics(topicsData);
// //       } else {
// //         setError('Failed to fetch topics from Hugging Face');
// //       }
// //     } catch (err) {
// //       setError('Error fetching topics: ' + err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Trending Topics</h1>
// //       <input
// //         type="text"
// //         placeholder="Enter category"
// //         value={category}
// //         onChange={(e) => setCategory(e.target.value)}
// //       />
// //       <button onClick={fetchTrendingTopics} disabled={loading}>
// //         {loading ? 'Loading...' : 'Fetch Topics'}
// //       </button>

// //       {error && <p style={{ color: 'red' }}>{error}</p>}

// //       <h2>Trending Topics:</h2>
// //       {topics.length > 0 ? (
// //         <ul>
// //           {topics.map((topic, index) => (
// //             <li key={index}>{topic}</li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No topics found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default TrendingTopics;




// import React, { useState } from "react";
// import service from "../appwrite/configAppwrite";

// const TrendingTopics = () => {
//     const [topics, setTopics] = useState([]);
//     const [error, setError] = useState(null);

//     const handleFetchTopics = async () => {
//         try {
//             const response = await service.fetchTrendingTopics("Provide 7 trending topics related to: health");
//             setTopics(response.generated_text.split("\n")); // Assuming output is line-separated
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <div>
//             <h1>Trending Topics</h1>
//             <button onClick={handleFetchTopics}>Fetch Topics</button>
//             {error && <p style={{ color: "red" }}>Error: {error}</p>}
//             <ul>
//                 {topics.map((topic, index) => (
//                     <li key={index}>{topic}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TrendingTopics;




// import { useState } from 'react';
// import Button from './Button'; // Adjust as needed
// import SparklesIcons from './SparkelIcons';
// import { callAI } from '../utils/ai';// Import the Hugging Face AI function

// const TrendingTopics = () => {
//     const [textAreaVal, setTextAreaVal] = useState(""); // Store generated topics
//     const [isGenerating, setIsGenerating] = useState(false); // Loading state
//     const [topicInput, setTopicInput] = useState(""); // User input for the prompt

//     const generateTrendingTopics = async () => {
//       setTextAreaVal("");  // Clear the textarea value
  
//       if (!topicInput) {
//           alert("Please provide a topic.");
//           return;
//       }
  
//       setIsGenerating(true);
  
//       const prompt = `Provide 7 trending topics related to: ${topicInput}`;
  
//       try {
//           const res = await callAI(prompt);  // Call the AI service to get trending topics
//           setIsGenerating(false);
  
//           // create a typing effect for the response
//           res.split("").forEach((char, index) => {
//               setTimeout(() => {
//                   setTextAreaVal((prevText) => prevText + char);
//               }, index * 32);  // Adjust typing speed as needed
//           });
//       } catch (error) {
//           console.log("Error generating trending topics: ", error);
//           setIsGenerating(false);
//       }
//   };
  

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={topicInput}
//                 onChange={(e) => setTopicInput(e.target.value)} // Set input value for topic
//                 placeholder="Enter a topic to generate trending topics"
//             />
//             <textarea
//               value={textAreaVal}
//               onChange={(e) => setTextAreaVal(e.target.value)}
//               placeholder="Trending topics will appear here"
//               maxLength={500}
//               className="w-full h-40 p-2 text-sm border border-gray-600 rounded-md resize-y"
//           ></textarea>

            
            
//             <Button
//                 onClick ={generateTrendingTopics}  // Use the updated function here
//                 disable={isGenerating ? "true":"false"}
//                 className="bg-light mt-2 w-fit ml-auto"
//             >
//                     <span>Generate Trending Topics</span>
//                     <SparklesIcons height={20} />
//                   </Button>

//                 {textAreaVal.length > 499 && (
//                     <span className="text-error mt-1">
//                         Warning: Description is getting too long. Can only be 500 characters.
//                     </span>
//     )}
//             </div>
//     );
// };

// export default TrendingTopics;





import { useState } from 'react';
import Button from './Button'; // Adjust as needed
import { useNavigate } from 'react-router-dom'; 
import SparkelIcons from './SparkelIcons';
import { callAI } from '../utils/ai'; // Import the Hugging Face AI function

const TrendingTitles = () => {
    const [textAreaVal, setTextAreaVal] = useState(""); // Store generated topics
    const [isGenerating, setIsGenerating] = useState(false); // Loading state
    const [topicInput, setTopicInput] = useState(""); // User input for the prompt

    const navigate = useNavigate(); 

    const generateTrendingTopics = async () => {
        setTextAreaVal("");  // Clear the textarea value

        if (!topicInput) {
            alert("Please provide a topic.");
            return;
        }

        setIsGenerating(true);

        const prompt = `Provide just 5  trending topics for writing a blog  related to: ${topicInput}`;

        try {
            const res = await callAI(prompt);  // Call the AI service to get trending topics
            setIsGenerating(false);

            // Create a typing effect for the response
            res.split("").forEach((char, index) => {
                setTimeout(() => {
                    setTextAreaVal((prevText) => prevText + char);
                }, index * 32);  // Adjust typing speed as needed
            });
        } catch (error) {
            console.log("Error generating trending topics: ", error);
            setIsGenerating(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Trending Topics Generator</h2>

            {/* Topic Input Field */}
            <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)} // Set input value for topic
                placeholder="Enter a topic to generate trending topics"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Textarea to display generated topics */}
            <textarea
                value={textAreaVal}
                onChange={(e) => setTextAreaVal(e.target.value)}
                placeholder="Trending topics will appear here"
                maxLength={500}
                className="w-full h-40 p-3 text-sm border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Button to trigger the generation */}
            <div className="flex justify-end mt-4">
                <Button
                    onClick={generateTrendingTopics}  // Use the updated function here
                    disable={isGenerating ? "true" : "false"}
                    className="bg-blue-500 text-white p-2 rounded-md w-fit flex items-center justify-center hover:bg-blue-600 disabled:bg-gray-400 transition duration-300"
                >
                    <span>Generate Trending Topics</span>
                    <SparkelIcons height={20} className="ml-2" />
                </Button>
            </div>

            {/* Warning Message */}
            {textAreaVal.length > 499 && (
                <span className="text-red-600 mt-2 text-sm">
                    Warning: Description is getting too long. Can only be 500 characters.
                </span>
            )}

            {/* Loading/Generating indicator */}
            {isGenerating && (
                <div className="mt-4 text-center text-blue-500">
                    Generating trending topics... Please wait.
                </div>
            )}
        </div>
    );
};

export default TrendingTitles;

