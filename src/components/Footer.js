import React from "react";
import logo from '../images/Logo .svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served
                        with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 458 Newyork, USA</li>
                        <li>Phone: <br/> ++ 8596 472 894</li>
                        <li>eMAIL. <br/> littlelimon@gmail.com</li>
                    </ul>
                </div>
            </section>

        </footer>
    )
}

export default Footer;