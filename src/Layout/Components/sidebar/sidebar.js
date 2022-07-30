import React from 'react';
import './sidebar.css';
function Sidebar() {
    return (
        <div className="menu">
            <ul>
                <li>
                    <a href="#">hompage</a>
                </li>
                <li>
                    <a href="#">sidebar</a>
                </li>
                <li>
                    <a href="#">menu</a>
                </li>
                <li>
                    <a href="#">functions</a>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;
