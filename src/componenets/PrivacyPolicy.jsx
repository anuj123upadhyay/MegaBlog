import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#e5e7eb] flex flex-col items-center p-6">
            <div className="lg:w-11/12 w-full bg-[#ececec] p-10 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Privacy Policy</h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This Privacy Policy explains how we collect, use, and share information about you when you visit our website or use our services.
                </p>

                {/* Flex container for two sections */}
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* First column */}
                    <div className="w-full lg:w-[47%]">
                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-[#001758] mt-8 mb-4">1. Information We Collect</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We collect information about you when you visit our website, including details such as your IP address, browser type, and device information. We also collect personal information you provide, such as your name, email address, and phone number.
                        </p>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-[#001758] mt-8 mb-4">2. How We Use Your Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Your information helps us improve our services, process orders, and communicate with you. We may also use it for marketing purposes, in line with your preferences, to provide you with updates about our products.
                        </p>
                    </div>

                    {/* Vertical separator for large screens */}
                    <div className="hidden lg:block w-[1px] bg-gray-300 mx-6"></div>

                    {/* Second column */}
                    <div className="w-full lg:w-[47%]">
                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-[#001758] mt-8 mb-4">3. Sharing Your Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We do not sell your personal information. We may share your information with third-party partners to help us improve our services. For example, we use Google Analytics to track and analyze usage patterns. For more on how Google handles your data, visit their privacy policy:
                            <a href="https://www.google.com/intl/en/policies/privacy/" className="text-blue-600 hover:text-blue-800 ml-1">https://www.google.com/intl/en/policies/privacy/</a>.
                        </p>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-[#001758] mt-8 mb-4">4. Data Retention</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We will retain your data for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You can request the deletion of your data at any time.
                        </p>
                    </div>
                </div>

                {/* Section 5 & 6 below the Flexbox */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-[#001758] mt-8 mb-4">5. Changes to Our Privacy Policy</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        We may update this privacy policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. You will be notified via email or by a notice on our website.
                    </p>

                    <h2 className="text-2xl font-bold text-[#001758] mt-8 mb-4">6. Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        If you have any questions or concerns about this privacy policy, please contact us at:
                        <a href="mailto:support@yourcompany.com" className="text-blue-600 hover:text-blue-800 ml-1">support@yourcompany.com</a>.
                    </p>
                </div>

                {/* Button */}
                <div className="mt-10">
                    <a
                        href="/"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
