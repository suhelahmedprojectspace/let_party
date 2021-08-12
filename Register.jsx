import Navbar from './Navbar';
import React, { useState } from 'react';
import login from './Images/login.svg';
import './Style/Register.scss';
import { NavLink } from 'react-router-dom';
import { register } from './Auth';


const Register = () => {
    const [form, setform] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(form);

    }
    return (
        <div className="big_container">
            <Navbar />
            <div className="big_img">
                <img src={login} alt="happy birthday" />
            </div>

            <div className="card_container">

                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <input type="email" placeholder="enter your email" onChange={(e) => setform({ ...form, email: e.target.value })} value={form.email} name="email" />
                    <input type="password" placeholder="enter your password" onChange={(e) => setform({ ...form, password: e.target.value })} value={form.password} name="password" />
                    <button type="submit">
                        Submit
                    </button>
                    {/* <div className="text">
                        <NavLink to="/login" className="btn">Submit</NavLink> <small>Alread have an account?? <NavLink to="/login">Login</NavLink></small>

                    </div> */}
                </form>
            </div>

        </div>







    )
}

export default Register
