/*
    Barre de navigation menant vers les pages suivantes :
        - Accueil (Bienvenue... etc..)
        - CV
        - Langages maîtrisés (avec un nombre d'étoiles sur 5 pour noter le niveau de maîtrise)
        - Projets
        - Expériences professionnelles
        - Réseaux (Linkedin, Github)
*/

import React from "react";
import { useSetRecoilState } from "recoil"
import { pageState } from "../SetupRecoil"

export default function Navbar() {
    const setPage = useSetRecoilState(pageState);

    const handleOnClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        setPage(event.currentTarget.title);
    }

    return (
        <div>
            <button title="Home" onClick={handleOnClick}>Accueil</button>
            <button title="Resume" onClick={handleOnClick}>CV</button>
        </div>
    )
}