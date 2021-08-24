import React from 'react';
import './Style/HotelRoom.scss';
import StarIcon from '@material-ui/icons/Star';
import { NavLink } from 'react-router-dom';


const HotelRoom = ({ Image, Name, Location, }) => {
    return (
        <section className="product">
            <div className="product__photo">
                <div className="photo-container">
                    <div className="photo-main">
                        <img src={Image} alt="hotel image" />
                    </div>

                </div>
            </div>
            <div className="product__info">
                <div className="title">
                    <h1>{Name}</h1>
                    <span>{Location}</span>
                </div>
                <div className="price">
                    Rs <span>2000</span>
                </div>

                <div className="description">
                    <h3>Description</h3>
                    <ul>
                        <li>Air conditions room</li>
                        <li>Music system Available</li>
                        <li>Attached washroom</li>
                        <li>Capacity:<span style={{ fontWeight: '900', letterSpacing: '1px', color: 'red', marginLeft: '2px' }}>15</span></li>

                    </ul>
                </div>
                <NavLink className="buy--btn" to="/bookrooms">ADD TO CART</NavLink>
            </div>
        </section>
    )
}

export default HotelRoom
