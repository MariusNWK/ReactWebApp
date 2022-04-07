/*
    Barre de navigation menant vers les pages suivantes :
        - Accueil (Bienvenue... etc..)
        - CV
        - Langages maîtrisés (avec un nombre d'étoiles sur 5 pour noter le niveau de maîtrise)
        - Projets
        - Expériences professionnelles
        - Réseaux (Linkedin, Github)
*/

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav navbar" style={{background: 'green'}}>
            <ul className="ul navbar" style={{background: 'yellow'}}>
                <li className="li navbar" style={{background: 'blue'}}>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    )
}