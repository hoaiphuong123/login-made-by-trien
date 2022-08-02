import React, { useState } from 'react';
import Login from './login';

function Loginuser() {
    const [name, setName] = useState('');
    const [password, setPass] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handlePass = (e) => {
        setPass(e.target.value);
    };
    const changeHandleName = (e) => {
        e.preventDefault();
        console.log({ name });
        console.log({ password });
    };
    return (
        <div className="container">
            <form onSubmit={changeHandleName}>
                <text>Login</text>
                <Login name="admin" password="123" onSetName={handleName} onSetPass={handlePass} />
                <div className="button-container">
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
}

export default Loginuser;
