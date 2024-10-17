import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { motion } from "framer-motion";

function HelpPage() {
  const questionsAnswers = [
    {
      question: "Is it currently being developed?",
      answer: "Yes. It is currently being developed by our team.",
    },
    {
      question: "Is the blog website free to use?",
      answer:
        "Yes, our blog website is currently free for all users. You can create, post, and share content without any charges. We do plan to introduce a Pro subscription model in the future with additional features.",
    },
    {
      question: "What is the Pro subscription, and when will it be available?",
      answer:
        "The Pro subscription is an upcoming model that will offer exclusive features like advanced analytics, ad-free browsing, and priority support. Stay tuned for the launch!",
    },
    {
      question: "Can I post ads or sponsored content on the website?",
      answer:
        "Yes, you can currently post ads or sponsored content for free. However, we reserve the right to moderate content to ensure it aligns with our community guidelines.",
    },
    {
      question: "How do I create a blog post?",
      answer:
        "You can create a blog post by signing into your account, navigating to the 'Create Post' section, and filling in the required details. Once submitted, your post will go live after review.",
    },
    {
      question: "How can I edit or delete my blog post?",
      answer:
        "You can edit or delete your blog post by going to your profile and accessing the 'My Posts' section. From there, you'll have options to update or remove your content.",
    },
    {
      question: "What types of content are allowed on the blog?",
      answer:
        "We encourage a variety of content, including tutorials, opinion pieces, and reviews. However, please ensure your posts do not contain offensive, harmful, or copyrighted material without permission. For more details, please check our community guidelines.",
    },
    {
      question: "Can anyone comment on my blog post?",
      answer:
        "Yes, anyone can comment on blog posts, whether they are registered users or guests. You also have the ability to moderate or disable comments on your posts.",
    },
    {
      question: "How do I report inappropriate content or abuse?",
      answer:
        "If you come across any inappropriate content or abuse, you can report it using the 'Report' button available on each post or comment. Our moderation team will review the report and take necessary action.",
    },
    {
      question: "Do I need to sign up to read or post blogs?",
      answer:
        "You can browse and read blogs without signing up. However, if you want to post content, comment, or engage with the community, you need to create a free account.",
    },
    {
      question:
        "What happens to my content when the Pro subscription launches?",
      answer:
        "All your existing content will remain accessible. If you decide to stay on the free plan after the Pro subscription launch, you'll still be able to post, but Pro users will have access to additional features like enhanced customization, more visibility, and better analytics.",
    },
    {
      question: "How will the Pro subscription enhance my blogging experience?",
      answer:
        "Pro users will get access to advanced tools like detailed content analytics, priority posting, ad-free browsing, exclusive templates, and faster support. This will help elevate your blogging experience.",
    },
    {
      question: "Can I switch to a Pro account later?",
      answer:
        "Yes, once the Pro subscription is launched, you can upgrade to a Pro account at any time. We will provide more information on pricing and features closer to the launch date.",
    },
    {
      question: "How do I contact support if I face any issues?",
      answer:
        "You can reach our support team by visiting the Help section or emailing us at support@yourblogsite.com. Pro users will have access to priority support once the subscription launches.",
    },
    {
      question: "Can I make money from my blog posts?",
      answer:
        "Currently, we do not offer direct monetization options. However, with the Pro subscription, we plan to introduce more ways for creators to earn through sponsorships, paid posts, and partnerships.",
    },
    {
      question: "How do I stay updated on new features and changes?",
      answer:
        "You can subscribe to our newsletter or follow us on social media to stay informed about upcoming features, blog tips, and Pro subscription announcements.",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col items-center p-4">
        <div className="text-center mt-2 mb-2 sm:mt-4">
          <div className="lg:w-full w-full rounded-lg items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-center"
            >
              <h1 className="text-5xl font-extrabold text-center text-black mb-6">
                We are here to HELP!
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Find answers to the most common questions below{" "}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="p-10 w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Accordion
                type="single"
                collapsible
                className="space-y-6 w-[70rem]"
              >
                {questionsAnswers.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-2xl font-semibold text-indigo-900 hover:text-blue-700">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          duration: 0.3,
                        }}
                      >
                        {item.question}
                      </motion.div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-xl">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpPage;
