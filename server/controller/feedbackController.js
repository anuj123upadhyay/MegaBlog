import FeedbackForm from '../models/feedback.js';

const submitFeedback = async (req, res) => {
    const {
        Name,
        Email,
        Subject,
        Date,
        Device,
        Priority,
        Suggestions,
        Feedback,
        Rating
    } = req.body;

    const feedbackData = {
        name: Name,
        email: Email,
        subject: Subject,
        dateOfVisit: Date,
        deviceUsed: Device,
        priorityLevel: Priority,
        suggestions: Suggestions,
        feedback: Feedback,
        rating: Rating,
    };

    try {
        const feed = new FeedbackForm(feedbackData);
        await feed.save();
        res.status(200).json({ status: 200, message: 'feedback form submitted successfully.' });
    } catch (error) {
        console.error("Error in submitting feedback form:", error);
        res.status(500).json({ error: "Feedback form not submitted successfully." });
    }
};

export { submitFeedback };
