import React from 'react'
import { Link } from 'react-router-dom';
import "./Services.css"
import { GrServices } from "react-icons/gr";

function Services() {
    return (
        <>
            <div className="about-sec-bg" >
                <h1>Services</h1>
            </div>

            <div className='servichedd'>
            <h1 className=''>Services provide for you.</h1>
            <p>There are many variations of passages of Lorem Ipsum available,</p>
            </div>
            <section className='servicesec-1'>
                <div className="container">
                    <div className="row">
                        <div className="col-3 serviceseccol">
                            <div className='servicesecBoxdown'>
                                <div className='servicesecicons'><GrServices /></div>
                                <h3>services</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur in fuga quos dolorum praesentium reiciendis error eligendi neque sunt. </p>
                                <Link to="/">More</Link>
                            </div>
                        </div>
                        <div className="col-3 serviceseccol">
                            <div className='servicesecBoxup'>
                                <div className='servicesecicons'><GrServices /></div>
                                <h3>services</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur in fuga quos dolorum praesentium reiciendis error eligendi neque sunt. </p>
                                <Link to="/">More</Link>
                            </div>
                        </div>
                        <div className="col-3 serviceseccol">
                            <div className='servicesecBoxdown'>
                                <div className='servicesecicons'><GrServices /></div>
                                <h3>services</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur in fuga quos dolorum praesentium reiciendis error eligendi neque sunt. </p>
                                <Link to="/">More</Link>
                            </div>
                        </div>
                        <div className="col-3 serviceseccol">
                            <div className='servicesecBoxup'>
                                <div className='servicesecicons'><GrServices /></div>
                                <h3>services</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur in fuga quos dolorum praesentium reiciendis error eligendi neque sunt. </p>
                                <Link to="/">More</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='servicesec-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 servicesec-2colimgg">
                            <img className='img-fluid righleft-animation ' src='https://static.javatpoint.com/commerce/images/what-is-share-market.jpg'></img>
                        </div>
                        <div className="col-6 servicesec-2coltxt">
                            <h2>Hedings of services</h2>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas fugiat maiores doloremque similique. Eum voluptate architecto et sapiente! Non mollitia magni doloribus excepturi consectetur iste perferendis repudiandae dolorum iure? </p>
                            <Link to="/">View More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='servicesec-3'>
                <div className="container">
                    <div className="row">
                       
                        <div className="col-6 servicesec-3coltxt">
                            <h2>Hedings of services</h2>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas fugiat maiores doloremque similique. Eum voluptate architecto et sapiente! Non mollitia magni doloribus excepturi consectetur iste perferendis repudiandae dolorum iure? </p>
                            <Link to="/">View More</Link>
                        </div>
                        <div className="col-6 servicesec-3colimgg">
                            <img className='img-fluid leftright-animation' src='https://media.assettype.com/outlookbusiness%2Fimport%2Fuploadimage%2Flibrary%2F16_9%2F16_9_5%2FIMAGE_1672636538.webp?w=1200&auto=format%2Ccompress&fit=max'></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='servicesec-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className='img-fluid' src="https://skycommodity.in/static/media/Spot-bg.21e0131652601a908e65.png"></img>
                        </div>
                        <div className="col-6">
                            <div className='servicesec-4box'>
                                <h3>Hard Commodities</h3>
                                <p>Hard commodities are natural resources that are typically mined or extracted from the Earth.</p>
                            </div>
                            <div className='servicesec-4box'>
                                <h3>Soft Commodities</h3>
                                <p>Soft commodities, also known as agricultural commodities, are typically grown rather than mined.</p>
                            </div>
                            <div className='servicesec-4box'>
                                <h3>Financial Commodities</h3>
                                <p>In addition to hard and soft commodities, there is a category of financial commodities. These are not physical commodities but are financial instruments or derivatives based on the value of commodities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default Services