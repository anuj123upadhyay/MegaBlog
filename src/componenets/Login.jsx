import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button ,Input, Logo} from './index'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'

function Login() {
  
    const navigate = useNavigate()
    const dispatch  = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error , setError] = useState("")

    const login = async(data)=>{
        setError("")
        try {

          const session =   await authService.login(data)
            if (session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")


            }
        } catch (error) {
            setError(error.message)
        }
    }
                    

                    
                
return (
    <section
    className='flex items-center justify-center w-full text-[4vw] md:text-[2.2vw]'>
        <div className={`mx-auto w-[90%] md:w-[35%] my-[5%] bg-gray-100 rounded-xl p-[2%] border border-black/10`}>
        <div className="mb-[2%] flex justify-center">
                    <span className="inline-block w-full">
                        <Logo width="100%" classNames={`text-[1.25em] flex justify-center`}  />
                    </span>
        </div>
        <h2 className="text-center text-[1.25em] md:text-[0.85em] my-[4%] font-bold leading-tight">Sign in to your account</h2>
        
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5 md:text-[0.5em] '>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        <p className="m-[2%] text-[0.95em] md:text-[0.5em] text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        </div>
    </section>
  )
}

export default Login
