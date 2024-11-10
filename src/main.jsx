import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, Login } from "./componenets/index.js";

import AllPosts from "./pages/AllPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Signup from "./pages/Signup.jsx";
import Post from "./pages/Post.jsx";
import Home from "./pages/Home.jsx";
import AddPost from "./pages/AddPost.jsx";
import Pricing from "./pages/Pricing.jsx";
import AffiliateProgram from "./pages/AffiliateProgram.jsx";
import TermsAndConditions from "./pages/TermsAndCondition.jsx";
import Feedback from "./pages/Feedback.jsx";
import FAQ from "./pages/FAQ.jsx";
import PressKit from "./pages/Presskit.jsx";

import ContactPage from "./pages/ContactPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";

import LicensingPage from "./pages/LicensingPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

import HelpPage from "./pages/HelpPage.jsx";

import ProfilePage from "./pages/ProfilePage.jsx";
import SignUp from "./pages/SignUpp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Error404 from "./pages/Error404.jsx";
import Features from "./pages/Features.jsx";
import CategoryPosts from "./pages/Category.jsx";
import DiscussionForum from "./pages/DiscussionForum.jsx";
import TermsOfUse from "./componenets/TermsOfUse.jsx";

import Stories from "./pages/Stories.jsx";

import About from "./pages/About.jsx";
import FeedbackPage from "./pages/FeedBackPage.jsx";
import ContactUsBg from "./pages/ContactUsBG.jsx";

import Contributor from "./componenets/Contributor.jsx";

// Add this at the top of your existing index.js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful");
      })
      .catch((err) => {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        store,
        path: "/",
        element: <Home />,
      },
      {
        path: "/contactus",
        element: <ContactUsBg />,
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/category/:category",
        element: (
          <AuthLayout authentication>
            {" "}
            <CategoryPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/presskit",
        element: (
          <AuthLayout authentication={false}>
            <PressKit />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: "/pricing",
        element: (
          <AuthLayout authentication={false}>
            <Pricing />
          </AuthLayout>
        ),
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/affiliate-program",
        element: (
          <AuthLayout authentication={false}>
            <AffiliateProgram />
          </AuthLayout>
        ),
      },
      {
        path: "/customer-support",
        element: (
          <AuthLayout authentication={false}>
            <SupportPage />
          </AuthLayout>
        ),
      },
      {
        path: "/feedback",
        element: (
          <AuthLayout authentication={false}>
            <FeedbackPage />
          </AuthLayout>
        ),
      },
      {
        path: "/termsandconditions",
        element: (
          <AuthLayout authentication={false}>
            <TermsAndConditions />
          </AuthLayout>
        ),
      },

      {
        path: "/helpPage",
        element: (
          <AuthLayout authentication={false}>
            <HelpPage />
          </AuthLayout>
        ),
      },
      {
        path: "/frequently-asked-questions",
        element: (
          <AuthLayout authentication={false}>
            <FAQ />
          </AuthLayout>
        ),
      },
      {
        path: "/discussion",
        element: (
          <AuthLayout authentication={false}>
            <DiscussionForum />
          </AuthLayout>
        ),
      },
      {
        path: "/termsofuse",
        element: (
          <AuthLayout authentication={false}>
            <TermsOfUse />
          </AuthLayout>
        ),
      },
      {
        path: "/contributor",
        element: (
          <AuthLayout authentication={false}>
            <Contributor />
          </AuthLayout>
        ),
      },
      {
        path: "/licensing",
        element: (
          <AuthLayout authentication={false}>
            <LicensingPage />
          </AuthLayout>
        ),
      },
      {
        path: "/stories",
        element: (
          <AuthLayout authentication={false}>
            <Stories />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout authentication>
            {" "}
            <ProfilePage />
          </AuthLayout>
        ),
      },
      {
        path: "/features",
        element: (
          <AuthLayout authentication={false}>
            <Features />
          </AuthLayout>
        ),
      },
      {
        path: "/about",
        element: (
          <AuthLayout authentication={false}>
            <About />
          </AuthLayout>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <SignIn />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout authentication={false}>
        <SignUp />
      </AuthLayout>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
