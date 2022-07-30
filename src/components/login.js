import React from 'react';
import './myname1.css';

function Login(props) {
    return (
        <div>
            <Login name="admin" />
            <Login name="admin123" />
            <Login password="123" />
        </div>
    );
}

function Loginuser(props) {
    console.log(props);
    return (
        <div className="fromlogin">
            <form>
                <text>Login</text>
                <div className="input-container">
                    <text>Username </text>
                    <input type="text" name={props.name} required />
                </div>
                <div className="input-container">
                    <text>Password </text>
                    <input type="password" name={props.password} required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}
export default Login;
