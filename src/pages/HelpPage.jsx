import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";

function HelpPage() {
    return (
        <>
            <div className="text-center mt-2 mb-2 sm:mt-4">
                <p className="font-bold text-4xl">We are here to HELP!</p>
                <p className="text-gray-500 text-lg mt-2">Find answers to the most common questions below</p>
            </div>

            <div className="flex justify-center">
                <div className="p-10 w-full max-w-4xl">
                    <Accordion type="single" collapsible className="space-y-6">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                Is it currently being developed?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                Yes. It is currently being developed by our team.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                Is the blog website free to use?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                Yes, our blog website is currently free for all users. You can create, post, and share content without any charges. We do plan to introduce a Pro subscription model in the future with additional features.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                What is the Pro subscription, and when will it be available?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                The Pro subscription is an upcoming model that will offer exclusive features like advanced analytics, ad-free browsing, and priority support. Stay tuned for the launch!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                Can I post ads or sponsored content on the website?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                Yes, you can currently post ads or sponsored content for free. However, we reserve the right to moderate content to ensure it aligns with our community guidelines.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                How do I create a blog post?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                You can create a blog post by signing into your account, navigating to the 'Create Post' section, and filling in the required details. Once submitted, your post will go live after review.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                How can I edit or delete my blog post?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                You can edit or delete your blog post by going to your profile and accessing the 'My Posts' section. From there, you'll have options to update or remove your content.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                What types of content are allowed on the blog?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                We encourage a variety of content, including tutorials, opinion pieces, and reviews. However, please ensure your posts do not contain offensive, harmful, or copyrighted material without permission. For more details, please check our community guidelines.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-8">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                Can anyone comment on my blog post?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                Yes, anyone can comment on blog posts, whether they are registered users or guests. You also have the ability to moderate or disable comments on your posts.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-9">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                How do I report inappropriate content or abuse?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                If you come across any inappropriate content or abuse, you can report it using the 'Report' button available on each post or comment. Our moderation team will review the report and take necessary action.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-10">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                Do I need to sign up to read or post blogs?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                You can browse and read blogs without signing up. However, if you want to post content, comment, or engage with the community, you need to create a free account.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                What happens to my content when the Pro subscription launches?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                All your existing content will remain accessible. If you decide to stay on the free plan after the Pro subscription launch, you'll still be able to post, but Pro users will have access to additional features like enhanced customization, more visibility, and better analytics.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-12">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                How will the Pro subscription enhance my blogging experience?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                Pro users will get access to advanced tools like detailed content analytics, priority posting, ad-free browsing, exclusive templates, and faster support. This will help elevate your blogging experience.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-13">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                Can I switch to a Pro account later?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                Yes, once the Pro subscription is launched, you can upgrade to a Pro account at any time. We will provide more information on pricing and features closer to the launch date.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-14">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                How do I contact support if I face any issues?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                You can reach our support team by visiting the Help section or emailing us at support@yourblogsite.com. Pro users will have access to priority support once the subscription launches.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-15">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                Can I make money from my blog posts?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                Currently, we do not offer direct monetization options. However, with the Pro subscription, we plan to introduce more ways for creators to earn through sponsorships, paid posts, and partnerships.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-16">
                            <AccordionTrigger className="text-xl font-semibold text-indigo-900 hover:text-blue-700">
                                How do I stay updated on new features and changes?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                You can subscribe to our newsletter or follow us on social media to stay informed about upcoming features, blog tips, and Pro subscription announcements.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default HelpPage;
