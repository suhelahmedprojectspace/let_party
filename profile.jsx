import React from 'react';
import './Style/Profile.css';
import profile from './Images/profile.jpg';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
const Profile = () => {
    return (
        <div className="profile_container">
            <Navbar />
            <div className="profile">
                <img src={profile} alt="profile" />
                <div className="profile_Card">
                    <div className="profile_info">
                        <div className="profile_name">
                            <strong>Name:</strong><p>Suhel Ahmed</p>
                        </div>
                        <div className="profile_email">
                            <strong>Email:</strong><p>Suhel@gmail.com</p>
                        </div>

                    </div>

                    <div className="profile_dob">
                        <form>
                            <label for="birthday">Birthday:</label>
                            <input type="date" id="birthday" name="birthday" />
                        </form>
                    </div>
                    <div className="update">
                        <NavLink to='/updateprofile' style={{ color: 'white', textDecoration: 'none' }}>Update</NavLink>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
