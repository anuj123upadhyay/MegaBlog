import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import GoogleTranslate from "../GoogleTranslator";



function Footer() {
  return (
    <footer className="custom-theme w-full bottom-0 py-10 bg-gray-300 border-t-1 border-t-black">
      <div className="z-10 mx-auto px-4">
        <div className="-m-6 flex flex-wrap justify-center text-center md:text-left">
          <div className="p-6 w-full md:w-3/12 lg:w-5/12">
            <div className="flex h-full flex-col justify-between items-center md:items-start">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
                <div className="border-l-2 border-gray-800 h-10 mx-4"></div>
                <GoogleTranslate />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2024. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 w-full md:w-3/12 lg:w-2/12">
            <div className="h-full flex flex-col items-center md:items-start">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/">Features</Link>
                </li>
                <li className="mb-4">
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/pricing">Pricing</Link>
                </li>
                <li className="mb-4">
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/affiliate-program">Affiliate Program</Link>
                </li>
                <li>
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/presskit">Press Kit</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 w-full md:w-3/12 lg:w-2/12">
            <div className="h-full flex flex-col items-center md:items-start">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/">Account</Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/helpPage"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/contactus">Contact Us</Link>
                </li>
                <li className="mb-4">
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/customer-support">Customer Support</Link>
                </li>
                <li>
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/frequently-asked-questions">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 w-full md:w-3/12 lg:w-3/12">
            <div className="h-full flex flex-col items-center md:items-start">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/termsandconditions">Terms &amp; Conditions</Link>
                </li>
                <li className="mb-4">
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="toggle text-base font-medium text-gray-900 hover:text-gray-700" to="/licensing">Licensing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 w-full flex justify-center items-center">
            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-gray-900 hover:text-gray-700"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-gray-900 hover:text-gray-700"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-gray-900 hover:text-gray-700"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-gray-900 hover:text-gray-700"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
