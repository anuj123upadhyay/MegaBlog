import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './componenets'
import { Outlet, useLocation} from 'react-router-dom'
import BackToTopButton from './components/ui/BackToTopButton'
import Chatbot from './componenets/Chatbot'
import Hero from './componenets/Hero/Hero'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const location = useLocation();

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
    <div className='custom-theme min-h-screen flex flex-wrap content-between '>
      <div className='w-full block'>
        <BackToTopButton />
        {/* <Chatbot /> */}
        <Header />
        <main>
        {location.pathname === "/" ? (
            <Hero /> 
          ) : (
            <Outlet /> 
          )}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}



export default App