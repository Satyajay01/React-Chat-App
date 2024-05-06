import React, { useState } from 'react'
import './login.css'

const Login = () => {


    return (
    <div className='login'>
        <div className='item'>
            <h2>Welcome Back</h2>
            <form>
                <input type="email" placeholder='Email' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Sign In</button>
            </form>
        </div>
        <div className='separator'></div>
        <div className='item'>
        <h2>Create an Account</h2>
            <form>
                <label htmlFor="file"><img src="" alt="" />Upload an Image</label>
                <input type="file" id='file' style={{display: "none"}}/>

                <input type="text" placeholder='Username' name='username'/>
                <input type="email" placeholder='Email' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Sign In</button>
            </form>
        </div>

    </div>
  )
}

export default Login