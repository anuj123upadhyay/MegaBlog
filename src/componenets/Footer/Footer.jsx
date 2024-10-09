import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="custom-theme w-full bottom-0 py-10 bg-gray-300 border-t-1 border-t-black">
      <div className="z-10 mx-auto px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between ml-4">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/affiliate-program"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="toggle tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/customer-support"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/termsandconditions"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link

                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/privacypolicy"

                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="toggle text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;