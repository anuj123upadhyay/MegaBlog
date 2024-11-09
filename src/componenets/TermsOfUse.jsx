import React from 'react';

const TermsOfUse = () => {
    return (
        <div className="bg-white py-8">
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
                <h1 className="text-4xl font-bold text-center text-teal-700 mb-6">
                    Terms of Use for MegaBlog
                </h1>

                {/* Acceptance of Terms */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-800 mb-4">
                        By accessing or using MegaBlog, you agree to comply with these Terms of Use. If you do not agree with any part of these terms, you must not use our services. This agreement is between you, the user, and MegaBlog, and is governed by applicable laws.
                    </p>
                </section>

                {/* User Obligations */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        2. User Obligations and Responsibilities
                    </h2>
                    <p className="text-gray-800 mb-4">As a user of MegaBlog, you agree to:</p>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Use the platform for lawful, non-commercial purposes.</li>
                        <li>Respect the intellectual property rights of others.</li>
                        <li>Provide accurate information when creating an account or posting content.</li>
                    </ul>
                    <p className="text-gray-800 mb-4">You agree not to:</p>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Post content that is illegal, harmful, or offensive.</li>
                        <li>Attempt to interfere with the platform's functionality.</li>
                        <li>Engage in spamming or any form of malicious activity.</li>
                    </ul>
                </section>

                {/* Intellectual Property Rights */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        3. Intellectual Property Rights and Ownership
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>All content on MegaBlog, including blog posts, logos, and trademarks, are owned by MegaBlog or its licensors.</li>
                        <li>Reproduction or distribution of content without permission is prohibited.</li>
                    </ul>
                </section>

                {/* Limitation of Liability */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        4. Limitation of Liability
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>MegaBlog is not liable for any indirect, incidental, or consequential damages arising from your use of the platform.</li>
                        <li>This includes, but is not limited to, loss of data, profits, or other intangible losses.</li>
                    </ul>
                </section>

                {/* Indemnification */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        5. Indemnification
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>You agree to indemnify and hold MegaBlog harmless from any claims, damages, or liabilities arising from your use of the platform or violation of these Terms of Use.</li>
                    </ul>
                </section>

                {/* Termination Clause */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        6. Termination of Services
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>MegaBlog reserves the right to suspend or terminate your account for violating these Terms of Use or engaging in harmful activity.</li>
                        <li>Termination may occur with or without prior notice.</li>
                    </ul>
                </section>

                {/* Governing Law */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        7. Governing Law
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>These Terms shall be governed by the laws of your jurisdiction.</li>
                        <li>Any disputes arising from these Terms will be handled by the courts in your jurisdiction.</li>
                    </ul>
                </section>

                {/* Modification of Terms */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        8. Modification of Terms
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>MegaBlog reserves the right to modify these Terms at any time.</li>
                        <li>Users will be notified of significant changes via email or through the platform.</li>
                        <li>Continued use of the platform constitutes acceptance of the modified Terms.</li>
                    </ul>
                </section>

                {/* Legal Compliance */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        9. Legal Compliance
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Users agree to comply with all applicable laws and regulations related to online content and intellectual property rights.</li>
                    </ul>
                </section>

                {/* Dispute Resolution */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-teal-600 pb-2">
                        10. Dispute Resolution
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Disputes related to these Terms will first be attempted to resolve through negotiations.</li>
                        <li>If necessary, mediation or arbitration will be used to resolve the dispute in a manner consistent with local laws.</li>
                        <li>Arbitration proceedings will take place in the language specified by the arbitration body.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default TermsOfUse;
