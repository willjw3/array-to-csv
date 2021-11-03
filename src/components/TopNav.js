import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNav() {
    return (
        <nav>
            <div className="container d-flex justify-content-between align-items-center">
                <h2>React Testing</h2>
                <div className="topnav-links w-50 d-flex justify-content-around">
                    <Link className="text-decoration-none" to="/">Home</Link>
                    <Link className="text-decoration-none" to="/test">Input Test</Link>
                </div>
            </div>  
        </nav>
    )
}
