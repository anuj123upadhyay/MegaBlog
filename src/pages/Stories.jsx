import { useState, useEffect } from 'react';

const Stories = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {

        // Fetch posts from the backend API
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/stories/getposts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error("Failed to fetch posts");
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (title && content && category) {
            const newPost = { title, content, category, date: new Date().toISOString() };


            try {
                const response = await fetch('http://localhost:5000/api/stories/saveposts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPost),
                });

                if (response.ok) {
                    const savedPost = await response.json();
                    setPosts([savedPost, ...posts]);  // Add the new post to state
                } else {
                    console.error("Failed to save the post");
                }
            } catch (error) {
                console.error("Error saving the post:", error);
            }

            // Clear form fields

            setTitle('');
            setContent('');
            setCategory('');
        }
    };

    return (
        <>

            <h1 className="text-3xl font-bold text-center mt-10 mb-5 text-gray-800">
                Real Stories, Real Advice: Share Your Experience
            </h1>

            <div className="flex flex-col lg:flex-row items-start gap-8 px-6 lg:px-20 mb-14">
                {/* Left side - Posts */}
                <div className="flex-1 space-y-6">
                    {posts.length === 0 ? (
                        <p className="text-gray-600 text-center">No posts yet. Share your experience!</p>
                    ) : (
                        posts.map((post, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out"
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
                                <p className="text-sm text-indigo-500 font-medium mb-6">{post.category}</p>
                                <p className="text-gray-600 leading-relaxed mb-4">{post.content}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
                                    <button className="text-indigo-600 text-sm font-medium border border-indigo-100 rounded-full px-4 py-1 hover:bg-indigo-50 transition-colors">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>



                {/* Right side - Form */}
                <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Title of your story"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <textarea
                            placeholder="Write about your story..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full p-3 h-32 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        ></textarea>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="" disabled>Select Blog Category</option>

                            <optgroup label="Career and Growth">
                                <option value="Interview Tips">Interview Tips</option>
                                <option value="Job Referrals">Job Referrals</option>
                                <option value="Career Advice">Career Advice</option>
                                <option value="Networking Strategies">Networking Strategies</option>
                                <option value="Skill Building">Skill Building</option>
                                <option value="Resume & Portfolio Tips">Resume & Portfolio Tips</option>
                                <option value="Job Hunt Strategies">Job Hunt Strategies</option>
                            </optgroup>

                            <optgroup label="Tech and Industry Trends">
                                <option value="Latest Tech News">Latest Tech News</option>
                                <option value="Emerging Technologies">Emerging Technologies</option>
                                <option value="Industry Analysis">Industry Analysis</option>
                                <option value="Tech Events & Conferences">Tech Events & Conferences</option>
                            </optgroup>

                            <optgroup label="Work Culture & Lifestyle">
                                <option value="Work-Life Balance">Work-Life Balance</option>
                                <option value="Remote Work Tips">Remote Work Tips</option>
                                <option value="Productivity Hacks">Productivity Hacks</option>
                                <option value="Workplace Culture">Workplace Culture</option>
                                <option value="Mental Health in Tech">Mental Health in Tech</option>
                            </optgroup>

                            <optgroup label="Personal Development">
                                <option value="Personal Branding">Personal Branding</option>
                                <option value="Public Speaking & Communication">Public Speaking & Communication</option>
                                <option value="Learning New Skills">Learning New Skills</option>
                                <option value="Freelancing Tips">Freelancing Tips</option>
                            </optgroup>
                        </select>

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md focus:outline-none"
                        >
                            Post Experience
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Stories;
