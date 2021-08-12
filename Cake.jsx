import React from 'react';
import './Style/Cake.css';
import Navbar from './Navbar';
import cake from './Images/butterscotch.jpg'
const Cake = () => {
    return (
        <div className="cake_container">
            <Navbar />
            <div className="cake">
                <img src={cake} alt="cake" className="cake_img" />
                <div className="cake_details">
                    <h1>coffee cake</h1>
                    <p className="price">₹ 900</p>
                    <div className="cake_weight">
                        <label>Weight in kg:</label>
                        <select name="cake" id="cake">
                            <option value="500gm">500gm</option>
                            <option value="1kg">1kg</option>
                            <option value="2kg">2kg</option>
                            <option value="3kg">3kg</option>
                            <option value="4kg">4kg</option>
                        </select>
                    </div>
                    <div className="cake_data">
                        <form>
                            <input type="file" id="myFile" name="filename" />
                            <label>Enter your message</label>
                            <input type="textbox" placeholder="Enter your message" className="cake_input" />
                            <button type="button">Submit</button>
                        </form>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Cake
