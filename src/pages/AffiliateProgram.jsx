import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";

function AffiliateProgram() {
    return (
        <>
            <motion.div 
                className="text-center mt-6 mb-4 sm:mt-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="font-bold text-5xl text-gray-900 leading-tight transition duration-300">
                    Join Our Affiliate Program and Start Earning Today!
                </h1>
            </motion.div>

            <motion.div 
                className="mx-6 my-8 space-y-6 bg-gray-50 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div 
                    className="text-gray-700 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Are you passionate about our blog content and interested in earning while you share it? Our Affiliate Program allows you to do just that! By becoming an affiliate, you can earn commissions by promoting our blog and recommended products to your audience.
                </motion.div>

                <motion.div 
                    className="p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 my-4 ">How Does the Affiliate Program Work?</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.li
                            className="transition duration-300 hover:bg-gray-200 bg-white p-4 rounded-lg flex flex-col"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <strong className="text-lg font-semibold text-gray-800">1. Sign Up for the Program</strong>
                            <p className="mt-2 text-gray-700">Sign up for our affiliate program quickly and easily. Once approved, you’ll get access to your own unique affiliate links to share on your blog, social media, email, or website.</p>
                        </motion.li>

                        <motion.li
                            className="transition duration-300 hover:bg-gray-200 bg-white p-4 rounded-lg flex flex-col"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <strong className="text-lg font-semibold text-gray-800">2. Promote Our Content or Products</strong>
                            <p className="mt-2 text-gray-700">As an affiliate, you will receive personalized links to promote our blog posts, recommended products, or services we offer. You can share these links on your own website, social media platforms, or within your network.</p>
                        </motion.li>

                        <motion.li
                            className="transition duration-300 hover:bg-gray-200 bg-white p-4 rounded-lg flex flex-col"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <strong className="text-lg font-semibold text-gray-800">3. Earn Commissions</strong>
                            <p className="mt-2 text-gray-700">Every time someone clicks on your affiliate link and makes a purchase or completes a specific action (such as signing up for a service), you earn a commission! Commissions are tracked through a unique ID in your link, ensuring you get credit for every referral.</p>
                        </motion.li>

                        <motion.li
                            className="transition duration-300 hover:bg-gray-200 bg-white p-4 rounded-lg flex flex-col"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <strong className="text-lg font-semibold text-gray-800">4. Get Paid</strong>
                            <p className="mt-2 text-gray-700">Once you reach a certain commission threshold, you will be paid via your chosen payment method (e.g., PayPal, direct bank transfer). Payments are processed monthly, and you can monitor your earnings and performance through your affiliate dashboard.</p>
                        </motion.li>
                    </ul>
                </motion.div>

                <motion.div 
                    className="p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 m-4">Why Join Our Affiliate Program?</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.li
                            className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        >
                            <strong className="text-lg font-semibold text-gray-800">Competitive Commissions:</strong>
                            <p className="mt-2 text-gray-700">Earn an attractive percentage on every sale or action made through your link.</p>
                        </motion.li>

                        <motion.li
                            className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 2.0 }}
                        >
                            <strong className="text-lg font-semibold text-gray-800">Trusted Brand:</strong>
                            <p className="mt-2 text-gray-700">Promote quality content and products that your audience will love and trust.</p>
                        </motion.li>

                        <motion.li
                            className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                        >
                            <strong className="text-lg font-semibold text-gray-800">Real-Time Tracking:</strong>
                            <p className="mt-2 text-gray-700">Monitor clicks, sales, and earnings with real-time reporting tools in your affiliate dashboard.</p>
                        </motion.li>

                        <motion.li
                            className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 2.4 }}
                        >
                            <strong className="text-lg font-semibold text-gray-800">Marketing Materials Provided:</strong>
                            <p className="mt-2 text-gray-700">We provide banners, text links, and other creative materials to help you promote more effectively.</p>
                        </motion.li>
                    </ul>
                </motion.div>

                <motion.div 
                    className="p-6 mt-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                >
                    <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                        <CardHeader className="p-6">
                            <CardTitle className="text-3xl font-bold text-gray-900">Start Earning with Our Affiliate Program Today!</CardTitle>
                            <CardDescription className="text-gray-500">with @MegaBlog</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                            <motion.p
                                className="text-gray-700 mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2.8 }}
                            >
                                Don&apos;t miss out on the opportunity to monetize your audience while sharing valuable content. If you&apos;re ready
                            </motion.p>
                            <motion.button
                                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => window.open('https://your-signup-link.com', '_blank')} // Update with your signup link
                            >
                                Sign Up Now
                            </motion.button>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </>
    );
}

export default AffiliateProgram;
