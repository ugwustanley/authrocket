import React from 'react'
import '../css/index.css'

export default function Login() {
    return (
       <div className="login">
            <div className="row">
                <div className="col-12 m-0 p-0 col-lg-5">
                   <form className="form">
                       <div className="form-box">
                            <input type="text" className="Full Name" placeholder="Full Name" />
                            <input type="email" name="email" className="email" placeholder="Email Address" />
                            <input type="password" className="password" name="password" placeholder="password" />
                            <button type="submit" className="submit auth-btn">Login</button>
                       </div>
                   </form>
                </div>
                <div className="auth-right m-0 p-0 col-12 col-lg-7 d-none d-lg-block">
 
                </div>
            </div>
       </div>
    )
}
