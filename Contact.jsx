import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';
import WcIcon from '@material-ui/icons/Wc';
import './Style/Contact.css'
const Contact = () => {
    return (
        <div classname="contact_container">
            <div className="contact_card">
                <div className="contant_us">
                    <h1>Contact us</h1>
                </div>
                <form>
                    <div className="group_input">
                        <AccountCircleIcon className="icon" /> <input type="text" placeholder="Enter your name" />


                    </div>
                    <div className="group_input">
                        <EmailIcon className="icon" /><input type="email" placeholder="Gmail@gmail.com" />


                    </div>

                    <div className="group_input">
                        <PhoneIcon className="icon" /><input type="text" placeholder="Enter your phone number" />


                    </div>
                    <div className="group_input">
                        <LocationOnIcon className="icon" /><input type="text" placeholder="Enter your  location" />
                    </div>

                    <div className="group_input">
                        <div className="contant_gender">
                            <WcIcon className="icon" />
                            <input list="browsers" placeholder="choose your gender" />
                            <datalist id="browsers">
                                <option value="Male" />
                                <option value="Female" />

                            </datalist>

                        </div>

                    </div>
                    <div className="group_input">
                        <TelegramIcon className="icon" /><textarea placeholder="Enter your message"></textarea>


                    </div>


                    <input type="Submit" value="Submit" />

                </form>
            </div>

        </div>
    )
}

export default Contact
