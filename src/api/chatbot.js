import axios from 'axios';

export default async function handler(req, res) {
const { message } = req.body;

try {
    const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
        model: 'gpt-4',
        messages: [{ role: 'user', content: message }],
    },
    {
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
        },
    }
    );

    const reply = response.data.choices[0].message.content;
    res.status(200).json({ reply });
} catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}
