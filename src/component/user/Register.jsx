import React from 'react'
import "./Register.css"

function Register() {
    return (
        <>
         <div className="about-sec-bg" >
                <h1>Register</h1>
            </div>

            <section class="">
                <div class="container">
                    <div class="create-account-container">
                        <div class="row create-account-row-1">
                            <div class="col-12">
                                <div class="hed">
                                    <h5>Register Here</h5>
                                </div>
                            </div>
                        </div>

                        <div class="row create-account-row-2">
                            <div class="main-content">
                                <div class="col-7">
                                    <div class="name">
                                        <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Full Name" />
                                    </div>
                                </div>


                                <div class="col-7">
                                    <div class="email">
                                        <input type="email" class="form-control" id="email" name="emal" placeholder="Enter your email" />
                                    </div>
                                </div>

                                <div class="col-7">
                                    <div class="number">
                                        <input type="number" class="form-control" id="phoneNumber" name="number" placeholder="Mobile number" />
                                    </div>
                                </div>

                                <div class="col-7">
                                    <div class="psswrd">
                                        <input type="password" class="form-control" id="password" name="password" placeholder="Password" />
                                    </div>
                                </div>

                                <div class="col-7">
                                    <div class="create-btn">
                                        <button type="submit" onclick="createAccount()"> Create account</button>
                                    </div>
                                    <div class="login-account">
                                        <p>Already have an account? <a href="login.html">Log in</a> </p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Register