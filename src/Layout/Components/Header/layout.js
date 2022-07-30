import { Link, Outlet, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import Sidebar from '../sidebar/sidebar';
const Layout = () => {
    return (
        <div>
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" />
                    </div>
                    <li>
                        <Link to="/">HomePage</Link>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">function</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/action">Action</Dropdown.Item>
                                <Dropdown.Item href="/anothor_action">Another action</Dropdown.Item>
                                <Dropdown.Item href="/something">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
            <Sidebar />
            <main className="container">
                <Outlet className="outlethf" />
            </main>
            <footer className="footer ">
                <p className="text-footer">Copyright ©-All rights are reserved</p>
            </footer>
        </div>
    );
};
export { Layout };
