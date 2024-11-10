import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendMailToAdmin = async (userdata) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.EMAIL_ID, // Your email ID
            pass: process.env.PASS_KEY, // Your email passkey
        },
    });

    try {
        await transporter.sendMail({
            from: {
                name: `Megablog Contact Form - ${new Date().toLocaleString()}`,
                address: process.env.EMAIL_ID,
            }, // sender address
            to: process.env.ADMIN_EMAIL_ID, // Admin email
            subject: "New Contact Form Submission from Megablog ✔", // Subject line
            text: "Megablog Contact Form Submission", // plain text body
            html: `<div style="background: #f4f4f4; color: #333; height: 100vh; padding: 20px; font-family: Arial, sans-serif;">
                        <div class="heading" style="font-size: 2rem; text-align: center; margin-bottom: 20px; color: #0076b4;">
                            Megablog Contact Form Details
                        </div>
                        <table style="width: 60%; border-collapse: collapse; margin: 0 auto; border: 1px solid #ccc;">
                            <thead>
                                <tr>
                                    <th style="border: 1px solid #ccc; padding: 10px; text-align:center; background-color: #0076b4; color: white;">
                                        Field
                                    </th>
                                    <th style="border: 1px solid #ccc; padding: 10px; text-align:center; background-color: #0076b4; color: white;">
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">Name</td>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">${userdata.name}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">Phone</td>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">${userdata.phone}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">Email</td>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">${userdata.email}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">Message</td>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">${userdata.message}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">Submitted At</td>
                                    <td style="border: 1px solid #ccc; padding: 10px; text-align:center;">${new Date(userdata.createdAt).toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`, // HTML body
        });
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

export { sendMailToAdmin };
