/*
    Pages :
        - Accueil (Bienvenue... etc..)
        - CV
        - Langages maîtrisés (avec un nombre d'étoiles sur 5 pour noter le niveau de maîtrise)
        - Projets
        - Expériences professionnelles
        - Réseaux (Linkedin, Github)
*/

import { Routes, Route } from "react-router-dom";

export default function Pages() {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />}/>
        </Routes >
    )
}

function About() {
    return (
        <h1>
            About
        </h1>
    )
}

function Users() {
    return (
        <h1>
            Users
        </h1>
    )
}

function Home() {
    return (
        <h1>
            Users
        </h1>
    )
}