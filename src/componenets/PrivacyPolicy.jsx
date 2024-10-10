import { motion } from 'framer-motion';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        // text-black for blue text headings and on the main heading text-indigo-900
        <div className="min-h-screen flex flex-col items-center p-4 ">
            <div className="lg:w-11/12 w-full rounded-lg">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-extrabold text-center text-black mb-6">
                        Privacy Policy
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        This Privacy Policy explains how we collect, use, and share information about you when you visit our website or use our services.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-[47%]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                1. Information We Collect
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                We collect information about you when you visit our website, including details such as your IP address, browser type, and device information. We also collect personal information you provide, such as your name, email address, and phone number.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                2. How We Use Your Information
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                Your information helps us improve our services, process orders, and communicate with you. We may also use it for marketing purposes, in line with your preferences, to provide you with updates about our products.
                            </p>
                        </motion.div>
                    </div>

                    <div className="hidden lg:block w-[1px] bg-gray-600 mx-6"></div>

                    <div className="w-full lg:w-[47%]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                3. Sharing Your Information
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                We do not sell your personal information. We may share your information with third-party partners to help us improve our services. For example, we use Google Analytics to track and analyze usage patterns. For more on how Google handles your data, visit their privacy policy:
                                <a href="https://www.google.com/intl/en/policies/privacy/" className="text-indigo-500 hover:text-indigo-700 ml-1">
                                    https://www.google.com/intl/en/policies/privacy/
                                </a>.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                4. Data Retention
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                We will retain your data for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You can request the deletion of your data at any time.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-10"
                >
                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                        5. Changes to Our Privacy Policy
                    </h2>
                    <p className="ext-gray-600 leading-relaxed mb-6">
                        We may update this privacy policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. You will be notified via email or by a notice on our website.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-10"
                >
                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                        6. Contact Us
                    </h2>
                    <p className="ext-gray-600 leading-relaxed mb-6">
                        If you have any questions or concerns about this privacy policy, please contact us at:
                        <a href="mailto:support@yourcompany.com" className="text-indigo-500 hover:text-indigo-700 ml-1">
                            support@yourcompany.com
                        </a>.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
