import React, { useState } from 'react';
import './myname1.css';
import PropTypes from 'prop-types';

function Login({ name, password }) {
    const [user, setUser] = useState('');
    const changeUser = (e) => {
        setUser(e.target.value);
    };
    const [passUser, setPassUser] = useState('');
    const changePass = (e) => {
        setPassUser(e.target.value);
    };
    const [pass, setPass] = React.useState(false);
    const handleClick = () => {
        setPass(!pass);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log({ name });
        console.log({ password });
    };
    return (
        <div className="fromlogin">
            <form>
                <text>Login</text>
                <div className="input-container">
                    <text>Username </text>
                    <input
                        type="text"
                        name={name}
                        onChange={changeUser}
                        onSubmit={submitHandler}
                        required
                    />
                </div>
                <div className="input-container">
                    <text>Password </text>
                    <input
                        name={password}
                        type={pass ? 'text' : 'password'}
                        onChange={changePass}
                        required
                    />
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={pass}
                        onChange={handleClick}
                        onSubmit={submitHandler}
                    />
                </div>
                <div className="button-container">
                    <input type="submit" value="submit" onSubmit={submitHandler} />
                    {user},{passUser}
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
