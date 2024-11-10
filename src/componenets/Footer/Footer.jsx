import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/newsletter/suscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        toast.success("Subscription successful!");
        setName("");
        setEmail("");
      } else {
        toast.error("Failed to subscribe.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  return (

    <footer className="custom-theme w-full bg-gray-300 border-t-1 border-t-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          {/* Logo */}
          <section className="p-6 flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Logo width="100px" />
            </div>
          </section>

          {/* Company Links */}
          <section className="p-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-6">
              Company
            </h3>
            <nav>
              <ul className="space-y-4">
                <li><Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/features">Features</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/pricing">Pricing</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/affiliate-program">Affiliate Program</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Press Kit</Link></li>
              </ul>
            </nav>
          </section>

          {/* Support Links */}
          <section className="p-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-6">
              Support
            </h3>
            <nav>
              <ul className="space-y-4">
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Account</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Help</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/contactus">Contact Us</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/customer-support">Customer Support</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/frequently-asked-questions">FAQ</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/Feedback">Feedback</Link></li>
              </ul>
            </nav>
          </section>

          {/* Legal Links */}
          <section className="p-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-6">
              Legals
            </h3>
            <nav>
              <ul className="space-y-4">
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/termsandconditions">Terms & Conditions</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/privacypolicy">Privacy Policy</Link></li>
                <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/licensing">Licensing</Link></li>

              </ul>
            </div>
          </div>
          {/* Newsletter Section */}
          <div className="p-6 w-full flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full md:w-8/12 flex flex-col items-center md:flex-row">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 md:mb-0 md:mr-2 px-4 py-2 w-full md:w-1/2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 md:mb-0 md:mr-2 px-4 py-2 w-full md:w-1/2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Social Media Links */}
          <div className="p-6 w-full flex justify-center items-center">
            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
              Follow Us
            </h3>
            <div className="flex space-x-4">

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                <i className="fab fa-linkedin text-2xl"></i>

              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="w-full mt-10 border-t border-black pt-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2023 DevUI. All Rights Reserved.
          </p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
}

export default Footer;
