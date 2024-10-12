import { motion } from 'framer-motion';


function TermsAndConditions() {
    return (
        <>
            <div className="text-center mt-2 mb-2 sm:mt-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center"
                >
                    <p className="font-bold text-4xl">Terms And Conditions</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-gray-500 text-sm mt-2 mx-16 ">
                        Welcome to <strong>MegaBlog</strong>. These Terms and Conditions govern your use of our blog. By accessing or using our Website, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, please refrain from using the Website.
                    </p>
                </motion.div>
            </div>
            <div className="text-center mt-2 mb-2 sm:mt-4">
                <p className="font-bold text-4xl"></p>
            </div>

            <div className="p-2 mx-4">
                <div className="flex flex-col lg:flex-row justify-between ">

                    <div className="w-full lg:w-[47%]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Intellectual Property</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                All content, including but not limited to articles, text, images, graphics, logos, videos, and other materials published on this Website, is the intellectual property of MegaBlog unless otherwise credited. Unauthorized reproduction, modification, distribution, or republication of any content without the explicit consent of the content owner is strictly prohibited.
                            </p>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                You may share and link back to the Website content, provided you give proper credit and link back to the original article or page. However, copying or reproducing large portions of content for commercial purposes is not allowed without our permission.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. User Conduct</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                By using this Website, you agree not to:
                                <ul>
                                    <li> • Post or transmit any harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable content.</li>
                                    <li> • Violate any local, state, national, or international laws while using or accessing the Website.</li>
                                    <li> • Attempt to interfere with the operation or performance of the Website, including hacking or introducing malicious code.</li>
                                    <li> • Engage in activities that could infringe upon the rights of others, such as harassment, impersonation, or invasion of privacy.</li>
                                </ul>

                                We reserve the right to remove any content, comments, or users that violate these terms.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Comments and User Contributions</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                Users may post comments and contributions on the Website. By submitting any content to the Website, you grant MegaBlog the non-exclusive, royalty-free, worldwide right to use, display, reproduce, and distribute such content.
                                <p>
                                    You are solely responsible for your contributions and agree that they will not:
                                </p>
                                <ul>
                                    <li>
                                        • Contain false or misleading information.
                                    </li>
                                    <li>
                                        • Infringe any third-party intellectual property rights.
                                    </li>
                                    <li>
                                        • Promote illegal activities or violence.
                                    </li>
                                    <li>
                                        • Be deemed spam, or posted with the intent to deceive other users.
                                    </li>
                                    <li>
                                        • We retain the right to monitor, edit, or remove any comments or user contributions without notice if deemed inappropriate or harmful.
                                    </li>
                                </ul>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Disclaimer of Liability</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                The content on this Website is for informational and educational purposes only. While we strive to ensure that all information provided is accurate and up-to-date, MegaBlog makes no warranties or representations regarding the accuracy, completeness, or reliability of the content.

                                Your use of the Website is at your own risk. MegaBlog will not be liable for any damages arising from your reliance on the information provided on the Website or any third-party links. This includes, but is not limited to, any direct, indirect, incidental, consequential, or punitive damages resulting from your use of the Website.
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
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. External Links</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                The Website may contain links to third-party websites or services. These links are provided for your convenience and do not imply endorsement or approval of the content on those sites. MegaBlog has no control over the content, privacy policies, or practices of third-party websites and assumes no responsibility for them.
                            </p><p className="ext-gray-600 leading-relaxed mb-6">
                                We encourage you to read the terms and conditions and privacy policies of any external websites you visit.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Privacy Policy</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data while using the Website.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Changes to Terms and Conditions</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                MegaBlog reserves the right to update or modify these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on the Website. By continuing to use the Website after changes are posted, you agree to be bound by the revised terms.

                                It is your responsibility to regularly review these Terms and Conditions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Termination</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                We reserve the right to terminate or suspend access to the Website, without prior notice or liability, for any reason, including breach of these Terms and Conditions. Upon termination, you must cease all use of the Website and its content.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Governing Law</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                These Terms and Conditions are governed by and construed in accordance with the laws of [Country/State]. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Country/State].
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                        >
                            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Contact Information</h2>
                            <p className="ext-gray-600 leading-relaxed mb-6">
                                If you have any questions or concerns about these Terms and Conditions, please contact us at:
                                <p>
                                    Email: support@yourcompany.com
                                </p>
                                <p>
                                    Address: India
                                </p>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsAndConditions;