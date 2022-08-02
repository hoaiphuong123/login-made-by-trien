import React from 'react';
import Login from './login';

function Loginuser() {
    const changeSubmitHandler = (text) => {
        console.log(name);
        console.log(password);
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <text>Login</text>
                <Login name="admin" password="123" />
                <div className="button-container">
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
}

export default Loginuser;
