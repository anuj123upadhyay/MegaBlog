import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import BackToTopButton from './components/ui/BackToTopButton'
import NotFound from './components/NotFound'

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

  return !loading ? (
    <div className='custom-theme min-h-screen flex flex-wrap content-between'>
      <Routes>
        {/* Define routes for your main app */}
        <Route path="/" element={
          <div className='w-full block'>
            <BackToTopButton />
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        }>
          {/* Add child routes here */}
          {/* Example: <Route path="products" element={<Products />} /> */}
        </Route>

        {/* Catch-all route for 404 NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  ) : null
}

export default App
