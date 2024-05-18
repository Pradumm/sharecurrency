import React from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom';
import { LuHeadphones } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";


function ContactUs() {
    return (
        <>
            <div className="about-sec-bg" >
                <h1>Contact Us</h1>
            </div>

            <section className='contact-sec1'>
                <div className="container">
                    <div className='contactheds'>
                        <p>Contact Form</p>
                        <h1>Our Contact Address Here.</h1>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className='contact-box'>
                                <LuHeadphones />
                                <h5>Contact Phone Number</h5>
                                <Link to="/">+444 555 666 777</Link><br></br>
                                <Link to="/">+333 777 111 777</Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='contact-box'>
                                <MdOutlineMail />
                                <h5>Our Email Address</h5>
                                <Link to="/">admin@gmail.com</Link><br></br>
                                <Link to="/">example@gmail.com</Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='contact-box'>
                                <HiOutlineLocationMarker />
                                <h5>Our Location</h5>
                                <p>5678 Bangla Main Road, cities 580</p>
                                <p>GBnagla, example 54786</p>
                            </div>
                        </div>
                    </div>

                    <form>
                        <div className="row contact-formrow">
                            <div className="col-7 contact-formcol">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Number" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Message" rows="4"></textarea>
                                </div>
                                <button type="submit" class="button-with-color">Send</button>
                            </div>
                            <div className="col-5">
                                <div style={{ marginTop: '15px' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093076!2d144.95373631544766!3d-37.81720974202164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0f3c5e7d4e6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1603933671167!5m2!1sen!2sau"
                                        width="100%"
                                        height="650"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactUs