import React from 'react'

const Signup = () => {
  return (
    <>
    <div className='w-full h-screen'>
        <img className='sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] bg-black/75 mx-auto text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign up</h1>
                    <form className='w-full flex flex-col py-4'>
                        <input className='p-3 my-2 bg-gray-800/60 border border-zinc-500 rounded text-white placeholder:text-white'
                            type='email' 
                            placeholder='Email' />
                        <input className='p-3 my-2 bg-gray-900/60 border border-zinc-500 rounded text-white placeholder:text-white'
                            type='password' 
                            placeholder='Password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center'>
                            <p><input className='mr-2' type='checkbox' />Remember me</p>
                            <p>Need Help?</p>
                        </div>
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