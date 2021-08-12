
import React, { useState } from 'react';
import Black from './Images/rooms.svg';
import './Style/Login.scss';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { login } from './Auth';


const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);

    }

    return (
        <div className="big_container">
            <Navbar />
            <div className="big_img">
                <img src={Black} alt="happy birthday" />
            </div>

            <div className="card_container">

                <form onSubmit={handleSubmit} >
                    <h1>Login</h1>
                    <input type="email" placeholder="enter your email" required maxLength="20" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    <input type="password" placeholder="enter your password" required maxLength="10" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    <div className="text">
                        <NavLink to="/rooms" className="btn">Submit</NavLink>
                    </div>
                </form>
            </div>

        </div>







    )
}

export default Login
