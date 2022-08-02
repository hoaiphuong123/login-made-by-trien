import React, { useState } from 'react';
import './myname1.css';
import PropTypes from 'prop-types';

function Login({ name, password, onSetName, onSetPass }) {
    // const [user, setUser] = useState('');
    // const changeUser = (e) => {
    //     setUser(e.target.value);
    // };
    // const [passUser, setPassUser] = useState('');
    // const changePass = (e) => {
    //     setPassUser(e.target.value);
    // };
    const [pass, setPass] = useState(false);
    const handleClick = () => {
        setPass(!pass);
    };
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log({ user });
    //     console.log({ passUser });
    // };
    return (
        <div className="fromlogin">
            <div className="input-container">
                <lable htmlFor="user">Username</lable>
                <input id="user" type="text" name={name} onChange={onSetName} required />
            </div>
            <div className="input-container">
                <lable htmlFor="passUser">Password</lable>
                <input
                    id="passUser"
                    name={password}
                    type={pass ? 'text' : 'password'}
                    onChange={onSetPass}
                    required
                />
            </div>
            <div className="checkbox">
                <input id="checkbox" type="checkbox" checked={pass} onChange={handleClick} />
            </div>
        </div>
    );
}

Login.propTypes = {
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onSetName: PropTypes.func.isRequired,
    onSetPass: PropTypes.func.isRequired
};
export default Login;
