import { motion } from "framer-motion";

const SupportPage = () => {
  const supportOptions = [
    {
      title: "FAQs",
      description: "Find answers to the most commonly asked questions.",
      icon: "🛠",
    },
    {
      title: "Live Chat",
      description: "Talk to our support team in real-time.",
      icon: "💬",
    },
    {
      title: "Email Support",
      description: "Send us an email for detailed assistance.",
      icon: "✉️",
    },
    {
      title: "Phone Support",
      description: "Speak to our support team over the phone.",
      icon: "📞",
    },
    {
      title: "Community Forum",
      description: "Join our forum and interact with other users.",
      icon: "👥",
    },
    {
      title: "Blog Tutorials",
      description: "Read step-by-step tutorials on our blog.",
      icon: "📝",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col items-center p-4 ">
        <div className="lg:w-11/12 w-full rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold text-center text-black mb-6">
              How can we help you?
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-center text-gray-600 mb-6 leading-relaxed">
              We&apos;re here to assist you with any questions or concerns you
              may have. Explore the options below, or reach out to us directly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className="flex text-center justify-center items-center">
              <a
                className="block w-[250px] items-center rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-indigo-600"
                href="/contactus"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-12 mb-8">
            {supportOptions.map((option, index) => (
              <SupportCard
                key={index}
                title={option.title}
                description={option.description}
                icon={option.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const SupportCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-8 transition-transform text-center flex flex-col items-center justify-center"
    whileHover={{
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div className="text-6xl mb-4 text-indigo-900">{icon}</div>
    <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </motion.div>
);

export default SupportPage;
