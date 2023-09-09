import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <div className='w-full h-screen font-sans'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] bg-black/75 mx-auto text-white'>
                <div className='w-full sm:max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e) => setEmail(e.target.value)}
                            className='p-3 my-2 bg-zinc-800 rounded text-white'
                            type='email' 
                            placeholder='Email' />
                        <input onChange={(e) => setPassword(e.target.value)}
                            className='p-3 my-2 bg-zinc-800 rounded text-white'
                            type='password' 
                            placeholder='Password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-zinc-500'>
                            <p><input className='mr-2' type='checkbox' />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-[50px]'><span className='text-zinc-500'>
                            Already subscribed to Netflix? </span> 
                            <Link to='/login' className='hover:underline'>
                            Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Signup