import { Link } from 'react-router-dom';

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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-blue-900">
            <header className="bg-[#111b30] p-8 shadow-md">
                <h1 className="text-4xl font-extrabold text-white text-center">Customer Support</h1>
            </header>

            <section className="py-12 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">How can we help you?</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        We&apos;re here to assist you with any questions or concerns you may have. Explore the options below, or reach out to us directly.
                    </p>
                    <Link className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg" to={"/contactus"}>
                        Contact Us
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
    <div className="bg-white rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer">
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default SupportPage;
