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
            <div className="text-center mt-6 mb-4 sm:mt-8">
                <h1 className="font-bold text-5xl text-gray-900 leading-tight transition duration-300">
                    Join Our Affiliate Program and Start Earning Today!
                </h1>
            </div>

            <div className="mx-6 my-8 space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="text-gray-700 text-lg">
                    Are you passionate about our blog content and interested in earning while you share it? Our Affiliate Program allows you to do just that! By becoming an affiliate, you can earn commissions by promoting our blog and recommended products to your audience.
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 my-4 ">How Does the Affiliate Program Work?</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <li className="transition duration-300 hover:bg-gray-200 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">1. Sign Up for the Program</strong>
                            <p className="mt-2 text-gray-700">Sign up for our affiliate program quickly and easily. Once approved, you’ll get access to your own unique affiliate links to share on your blog, social media, email, or website.</p>
                        </li>

                        <li className="transition duration-300 hover:bg-gray-200 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">2. Promote Our Content or Products</strong>
                            <p className="mt-2 text-gray-700">As an affiliate, you will receive personalized links to promote our blog posts, recommended products, or services we offer. You can share these links on your own website, social media platforms, or within your network.</p>
                        </li>

                        <li className="transition duration-300 hover:bg-gray-200 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">3. Earn Commissions</strong>
                            <p className="mt-2 text-gray-700">Every time someone clicks on your affiliate link and makes a purchase or completes a specific action (such as signing up for a service), you earn a commission! Commissions are tracked through a unique ID in your link, ensuring you get credit for every referral.</p>
                        </li>

                        <li className="transition duration-300 hover:bg-gray-200 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">4. Get Paid</strong>
                            <p className="mt-2 text-gray-700">Once you reach a certain commission threshold, you will be paid via your chosen payment method (e.g., PayPal, direct bank transfer). Payments are processed monthly, and you can monitor your earnings and performance through your affiliate dashboard.</p>
                        </li>
                    </ul>
                </div>

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 m-4">Why Join Our Affiliate Program?</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">Competitive Commissions:</strong>
                            <p className="mt-2 text-gray-700">Earn an attractive percentage on every sale or action made through your link.</p>
                        </li>

                        <li className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">Trusted Brand:</strong>
                            <p className="mt-2 text-gray-700">Promote quality content and products that your audience will love and trust.</p>
                        </li>

                        <li className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">Real-Time Tracking:</strong>
                            <p className="mt-2 text-gray-700">Monitor clicks, sales, and earnings with real-time reporting tools in your affiliate dashboard.</p>
                        </li>

                        <li className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">Marketing Materials Provided:</strong>
                            <p className="mt-2 text-gray-700">We provide banners, text links, and other creative materials to help you promote more effectively.</p>
                        </li>

                        <li className="transition duration-300 hover:bg-gray-100 bg-white p-4 rounded-lg flex flex-col">
                            <strong className="text-lg font-semibold text-gray-800">Flexible Payouts:</strong>
                            <p className="mt-2 text-gray-700">Get paid in a way that works best for you — whether it&apos;s through PayPal, direct transfer, or another option.</p>
                        </li>
                    </ul>
                </div>

                <div className="p-6 mt-10">
                    <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                        <CardHeader className="p-6">
                            <CardTitle className="text-3xl font-bold text-gray-900">Start Earning with Our Affiliate Program Today!</CardTitle>
                            <CardDescription className="text-gray-500">with @MegaBlog</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-gray-700 mb-4">
                                Don&apos;t miss out on the opportunity to monetize your audience while sharing valuable content. If you&apos;re ready to start earning,
                                <a href="/" className="text-blue-600 font-medium underline hover:text-blue-700"> sign up here</a> and join our affiliate program today!
                            </p>
                            <div className="flex justify-center">
                                <a
                                    href="/"
                                    className="mt-8 block rounded-full border border-indigo-600 bg-gradient-to-r from-green-400 to-blue-500 px-12 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                >
                                    Coming Soon
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>

    );
}

export default AffiliateProgram;
