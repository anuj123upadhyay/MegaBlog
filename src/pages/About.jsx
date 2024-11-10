import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className=" mt-10">
        <div className="lg:w-11/12 w-full rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold text-center text-black mb-6">
              About MegaBlog
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 text-center mb-6 leading-relaxed">
              Your one-stop destination for creativity, community, and
              expression through blogging.
            </p>
          </motion.div>
        </div>
      </div>

      <div class="flex justify-center items-center bg-white">
        <div class="sm:flex items-center max-w-screen-xl bg-white  overflow-hidden">
          <div class="sm:w-1/2 p-10">
            <div class="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" alt="Company Image" />
            </div>
          </div>
          <div class="sm:w-1/2 p-5">
            <div class="text text-center sm:text-left">
              <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About us
              </span>
              <h2 class="my-4 font-bold text-3xl sm:text-4xl">
                About <span class="text-indigo-600">MegaBlog</span>
              </h2>
              <p class="text-gray-700">
                Welcome to MegaBlog, your one-stop destination for creativity,
                community, and expression through blogging. Our mission is to
                empower individuals and creators by providing a platform that’s
                as versatile as it is intuitive. Whether you're an aspiring
                writer, a seasoned blogger, or a reader looking to discover
                fresh ideas, MegaBlog brings people together in an environment
                that celebrates diverse voices, fosters meaningful interactions,
                and inspires personal growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-20 py-10 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Vision
              <br class="hidden lg:inline-block" /> at MegaBlog
            </h1>
            <p class="mb-8 leading-relaxed">
              At MegaBlog, we believe everyone has a unique story to tell, a
              perspective worth sharing, and an audience ready to listen. Our
              platform is designed to bring those voices to the forefront,
              making blogging easy and enjoyable for everyone. We’re passionate
              about building a vibrant community where users can not only share
              their ideas but also learn, grow, and connect.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://i.imgur.com/cror3te.jpeg"
            />
          </div>
        </div>
      </section>

      <div class="bg-white">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div class="text-center">
            <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
              DETAILS
            </p>
            <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
              What We <span class="text-indigo-600">Offer?</span>
            </h3>
          </div>

          <div class="mt-20">
            <ul class="">
              <li class="text-left mb-10">
                <div class="flex flex-row items-start">
                  <div class="flex flex-col items-center justify-center mr-5">
                    <div class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                      1
                    </div>
                    <span class="text-gray-500">@MB</span>
                  </div>
                  <div class="bg-gray-100 p-5 pb-10 ">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">
                      Onboarding
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      From creating your first post to building a loyal
                      readership, MegaBlog supports you at every stage of your
                      blogging journey.
                    </p>
                  </div>
                </div>
              </li>
              <li class="text-left mb-10">
                <div class="flex flex-row items-start">
                  <div class="flex flex-col items-center justify-center mr-5">
                    <div class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                      2
                    </div>
                    <span class="text-gray-500">@MB</span>
                  </div>
                  <div class="bg-gray-100 p-5 pb-10 ">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">
                      {" "}
                      Personalization
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      With an easy-to-use editor, personalized themes, and
                      powerful analytics, you can tailor your blog to reflect
                      your style and vision.
                    </p>
                  </div>
                </div>
              </li>
              <li class="text-left mb-10">
                <div class="flex flex-row items-start">
                  <div class="flex flex-col items-center justify-center mr-5">
                    <div class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                      3
                    </div>
                    <span class="text-gray-500">@MB</span>
                  </div>
                  <div class="bg-gray-100 p-5 pb-10 ">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">
                      {" "}
                      Community
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Our community features help foster engagement, enabling
                      readers to interact, like, and comment on posts, while our
                      exploration tools allow users to dive into a wide array of
                      topics.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div class="relative bg-violet-600">
        <div class="absolute inset-x-0 top-0 transform rotate-180">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            class="w-full -mt-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>

        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="relative max-w-3xl sm:mx-auto sm:max-w-xl md:max-w-3xl sm:text-center">
            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Join Our Community
            </h2>
            <p class="mb-6 text-base text-indigo-200 md:text-lg">
              MegaBlog is more than just a blogging platform—it’s a community of
              storytellers, thinkers, and creators. By joining us, you’ll become
              part of a network of individuals who are as eager to share their
              thoughts as they are to hear yours. Together, let’s continue to
              create, inspire, and connect.
            </p>
            <p class="mt-2 mb-6 text-4xl">✨✨✨</p>

            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Our Commitment
            </h2>
            <p class="mb-6 text-base text-indigo-200 md:text-lg">
              We’re committed to delivering a seamless, secure, and inclusive
              blogging experience. Our team is always working to enhance our
              features, ensuring MegaBlog remains a place where you can focus on
              what matters most: your content and connections. We value feedback
              and invite you to share your thoughts with us, as we believe in
              building MegaBlog alongside our community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
