import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [signUpForm, setsignUpForm] = useState(true);

    const toggleSignUpForm = () =>{
        setsignUpForm(!signUpForm)
    }

  return (
    <div><Header />
    <div>
        <img className='absolute'
         src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg'
        alt='Login body img'/>
    </div>
    <form className='w-[28%] absolute p-12 bg-black my-48 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{signUpForm ? "Sign In" : "Sign Up"}</h1>
        {!signUpForm && (<input type='text' placeholder='Full Name' className='p-[16px] my-2 w-full bg-black bg-opacity-20 border-white border rounded'></input>)}
        <input type='text' placeholder='Email or Phone Number' className='p-[16px] my-2 w-full bg-black bg-opacity-20 border-white border rounded'/>
        <input type='text' placeholder='Password' className='p-[16px] my-2 w-full  bg-black bg-opacity-20 border-white border rounded'/>
        <button className='py-2 px-6 my-4 w-full bg-red-600 rounded'>Sign In</button>
        <p className='text-center cursor-pointer'>forgot Password ?</p>
        <p className='pt-5 mt-5 cursor-pointer' onClick={toggleSignUpForm}>{signUpForm ? "New to Netflix?Sign up Now" : "Already Registerd!Sign in Now"}</p>
    </form>
    </div>
  )
}

export default Login