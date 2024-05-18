import React from 'react'
import "./Login.css"


function Login() {
    return (
        <>
            <div className="about-sec-bg" >
                <h1>Login Page</h1>
            </div>

    <section>
        <div class="container login-container">
            <div class="row">
                <div class="col-12">
                    <div class="login-form">
                        <div>
                            <h5>Let's get started</h5>
                            <p>Sign in to continue</p>
                        </div>
                        <div class="login-form-input-text">
                            <input type="text" class="form-control" name="name" placeholder="Email or username" />
                        </div>
                        <div class="login-form-input-psswrd">
                            <input type="password" class="form-control" name="name" placeholder="Password" />
                        </div>

                        <div class="login-form-checkbox">
                            <div>
                                <input class="form-check-input" type="checkbox" id="" name="" value="something" /><span>Remember me</span>
                            </div>
                            <div>
                                <a href="forget_password.html" class="text-primary">Forget Password ?</a>
                            </div>
                        </div>


                        <div class="signin-btn">
                            <button type="submit"> Sign in</button>
                        </div>

                        <div class="create-account">
                            <p>Don't have an account? <a href="create_account.html">Register here</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            
        </>
            
    )
}

export default Login