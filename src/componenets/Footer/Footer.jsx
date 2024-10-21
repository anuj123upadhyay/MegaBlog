import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="custom-theme w-full bg-gray-300 border-t-1 border-t-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          {/* Logo and Copyright */}
          <section className="p-6 flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-600">
              &copy; 2023 DevUI. All Rights Reserved.
            </p>
          </section>

          {/* Company Links */}
          <section className="p-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-6">
              Company
            </h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/affiliate-program">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Press Kit
                  </Link>
                </li>
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
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Account
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Help
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/contactus">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/customer-support">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/frequently-asked-questions">
                    FAQ
                  </Link>
                </li>
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
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/termsandconditions">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/privacypolicy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/licensing">
                    Licensing
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          {/* Social Media Links */}
          <section className="p-6 flex flex-col items-center md:items-start">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-6">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
