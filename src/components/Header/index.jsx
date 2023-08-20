import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


function Header() {
    return (
        <header className="header">
            <h1 className= "Titre-app">
                <Link className="header_link" to="/">Ludmilla Marti - Développeuse Web</Link>
            </h1>
            <nav className="nav">
                <Link className="nav_item1" to="/">
                    <p className="nav_item_text1">Accueil</p>
                </Link>
                <Link className="nav_item2" to="/a-propos-page">
                    <p className="nav_item_text2">A propos</p>
                </Link>
                <Link className="nav_item3" to="/cvpage">
                    <p className="nav_item_text3">Cv</p>
                </Link>
            </nav>
        </header>
    );
}

export default Header;