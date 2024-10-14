import React from 'react'
import { Link } from 'react-router-dom'
function Hero() {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto  px-4 py-32 lg:flex lg:items-center">
                    <div className="mx-auto max-w-xl text-center toggleBg">
                        <h1 className="toggle text-3xl font-extrabold sm:text-5xl">
                            Understand the World.
                            <strong className="font-extrabold  text-indigo-900 sm:block"> Let's Read.📖 </strong>
                        </h1>

                        <p className="black-text sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                to="/add-post"
                            >
                                Get Started
                            </Link>

                            <Link
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-black-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                               to="/all-posts"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero