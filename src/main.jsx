import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './componenets/index.js'

import AllPosts from './pages/AllPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Signup from './pages/Signup.jsx'
import Post from './pages/Post.jsx'
import Home from './pages/Home.jsx'
import AddPost from './pages/AddPost.jsx'
import Pricing from './pages/Pricing.jsx'
import AffiliateProgram from './pages/AffiliateProgram.jsx'
import PrivacyPolicy from './componenets/PrivacyPolicy.jsx'

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
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
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
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
            {
                path: "/pricing",
                element: <Pricing />,
            },
            {
                path: "/privacypolicy",
                element: <PrivacyPolicy />,
            },
            {
                path: "/affiliate-program",
                element: <AffiliateProgram />,
            },
        ],
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
