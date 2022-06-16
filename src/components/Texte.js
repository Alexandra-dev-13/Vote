import React from "react";
import './Texte.css';

export default function Texte() {
    return (
        <div className="container-fluid texte">
            <p className="slogan">The world’s most popular way to buy, sell, and trade crypto</p>
            <span className="slogan1">Trusted by millions since 2011 with over $1 Trillion in crypto transactions.</span>
            <div className="bouton">
                <button type="button" className="btn btn-primary">Se connecter</button>
                <button type="button" className="btn btn-light">S'inscrire</button>
            </div>
        </div>
    )
}
