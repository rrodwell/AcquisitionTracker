// React Dependencies
import React from "react";
import { Link } from 'react-router-dom';


class UserLogin extends React.Component {

    render() {
        return (
            <div className="loginForm registerForm center-align">
                <span><i className="large material-icons">account_circle</i></span>
                <h4>ACQUISITION TRACKER</h4>
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
                                <a>Forgot Password?</a>
                            </div>
                            <button className="btn waves-effect waves-light submitBtn" type="submit">
                                <Link to="/companies">Sign In</Link>
                            </button>
                        </form>
                    </div>
                    <div>
                        <p>Don't have an account?   <Link to="/register">Register</Link></p>
                    </div>
            </div>
        )
    }

}

export default UserLogin;