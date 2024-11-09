import Contact from "../models/contact.js";
import { sendMailToAdmin } from "../sendContactDetailsToAdmin.js";

export async function saveContact(req, resp) {
    try {
        // Destructuring to get the fields from the request body
        const { name, phone, email, message } = req.body;

        // Check if all fields are provided
        if (!name || !phone || !email || !message) {
            return resp.status(400).json({ message: "All fields are required." });
        }

        // Create new contact document
        const newContact = new Contact({ name, phone, email, message });

        // Save contact form data to the database
        await newContact.save();

        sendMailToAdmin(newContact)

        // Respond with success message
        resp
            .status(201)
            .json({ message: "Contact form submitted successfully!", newContact });
    } catch (error) {
        console.error("Error saving contact form:", error);
        resp.status(500).json({ message: "Failed to submit contact form.", error });
    }
}

export async function getContact(req, resp) {
    resp.send('hello contact');
}
