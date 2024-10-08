function Pricing() {
    return (
        <>
            <div className="text-center mt-2 sm:mt-4">
                <p className="font-bold text-5xl">Pricing</p>
            </div>
            <div>
                <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                        <div
                            className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                        >
                            <div className="text-center">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Pro
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 sm:mt-4">
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>

                                    <span className="text-sm font-medium text-gray-700">/month</span>
                                </p>
                            </div>

                            <ul className="mt-6 space-y-2">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Access to all blogs </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Unlimited Blog Posts </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Community access </span>
                                </li>
                            </ul>

                            <a
                                href="/"
                                className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                {/* Get Started */}
                                Coming Soon
                            </a>
                        </div>

                        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                            <div className="text-center">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Starter
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 sm:mt-4">
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 0$ </strong>

                                    <span className="text-sm font-medium text-gray-700">/month</span>
                                </p>
                            </div>

                            <ul className="mt-6 space-y-2">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Unlock upto 100 blogs </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 15+ Blog Posts/month </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>
                            </ul>

                            <a
                                href="/signup"
                                className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;