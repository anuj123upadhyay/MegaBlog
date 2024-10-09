import {useEffect} from 'react'
import gsap from 'gsap'


function Hero() {
    useEffect(() => {
        gsap.fromTo(
            '.hero',
            // From: starting state
            {
              scale: 0,
              opacity: 0,  // Start invisible
            },
            // To: end state
            {
              scale: 1,    // End at original size
              opacity: 1,  // Fully visible
              delay:2 ,
              duration: 1,
              ease: "bounce.out",
            }
          );
      }, []);
    return (
        <div >
            <section className="bg-gray-50">
                <div className="mx-auto  px-4 py-32 lg:flex lg:items-center">
                    <div className="mx-auto max-w-xl text-center toggleBg hero">
                        <h1 className="toggle text-3xl font-extrabold sm:text-5xl">
                            Understand the World.
                            <strong className="font-extrabold  text-indigo-900 sm:block"> Let's Read.📖 </strong>
                        </h1>

                        <p className="black-text sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                href="#"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-black-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero