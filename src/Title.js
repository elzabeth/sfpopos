import React from 'react'
import { HashRouter as Router,Link } from 'react-router-dom'

import './Title.css'

export default function Title() {
    return (
        <div className='Title'>
            <h1>SeaFood Recipes</h1>
            <div className="title-subtitle">(Treat your taste buds)</div>
            <div className="nav-link" activeClassName="nav-link-active">
            <Router>
                <Link to="/about">About</Link>
                </Router>
            </div>
        </div>
    );
}