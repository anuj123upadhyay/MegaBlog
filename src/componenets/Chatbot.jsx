
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { useState } from 'react';
import "../App.css"

const steps = [
    // Step 1: Welcome Message
    {
        id: '1',
        message: 'Welcome to Megablog! How can I assist you today?',
        trigger: 'mainOptions',
    },

    // Step 2: Show Main Menu with All Features
    {
        id: 'mainOptions',
        options: [
            { value: 'contentRec', label: 'Content Recommendations', trigger: 'contentRec' },
            { value: 'searchAssist', label: 'Search Assistance', trigger: 'searchAssist' },
            { value: 'commentModeration', label: 'Comment Moderation', trigger: 'commentModeration' },
            { value: 'subscribeNotify', label: 'Subscription & Notifications', trigger: 'subscribeNotify' },
            { value: 'guidedNav', label: 'Guided Navigation', trigger: 'guidedNav' },
            { value: 'faq', label: 'Q&A and FAQs', trigger: 'faq' },
        ],
    },

    // Step 3: Content Recommendations
    {
        id: 'contentRec',
        message: 'What topics are you interested in?',
        trigger: 'userInterest',
    },
    {
        id: 'userInterest',
        options: [
            { value: 'AI', label: 'AI', trigger: 'recommendAI' },
            { value: 'Technology', label: 'Technology', trigger: 'recommendTech' },
            { value: 'Blockchain', label: 'Blockchain', trigger: 'recommendBlockchain' },
            { value: 'Cybersecurity', label: 'Cybersecurity', trigger: 'recommendCybersecurity' },
            { value: 'Data Science', label: 'Data Science', trigger: 'recommendDataScience' },
            { value: 'Web Development', label: 'Web Development', trigger: 'recommendWebDev' },
            { value: 'Machine Learning', label: 'Machine Learning', trigger: 'recommendML' },
        ],
    },

    // AI Recommendations
    {
        id: 'recommendAI',
        options: [
            { value: 'ai_trends', label: 'Latest Trends in AI', trigger: 'ai_trends' },
            { value: 'ai_future', label: 'Future of AI in Industry', trigger: 'ai_future' },
            { value: 'ai_tools', label: 'AI Tools You Should Know', trigger: 'ai_tools' },
        ],
    },
    {
        id: 'ai_trends',
        message: 'Check out the article: "Latest Trends in AI: What You Need to Know in 2024".',
        trigger: 'mainOptions',
    },
    {
        id: 'ai_future',
        message: 'Read more about "The Future of AI in Industry and How It Will Shape 2025".',
        trigger: 'mainOptions',
    },
    {
        id: 'ai_tools',
        message: 'Discover "Top AI Tools You Should Be Using Right Now".',
        trigger: 'mainOptions',
    },

    // Technology Recommendations
    {
        id: 'recommendTech',
        options: [
            { value: 'tech_innovations', label: 'Recent Innovations in Tech', trigger: 'tech_innovations' },
            { value: 'quantum_computing', label: 'Quantum Computing Overview', trigger: 'quantum_computing' },
            { value: '5g_network', label: 'Impact of 5G Networks', trigger: '5g_network' },
        ],
    },
    {
        id: 'tech_innovations',
        message: 'Read more about "Recent Innovations That Are Changing the Tech World".',
        trigger: 'mainOptions',
    },
    {
        id: 'quantum_computing',
        message: 'Learn more about "Quantum Computing: The Future of Computing Power".',
        trigger: 'mainOptions',
    },
    {
        id: '5g_network',
        message: 'Discover the "Impact of 5G Networks on Technology and Communication".',
        trigger: 'mainOptions',
    },

    // Blockchain Recommendations
    {
        id: 'recommendBlockchain',
        message: 'Here are some popular articles on Blockchain: "Blockchain Beyond Bitcoin", "Applications of Blockchain in Healthcare".',
        trigger: 'mainOptions',
    },

    // Cybersecurity Recommendations
    {
        id: 'recommendCybersecurity',
        message: 'Here are some trending posts on Cybersecurity: "Top Cyber Threats in 2024", "How to Secure Your Business Data".',
        trigger: 'mainOptions',
    },

    // Data Science Recommendations
    {
        id: 'recommendDataScience',
        message: 'Here are some popular articles on Data Science: "Data Science Trends in 2024", "How Data Science Is Transforming Industries".',
        trigger: 'mainOptions',
    },

    // Web Development Recommendations
    {
        id: 'recommendWebDev',
        message: 'Here are some trending posts on Web Development: "Best Web Development Practices", "Future of JavaScript Frameworks".',
        trigger: 'mainOptions',
    },

    // Machine Learning Recommendations
    {
        id: 'recommendML',
        message: 'Here are some popular articles on Machine Learning: "ML Algorithms You Should Know", "Applications of Machine Learning in Healthcare".',
        trigger: 'mainOptions',
    },


    // Step 4: Search Assistance
    {
        id: 'searchAssist',
        message: 'What blog post are you looking for?',
        trigger: 'searchQuery',
    },
    {
        id: 'searchQuery',
        user: true,
        validator: (value) => {
            if (value.length < 3) {
                return 'Please enter a valid query.';
            }
            return true;
        },
        trigger: 'searchResults',
    },
    {
        id: 'searchResults',
        message: 'Here are some posts related to your query: ',
        trigger: 'mainOptions',
    },

    // Step 5: Comment Moderation
    {
        id: 'commentModeration',
        message: 'Would you like to leave a comment or feedback on an article?',
        trigger: 'commentFeedback',
    },
    {
        id: 'commentFeedback',
        options: [
            { value: 'yes', label: 'Yes', trigger: 'commentBox' },
            { value: 'no', label: 'No', trigger: 'mainOptions' },
        ],
    },
    {
        id: 'commentBox',
        message: 'Please type your comment or feedback.',
        trigger: 'userComment',
    },
    {
        id: 'userComment',
        user: true,
        trigger: 'commentConfirm',
    },
    {
        id: 'commentConfirm',
        message: 'Thank you! Your comment has been submitted.',
        trigger: 'mainOptions',
    },

    // Step 6: Subscription & Notifications
    {
        id: 'subscribeNotify',
        message: 'Would you like to subscribe to our newsletter or receive notifications?',
        trigger: 'subscribeOptions',
    },
    {
        id: 'subscribeOptions',
        options: [
            { value: 'newsletter', label: 'Newsletter', trigger: 'subscribeNewsletter' },
            { value: 'notifications', label: 'Notifications', trigger: 'subscribeNotifications' },
        ],
    },
    {
        id: 'subscribeNewsletter',
        message: 'You have been subscribed to our newsletter!',
        trigger: 'mainOptions',
    },
    {
        id: 'subscribeNotifications',
        message: 'You will now receive notifications about new content!',
        trigger: 'mainOptions',
    },

    // Step 7: Guided Navigation
    {
        id: 'guidedNav',
        message: 'Where would you like to go?',
        trigger: 'navOptions',
    },
    {
        id: 'navOptions',
        options: [
            { value: 'about', label: 'About Us', trigger: 'showAbout' },
            { value: 'contact', label: 'Contact Info', trigger: 'showContact' },
            { value: 'archives', label: 'Archives', trigger: 'showArchives' },
        ],
    },
    {
        id: 'showAbout',
        message: 'You can find more about us here: [Link to About Page]',
        trigger: 'mainOptions',
    },
    {
        id: 'showContact',
        message: 'Here is our contact information: [Phone number, Email]',
        trigger: 'mainOptions',
    },
    {
        id: 'showArchives',
        message: 'You can browse through our archives here: [Link to Archives]',
        trigger: 'mainOptions',
    },

    // Step 8: Q&A and FAQs
    {
        id: 'faq',
        message: 'Do you have any questions about Megablog?',
        trigger: 'faqOptions',
    },
    {
        id: 'faqOptions',
        options: [
            { value: 'author', label: 'About the Author', trigger: 'authorInfo' },
            { value: 'guestPost', label: 'Guest Post Guidelines', trigger: 'guestPostInfo' },
            { value: 'upcoming', label: 'Upcoming Topics', trigger: 'upcomingTopics' },
        ],
    },
    {
        id: 'authorInfo',
        message: 'Our blog is written by [Author Name], an expert in [topic].',
        trigger: 'mainOptions',
    },
    {
        id: 'guestPostInfo',
        message: 'If you’re interested in guest posting, check out our guidelines here: [Link]',
        trigger: 'mainOptions',
    },
    {
        id: 'upcomingTopics',
        message: 'We will be covering [list of upcoming topics]. Stay tuned!',
        trigger: 'mainOptions',
    },
];

