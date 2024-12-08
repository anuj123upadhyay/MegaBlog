




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

