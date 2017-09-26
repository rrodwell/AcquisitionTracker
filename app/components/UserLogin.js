import React from "react";

class UserLogin extends React.Component {

    render() {
        return (
            <div className="loginForm registerForm center-align">
                <span><i className="large material-icons">account_circle</i></span>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                                </div>
                            </div>
                            <div className="row loginPassword">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <a href="/updatepassword">Forgot Password?</a>
                            </div>
                            <button className="btn waves-effect waves-light submitBtn signInBtn" type="submit" name="action">Sign In
                            </button>
                        </form>
                    </div>
                    <div>
                        <p>Don't have an account?  <a href="/register">Register</a></p>
                    </div>
            </div>
        )
    }

}

export default UserLogin;