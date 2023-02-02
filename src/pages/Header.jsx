import React from 'react';
import { Link } from "react-router-dom";
import "../style/Header.css"

const Header = () => {
    return (
        <div className='Header'>
            <nav className='navigation'>
                <ul className='Liste'>
                    <li> <Link to="/"><p className='nav'>Accueil</p></Link> </li>
                    <li> <Link to="/Search"><p className='nav'>Recherche</p></Link> </li>
                    <li> <Link to="/Library"><p className='nav'>Bibliothèque</p></Link> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;