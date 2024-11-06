import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');

const handleSend = async () => {
    if (!input) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
    const response = await axios.post('/api/chatbot', { message: input });
    const botMessage = { role: 'bot', content: response.data.reply };
    setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
    console.error('Error fetching chatbot response:', error);
    }

    setInput('');
};

return (
    <div className="chatbot">
    <div className="chat-window">
        {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.role}`}>
            {msg.content}
        </div>
        ))}
    </div>
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
    />
    <button onClick={handleSend}>Send</button>
    </div>
);
};

export default Chatbot;
