import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


function Header() {
    return (
        <header className="header">
        <Link className="header_link" to="/">Ludmilla Marti - Développeuse Web</Link>
            <nav className="nav">
                <Link className="nav_item" to="/a-propos">
                    <p className="nav_item_text">A propos</p>
                </Link>
                <Link className="nav_item" to="/cv">
                    <p className="nav_item_text">Cv</p>
                </Link>
            </nav>
        </header>
    );
}

export default Header;