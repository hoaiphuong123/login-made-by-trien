import React from 'react';
import './myname1.css';
import PropTypes from 'prop-types';

function Login({ name, password }) {
    console.log(name);
    console.log(password);
    return (
        <div className="fromlogin">
            <form>
                <text>Login</text>
                <div className="input-container">
                    <text>Username </text>
                    <input type="text" name={name} required />
                </div>
                <div className="input-container">
                    <text>Password </text>
                    <input type="password" name={password} required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}
Login.propTypes = {
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};
export default Login;
