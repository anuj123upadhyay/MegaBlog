
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { login } from '../store/authSlice'
import { useForm } from "react-hook-form"


function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <section className="flex items-center justify-center text-[4vw] md:text-[2.2vw]">
            <div className={`mx-auto w-[90%] md:w-[35%] bg-gray-100 rounded-xl p-[2%] `}>
                <div className="mb-[1%] flex justify-center">
                    <span className="inline-block w-full ">
                        <Logo classNames={`text-[1.25em] flex justify-center`}  />
                    </span>
                </div>
                <h2 className="text-center text-[1.25em] md:text-[0.85em] my-[4%] font-bold leading-tight">Sign up to create account</h2>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5 md:text-[0.5em] '>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
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
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
                <p className="w-full text-[0.95em] md:text-[0.5em] my-[2%] text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>

        </section>
    )
}


export default Signup
