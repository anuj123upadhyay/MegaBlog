import { useState, useEffect } from 'react';

const DiscussionForum = () => {
    const [questions, setQuestions] = useState([]);

    // Fetch questions from the backend API
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/discussion/getQuestion');
                if (response.ok) {
                    const data = await response.json();
                    setQuestions(data);
                } else {
                    console.error('Failed to fetch questions');
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    // Helper function to save a new question
    const addQuestion = async (content) => {
        const newQuestion = {
            content,
            answered: false,
            answer: '',
        };

        try {
            const response = await fetch('http://localhost:5000/api/discussion/postQuestion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newQuestion),
            });

            if (response.ok) {
                const savedQuestion = await response.json();
                setQuestions((prevQuestions) => [...prevQuestions, savedQuestion]);
            } else {
                console.error('Failed to add question');
            }
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };

    // Helper function to add an answer to a question
    const addAnswer = async (questionId, answerContent) => {
        console.log(questionId + " " + answerContent)
        try {
            const response = await fetch(`http://localhost:5000/api/discussion/${questionId}/answer`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answer: answerContent }),
            });

            if (response.ok) {
                const updatedQuestion = await response.json();
                setQuestions((prevQuestions) =>
                    prevQuestions.map((question) =>
                        question._id === questionId
                            ? { ...question, ...updatedQuestion }
                            : question
                    )
                );
            } else {
                console.error('Failed to add answer');
            }
        } catch (error) {
            console.error('Error adding answer:', error);
        }
    };

    // Function to render the Question Card
    const renderQuestionCard = (question) => {
        return (
            <div
                className="bg-white p-6 rounded-lg shadow-lg mb-6 w-full md:w-[48%] lg:w-[30%] transition-transform transform hover:scale-105"
                key={question._id}
            >
                <p className="text-xl font-semibold text-gray-800">{question.content}</p>
                {question.answered ? (
                    <div className="mt-4 bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-gray-600 text-lg font-semibold">Answer:</h3>
                        <p className="text-gray-700">{question.answer}</p>
                    </div>
                ) : (
                    <AnswerForm questionId={question._id} />
                )}
            </div>
        );
    };

    // Function to render the Answer Form
    const AnswerForm = ({ questionId }) => {
        const [answer, setAnswer] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (answer.trim()) {
                addAnswer(questionId, answer);
                setAnswer('');
            }
        };

        return (
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md mt-4">
                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Write your answer..."
                    className="w-full p-4 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                />
                <button
                    type="submit"
                    className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                    Submit Answer
                </button>
            </form>
        );
    };

    // Function to render the Question Form
    const QuestionForm = () => {
        const [newQuestion, setNewQuestion] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (newQuestion.trim()) {
                addQuestion(newQuestion);
            }
        };

        return (
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <textarea
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Ask your question..."
                    className="w-full p-4 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                />
                <button
                    onClick={handleSubmit}
                    className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                    Ask Question
                </button>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                MEGABLOG Discussion Forum
            </h1>

            <QuestionForm />

            <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Unanswered Questions</h2>
                <div className="flex flex-wrap gap-6">
                    {questions
                        .filter((question) => !question.answered)
                        .map((question) => renderQuestionCard(question))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 mt-8">Answered Questions</h2>
                <div className="flex flex-wrap gap-6">
                    {questions
                        .filter((question) => question.answered)
                        .map((question) => renderQuestionCard(question))}
                </div>
            </div>
        </div>
    );
};

export default DiscussionForum;
