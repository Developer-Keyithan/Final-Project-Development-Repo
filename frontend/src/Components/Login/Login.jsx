import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

import { MdOutlineLogin } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-content">
                <h1>Login</h1>
                <form method='POST' className="login-form">
                    <div className="name-or-number">
                        <label htmlFor="email-or-mobile-number">Email / Mobile Number</label>
                        <input type="text" name="email-or-mobile-number" placeholder='Enter Your Email or Mobile Number' />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder='Enter Your Password' />
                        <div className='password-options'>
                            <div className='show-password'><input type="checkbox" name="show-password" id="" /><p>Show Password</p></div>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </div>
                    </div>

                    <button className='login-btn' type='submit'>Login <MdOutlineLogin /></button>
                </form>

                <div className="api-btn">
                    <p>or login with</p>
                    <div className='login-api-btn'>
                        <button className='login-api'><FaGoogle /></button>
                        <button className='login-api'><FaFacebook /></button>
                        <button className='login-api'><FaApple /></button>
                        <button className='login-api'><FaTiktok /></button>
                    </div>
                </div>
            </div>

            <Link to="/signup">
                <button className="image-btn">
                    <h1>Sign Up</h1>
                    <p>Don't have an account?</p>
                </button>
            </Link>

        </div>
    )
}

export default Login
