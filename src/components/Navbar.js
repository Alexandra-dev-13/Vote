import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div id="bg">
            <nav className="header">
                <h2>Technocratie 2030</h2>
                <ul>
                    <Link to="/Connexion"> <li><a href="inscription.com">Connexion</a></li></Link>
                    <Link to="/Inscription"><li><a href="inscription.com">Inscription</a></li></Link>
                </ul>
            </nav>

            <div className="container-fluid texte">
                <p className="slogan">“Le Web 3.0 changera le Monde , pas le Bitcoin”.</p>
                <span className="slogan1">Trusted by millions since 2011 with over $1 Trillion in crypto transactions.</span>
                <div className="bouton">
                    <button type="button" className="btn btn-primary">Se connecter</button>
                    <button type="button" className="btn btn-light">S'inscrire</button>
                </div>
            </div>

        </div>
    )
}
