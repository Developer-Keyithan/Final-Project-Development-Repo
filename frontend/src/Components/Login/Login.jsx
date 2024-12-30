import React from 'react'
import './Login.css'

import { MdOutlineLogin } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-content">
                <h1>Login</h1>
                <form method='POST' className="login-form">
                    <div className="name-or-number">
                        <label htmlFor="email-or-mobile-number">Email / Mobile Number</label>
                        <input type="text" name="email-or-mobile-number" className='input-bar' placeholder='Enter Your Email or Mobile Number' />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" className='input-bar' placeholder='Enter Your Password' />
                        <div className='password-options'>
                            <label htmlFor="checkbox"><input type="checkbox" name="show-password" id="" /> Show Password</label>
                            <label htmlFor="forgot-password">Forgot Password</label>
                        </div>
                    </div>

                    <button className='login-btn' type='submit'>Login <MdOutlineLogin /></button>
                </form>

                <div className="api-btn">
                    <button className='login-api'><h2><FaGoogle />  Login With Google</h2></button>
                    <button className='login-api'><h2><FaFacebook />  Login With Facebook</h2></button>
                    <button className='login-api'><h2><FaApple />  Login With Apple</h2></button>
                </div>
            </div>

            <div className="image">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Login
