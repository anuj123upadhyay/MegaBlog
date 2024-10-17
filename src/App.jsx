import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './componenets'
import { Outlet} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routee } from 'react-router-dom';
import BackToTopButton from './components/ui/BackToTopButton'
import Chatbot from './componenets/Chatbot'
import PressKit from './componenets/Presskit'



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
    <Router> 
    <div className="custom-theme min-h-screen flex flex-wrap content-between"> 
      <div className="w-full block"> 
        <BackToTopButton /> 
        <Chatbot /> 
        <Header /> 
        <main> 
          <Routes> 
            <Route path="/presskit" element={<PressKit />} /> 
          </Routes> 
          <Outlet /> {/* Keeps the placeholder for nested routes */}
        </main> 
        <Footer /> 
      </div> 
    </div> 
  </Router> 
  ) : null;
}



export default App