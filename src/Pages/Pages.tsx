/*
    Pages :
        - Accueil (Bienvenue... etc..)
        - CV
        - Langages maîtrisés (avec un nombre d'étoiles sur 5 pour noter le niveau de maîtrise)
        - Projets
        - Expériences professionnelles
        - Réseaux (Linkedin, Github)
*/

import { useRecoilValue } from "recoil"
import { pageState } from "../SetupRecoil"

export default function Pages() {
    const page = useRecoilValue(pageState);

    return (
        <div>
            Pages <br /> {page}
        </div>
    )
}