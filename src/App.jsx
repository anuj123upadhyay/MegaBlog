import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './componenets'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import BackToTopButton from './components/ui/BackToTopButton'
import NotFound from './componenets/NotFound'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  if (loading) return null

  return (
    <div className='custom-theme min-h-screen flex flex-wrap content-between'>
      <Routes>
        {/* Public Routes with Header, Footer, and Outlet */}
        <Route path="/" element={
          <>
            <BackToTopButton />
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </>
        }>
          {/* Add other valid routes here */}
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="profile" element={<h1>User Profile</h1>} />
        </Route>

        {/* Route for invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