const Chatbot = () => {
    const [showChatbot, setshowChatbot] = useState(false)


    const closeChatbot = () => {
        setshowChatbot(false);
    };

    const openChatbot = () => {
        setshowChatbot(true);
    };

    return (
        <>
            <button
                onClick={openChatbot}
                className={`chatbot-button ${showChatbot ? 'hidden' : 'flex'} bg-gray-900 text-white text-base py-3 px-9 rounded-full shadow-lg fixed top-24 right-0 hover:bg-gray-900 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300`}>
                <i className="fa fa-commenting" aria-hidden="true"></i> Chat
            </button>

            <div className={`chatbot-container ${showChatbot ? 'flex opacity-100' : 'hidden opacity-0'} flex-col items-center mx-auto bg-gray-100 rounded-xl shadow-lg fixed top-20 right-12 z-50 transition-opacity duration-300`}>
                <div className='chatbot-header flex justify-between items-center w-full text-xl p-3 bg-gray-900 text-white rounded-tl-xl rounded-tr-xl'>
                    <div className="header">MegaBlog</div>
                    <div id='close-chatbot' onClick={closeChatbot} className="cursor-pointer">X</div>
                </div>
                <ChatBot steps={steps} className="chatbot" />
            </div>

        </>
    );
};

export default Chatbot;
