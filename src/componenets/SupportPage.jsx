
const SupportPage = () => {
    // Dummy data for support cards
    const supportOptions = [
        {
            title: 'FAQs',
            description: 'Find answers to the most commonly asked questions.',
            icon: '🛠',
        },
        {
            title: 'Live Chat',
            description: 'Talk to our support team in real-time.',
            icon: '💬',
        },
        {
            title: 'Email Support',
            description: 'Send us an email for detailed assistance.',
            icon: '✉️',
        },
        {
            title: 'Phone Support',
            description: 'Speak to our support team over the phone.',
            icon: '📞',
        },
        {
            title: 'Community Forum',
            description: 'Join our forum and interact with other users.',
            icon: '👥',
        },
        {
            title: 'Blog Tutorials',
            description: 'Read step-by-step tutorials on our blog.',
            icon: '📝',
        },
    ];

    return (
        <div className="min-h-screen ">
            {/* <header className="p-8">
                <h1 className="text-4xl font-bold text-black text-center">Customer Support</h1>
            </header> */}

            <section className="py-12 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">How can we help you?</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        We&apos;re here to assist you with any questions or concerns you may have. Explore the options below, or reach out to us directly.
                    </p>
                    <div className="flex justify-center items-center">
                        <a
                            className="block w-[350px] items-center rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-indigo-600 "
                            href="/contactus"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-12">
                    {supportOptions.map((option, index) => (
                        <SupportCard
                            key={index}
                            title={option.title}
                            description={option.description}
                            icon={option.icon}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

const SupportCard = ({ title, description, icon }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer text-center flex flex-col items-center justify-center">
        <div className="text-6xl mb-4 text-indigo-900">{icon}</div>
        
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        
        <p className="text-sm text-gray-500">{description}</p>
    </div>
);

export default SupportPage;
