/*
    Barre de navigation menant vers les pages suivantes :
        - Accueil (Bienvenue... etc..)
        - CV
        - Langages maîtrisés (avec un nombre d'étoiles sur 5 pour noter le niveau de maîtrise)
        - Projets
        - Expériences professionnelles
        - Réseaux (Linkedin, Github)
*/

import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav id='nav-Navbar'>
            <ul>
                <li>
                    <Link to="/">
                        <a href="#">Home</a>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <a href="#">About</a>
                    </Link>
                </li>
                <li>
                    <Link to="/users">
                        <a href="#">Users</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}