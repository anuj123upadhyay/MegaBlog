import React,{useState} from 'react'
import toast, { Toaster } from "react-hot-toast";
import service from '../appwrite/configAppwrite';

// function NewsLetter() {
//     const [email, setEmail] = useState("");

//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await fetch("http://localhost:5000/api/v1/newsletter/suscribe", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email }),
//         });
  
//         if (response.ok) {
//           toast.success("Subscription successful!");
//           setEmail("");
//         } else {
//           toast.error("Failed to subscribe.");
//         }
//       } catch (error) {
//         toast.error("An error occurred. Please try again.");
//       }
//     };
//   return (
//     <section className="">
//         <div className="p-8 md:p-12 lg:px-16 lg:py-24">
//           <div className="mx-auto max-w-lg text-center">
//             <h2 className="text-2xl font-bold md:text-3xl">
//               Sign Up to our Newsletter
//             </h2>

//             <p className="hidden text-gray-500 sm:mt-4 sm:block">
//               Want to get updates for our latest posted Blogs. Subscribe to our
//               Newsletter and be the first one to be up and about with all that's
//               going on.
//             </p>
//           </div>

//           <div className="mx-auto mt-8 max-w-xl">
//             <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
//               <div className="sm:flex-1">
//                 <label htmlFor="email" className="sr-only">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                   className="w-full rounded-mdborder-black bg-white p-3 text-gray-700 shadow-sm transition focus:border-black focus:outline-none focus:ring focus:ring-red-400"
//                 />
                
//               </div>

//               <button
//                 type="submit"
//                 className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
//               >
//                 <span className="text-sm font-medium"> Subscribe </span>

//                 <svg
//                   className="size-5 rtl:rotate-180"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//   )
// }

function NewsLetter() {
    const [email, setEmail] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      setEmail(e.target.value)
      try {
        const newSubscriber = await service.addSubscriber(email);
        if (newSubscriber) {
          toast.success("New subscriber has been added.");
        } else {
          toast.error("Failure in adding the subscriber.");
          return; // Early exit if adding subscriber fails
        }
    
        // Then send the newsletter
        const response = await service.sendNewsletter(email);
        if (response) {
          toast.success("Subscription successful! Email has been sent.");
          setEmail(""); // Reset email only after both actions are successful
        } else {
          toast.error("Failed to subscribe.");
        }
    
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      }
    
      
  
    
    };
  
    return (
      <section className="">
        <Toaster />
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Sign Up to our Newsletter
            </h2>
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Want to get updates for our latest posted Blogs? Subscribe to our
              Newsletter and stay updated!
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-black bg-white p-3 text-gray-700 shadow-sm transition focus:border-black focus:outline-none focus:ring focus:ring-red-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Subscribe </span>
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
 
  

export default NewsLetter