import React from 'react'
import "./AboutUs.css"
import { FaArrowRight } from "react-icons/fa6";


const AboutUs = () => {

    return (
        <>
            <div className="about-sec-bg" >
                <h1>About Us</h1>
            </div>
            <section className='about-sec1'>
                <div className="container">
                    <div className="row">
                        <div className="col-5 about-sec1coltext">
                            <div>
                                <h5>ABOUT US</h5>
                                <h2>ShareWolves Training Academy</h2>
                                <p>We’re passionate about educating people to invest and achieve financial independence in stock market and derivatives trading. Our goal is to provide you with the ultimate trading experience. Our institutional technical research and strategies in accordance with upcoming events in current global and domestic markets help our clients and students to stay ahead of the curve.</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <img src="images/10289216.jpg" className='img-fluid leftright-animation'></img>
                            {/* <img src="https://softivus.com/coinx/main/assets/images/faq-thumb.png" className='img-fluid leftright-animation'></img> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='about-sec2'>
                <div className="container">
                    <div className="row">
                        <div className="col-8 about-sec2coltext">
                            <div>
                                <h1>Cryptro’s technology drives new world</h1>
                                <p>Create a tradeable digital token that can be used as a currency, a representation of an asset, a virtual share, a proof of membership or anything at all. These tokens use a standard coin API so your contract will be automatically compatible with any wallet, other contract or exchange also using this standard. The total amount of tokens in circulation can be set to a simple fixed amount or fluctuate based on any programmed ruleset.</p>
                                <p>By combining our proprietary smart contracts with blockchain technology and providing these tools to everyone.</p>
                                <ul>
                                    <li> <FaArrowRight /> Smart contracts that work such as Lightning Network</li>
                                    <li> <FaArrowRight /> Proof-of-stake (PoS) consensus Cross-chain atomic swaps</li>
                                    <li> <FaArrowRight /> Connectivity across payments networks</li>
                                </ul>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about-sec-3'>
                <div className="container">
                    <div className='row about-sec-3-hed'>
                        <div className="col-12">
                            <h1>WHY CHOOSE US</h1>
                        </div>
                        <div className="col-lg-6">
                            <p>Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor emque lauda ntium, totam rem aperiam</p>

                        </div>
                    </div>
                    <div className="row about-sec-3-row">
                        <div className="col-lg-4 about-sec-3-col">
                            <div className='about-sec-3-imgLogo'>
                                <img src="images/box-icon-f.png" alt="photo-md"></img>
                            </div>
                            <h1>Payment Options</h1>
                            <p>Morbi eget varius risus, ut venenatis libero pellentesque in porta dui.</p>
                        </div>
                        <div className="col-lg-4 about-sec-3-col">
                            <div className='about-sec-3-imgLogo'>
                                <img src="images/box-icon-g.png" alt="photo-md"></img>
                            </div>
                            <h1>Strong Security</h1>
                            <p>Morbi eget varius risus, ut venenatis libero pellentesque in porta dui.</p>
                        </div>
                        <div className="col-lg-4 about-sec-3-col">
                            <div className='about-sec-3-imgLogo'>
                                <img src="images/box-icon-h.png" alt="photo-md"></img>
                            </div>
                            <h1>Words Coverage</h1>
                            <p>Morbi eget varius risus, ut venenatis libero pellentesque in porta dui.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about-sec-4'>
                <div className="container">
                    <div className="row about-sec-4row1">
                        <div className="col-6">
                            <img src='https://www.sharewolves.com/images/resource/1.png' className='img-fluid'>
                            {/* <div className='about-sec-4imgheds'>
                                <h2>Mr. Chirag Bavisi</h2>
                                <p>The Founder</p>
                            </div> */}
                            </img>
                        </div>
                        <div className="col-6 about-sec-4coltext">
                           <div>
                           <h1>Our Mentor</h1>
                            <ul>
                                <li>The Technical Research Analyst</li>
                                <li>The TEDx Speaker</li>
                                <li>MBA in Marketing & Finance</li>
                                <li>Article writer for economic times</li>
                                <li>Corporate financial coach</li>
                            </ul>
                           </div>
                        </div>
                    </div>
                    <div className="row about-sec-4row2">
                        
                        <div className="col-6 about-sec-4coltext">
                           <div>
                           <h1>Our Mentor</h1>
                            <ul>
                                <li>The Technical Research Analyst</li>
                                <li>The TEDx Speaker</li>
                                <li>MBA in Marketing & Finance</li>
                                <li>Article writer for economic times</li>
                                <li>Corporate financial coach</li>
                            </ul>
                           </div>
                        </div>
                        <div className="col-6">
                            <img src='https://www.sharewolves.com/images/resource/2.png' className='img-fluid'>
                            </img>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs