import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors";
import newsletterRoutes from "./routes/newsletterRoute.js";
import feedbackRoutes from "./routes/feedbackRoute.js";
import contactRoute from "./routes/contactRoute.js";
import discussion from "./routes/discussionRoutes.js";
import stories from "./routes/storiesRoutes.js";


dotenv.config();
const app = express();
connectDB();

app.use(express.json());

// To avoid cross-origin error
app.use(cors());

// Use the imported routes
app.use("/api/v1/newsletter", newsletterRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/contact", contactRoute);
app.use("/api/discussion", discussion);
app.use("/api/stories", stories);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
