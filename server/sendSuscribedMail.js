import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendMailToSubscriber = (userdata) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASS_KEY,
        },
    });

    async function main() {
        await transporter.sendMail({
            from: {
                name: "MegaBlog",
                address: process.env.EMAIL_ID,
            },
            to: userdata.email,
            subject: "Welcome to MegaBlog! 🎉 You've successfully subscribed",
            text: "Thank you for subscribing to MegaBlog!",
            html: `
                <div style="background-color: #f7f7f7; color: #333; padding: 20px; font-family: Arial, sans-serif;">
                    <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                        <h2 style="text-align: center; color: #0076b4;">Welcome to MegaBlog, ${userdata.name}!</h2>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Hi ${userdata.name},
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Thank you for subscribing to MegaBlog! You’re now part of a community that receives the latest news, articles, and updates directly in your inbox. We’re excited to have you with us!
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Stay tuned for our upcoming content, and feel free to explore our latest posts at any time!
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Best Regards, <br/>
                            The MegaBlog Team
                        </p>
                    </div>
                </div>
            `,
        });
    }

    main().catch(console.error);
};

export { sendMailToSubscriber };
