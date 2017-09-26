import React from "react";

class RegisterUser extends React.Component {

    render() {
        return (
            <div className="registerForm center-align">
                <h4>Create account</h4>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Last Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                    <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="confirmPassword" type="password" className="validate" />
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light submitBtn" type="submit" name="action">Create Account
                        </button>
                    </form>
                </div>
                <div>
                    <p>Already have an account?  <a href="/login">Log In</a></p>
                </div>
            </div>
        )
    }

}

export default RegisterUser;