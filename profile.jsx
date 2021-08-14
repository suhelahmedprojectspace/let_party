import React from 'react';
import './Style/Profile.css';
import profile from './Images/profile.jpg';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CakeIcon from '@material-ui/icons/Cake';
const Profile = () => {
    return (
        <div className="profile_container">
            <Navbar />
            <div className="profile">
                <div className="profile_img">
                    <img src={profile} alt="profile" />
                </div>

                <div className="profile_Card">
                    <div className="profile_info">
                        <div className="profile_id">
                            <PersonIcon /><h2>User Id:</h2><p>7825614544445</p>
                        </div>
                        <div className="profile_name">
                            <AccountCircleIcon />  <h2>Name:</h2><p>Suhel Ahmed</p>
                        </div>
                        <div className="profile_email">
                            <EmailIcon /><h2>Email:</h2><p>Suhel@gmail.com</p>
                        </div>
                        <div className="profile_dob">
                            <CakeIcon /><h2>Birthday:</h2><p>20/9/1999</p>
                        </div>

                    </div>

                    <div className="profile_btn">
                        <div className="update">
                            <NavLink to='/updateprofile' style={{ color: 'black', textDecoration: 'none', letterSpacing: '2px' }}>Update</NavLink>

                        </div>
                        <div className="logout">
                            <NavLink to='/logout' style={{ color: 'black', textDecoration: 'none' }}>Logout</NavLink>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Profile
