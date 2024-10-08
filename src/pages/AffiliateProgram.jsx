import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";


function AffiliateProgram() {
    return (
        <>
            <div className="text-center mt-2 mb-2 sm:mt-4">
                <p className="font-bold text-5xl">Join Our Affiliate Program and Start Earning Today!</p>
            </div>

            <div className="mx-6 my-8">
                <div className="justify">
                    Are you passionate about our blog content and interested in earning while you share it? Our Affiliate Program allows you to do just that! By becoming an affiliate, you can earn commissions by promoting our blog and recommended products to your audience.
                </div>
                <div className="text-2xl font-bold mb-1 mt-1">How Does the Affiliate Program Work?</div>
                <ul>
                    <li>
                        <strong>1. Sign Up for the Program</strong>
                        <p>Sign up for our affiliate program quickly and easily. Once approved, you’ll get access to your own unique affiliate links to share on your blog, social media, email, or website.</p>
                    </li>

                    <li>
                        <strong>2. Promote Our Content or Products</strong>
                        <p>As an affiliate, you will receive personalized links to promote our blog posts, recommended products, or services we offer. You can share these links on your own website, social media platforms, or within your network.</p>
                    </li>

                    <li>
                        <strong>3. Earn Commissions</strong>
                        <p>Every time someone clicks on your affiliate link and makes a purchase or completes a specific action (such as signing up for a service), you earn a commission! Commissions are tracked through a unique ID in your link, ensuring you get credit for every referral.</p>
                    </li>

                    <li>
                        <strong>4. Get Paid</strong>
                        <p>Once you reach a certain commission threshold, you will be paid via your chosen payment method (e.g., PayPal, direct bank transfer). Payments are processed monthly, and you can monitor your earnings and performance through your affiliate dashboard.</p>
                    </li>
                </ul>

                <div className="text-2xl font-bold mb-1 mt-1">Why Join Our Affiliate Program?</div>
                <ul>
                    <li>
                        <strong>Competitive Commissions:</strong> Earn an attractive percentage on every sale or action made through your link.
                    </li>
                    <li>
                        <strong>Trusted Brand:</strong> Promote quality content and products that your audience will love and trust.
                    </li>
                    <li>
                        <strong>Real-Time Tracking:</strong> Monitor clicks, sales, and earnings with real-time reporting tools in your affiliate dashboard.
                    </li>
                    <li>
                        <strong>Marketing Materials Provided:</strong> We provide banners, text links, and other creative materials to help you promote more effectively.
                    </li>
                    <li>
                        <strong> Flexible Payouts:</strong> Get paid in a way that works best for you — whether it's through PayPal, direct transfer, or another option.
                    </li>
                </ul>
                    
                <div className="p-4 mt-10">
                <Card className="bg-gray-100">
                    <CardHeader className="text-2xl">
                        <CardTitle>Start Earning with Our Affiliate Program Today!</CardTitle>
                        <CardDescription>with @MegaBlog</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Don’t miss out on the opportunity to monetize your audience while sharing valuable content. If you're ready to start earning, [sign up here] and join our affiliate program today!</p>
                        <a
                                href="/"
                                className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                Coming Soon
                            </a>
                    </CardContent>
                </Card>
                </div>


            </div>
        </>
    )
}

export default AffiliateProgram;