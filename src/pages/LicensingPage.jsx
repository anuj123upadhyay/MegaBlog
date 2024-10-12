import { motion } from 'framer-motion';
import React from 'react';

function LicensingPage() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="text-center mt-2 mb-2 sm:mt-4"
            >
                <p className="font-bold text-4xl">Licensing Information</p>
                <p className="text-gray-500 text-sm mt-2 mx-16 ">
                    Thank you for visiting our blog! As we continue to develop this platform, we want to ensure that our users and creators understand the terms and conditions around content licensing and usage on this site. Below is an overview of how licensing works on our blog and what you can expect in the future.
                </p>
            </motion.div>

            <div className="p-4 mx-8">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-[47%]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                1. Content Ownership
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                All content posted on this blog remains the intellectual property of the author who created it. By publishing content on our platform, you retain all rights to your work, including copyright and distribution. However, by posting on our platform, you grant us a non-exclusive, royalty-free license to display and promote your content on our site.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                2. Copyright Infringement
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                We take copyright infringement seriously. All users are required to post original content or have the necessary permissions to share any third-party content. If any user is found to be in violation of copyright laws, their content may be removed, and further action may be taken, including account suspension or deletion.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                3. Use of Content
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                The content shared on this platform can be read, commented on, and shared across social media under a non-commercial license. Reuse or reproduction of the blog posts in commercial settings requires explicit permission from the author.
                            </p>
                        </motion.div>
                    </div>

                    <div className="hidden lg:block w-[1px] bg-gray-600 mx-6"></div>

                    <div className="w-full lg:w-[47%]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                4. User-Generated Content and Comments
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                All comments and interactions on blog posts are publicly visible and are subject to the same intellectual property rules. While comments remain the property of the poster, we reserve the right to moderate or remove any comments that violate community guidelines or intellectual property laws.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                5. Reporting Copyright Violations
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                If you believe that any content on our platform violates your copyright, you can submit a complaint through our Copyright Violation Form. We will review all complaints and take appropriate actions in accordance with our policies.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                                6. Future Changes
                            </h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                As we continue to develop our platform, this licensing page may be updated to reflect new features, services, or models. Please check back periodically for the latest information on content licensing and usage.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                        7. License for Future Pro Subscription
                    </h2>
                    <p className="ext-gray-600 leading-relaxed mb-6">
                        Once we introduce our Pro subscription model, additional licensing options may be available to Pro users. This may include:
                        <ul>
                            <li>
                                <strong>-</strong> The ability to offer content under specific Creative Commons licenses.
                            </li>
                            <li>
                                <strong>-</strong> Options for exclusive content that cannot be shared without consent.
                            </li>
                            <li>
                                <strong>-</strong> Monetization models where sponsored or paid content may be subject to different licensing terms.
                            </li>
                        </ul>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <p className="ext-gray-600 leading-relaxed mb-6">
                        If you have any questions or require more details about licensing on our platform, feel free to reach out to us at
                        <a href="mailto:support@yourcompany.com" className="text-indigo-500 hover:text-indigo-700 ml-1">
                            support@yourcompany.com
                        </a>.
                    </p>
                </motion.div>
            </div>
        </>
    );
}

export default LicensingPage;
