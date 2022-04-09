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
import bot from '../assets/anonymous.png';

export default function Navbar() {
    return (
        <nav id='nav-Navbar'>
            <Link to="/">
                {/* Faire logo 300 x 45 pixels */}
                <a href="#top"><img alt="bot" src={bot}></img></a>
            </Link>
            <ul>
                <li>
                    <Link to="/cv">
                        <a href="#top">CV</a>
                    </Link>
                </li>
                <li>
                    <Link to="/langages">
                        <a href="#top">Langages</a>
                    </Link>
                </li>
                <li>
                    <Link to="/projets">
                        <a href="#top">Projets</a>
                    </Link>
                </li>
                <li>
                    <Link to="/experiences">
                        <a href="#top">Expériences professionnelles</a>
                    </Link>
                </li>
                <li>
                    <Link to="/reseaux">
                        <a href="#top">Réseaux</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}