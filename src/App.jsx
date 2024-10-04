import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Hero from './components/Hero/hero'

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
  }, [])

  return !loading ? (
    <div className='bg-gray-100'>
      <div className=''>
        <Header />
        <main>
          <div className='text-center'>
            {/* <Hero/> */}
            {/* TODO:   */}
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App