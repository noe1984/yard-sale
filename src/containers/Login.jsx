import React from 'react'
import '../styles/Login.scss'
import casita from '../assets/logos/logo_yard_sale.svg'

export const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
            <img src={casita} alt="logo" className="logo"/>
        
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new passwrd for yue account</p>
        
            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
        
                <label for="new-password" className="label">Password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
        
                <input type="submit" value="Confirm" className="primary-button login-button"/>
            </form>
            </div>
        </div>
    )
}