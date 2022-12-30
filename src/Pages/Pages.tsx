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
import { mainPage } from "../Utils/variables";
import CV from "./CV/CV";
import Home from "./Home/Home";

export default function Pages() {
  return (
    <Routes>
      <Route path={mainPage + "/cv"} element={<CV />} />
      <Route path={mainPage + "/langages"} element={<Langages />} />
      <Route path={mainPage + "/projets"} element={<Projets />} />
      <Route path={mainPage + "/experiences"} element={<Experiences />} />
      <Route path={mainPage + "/reseaux"} element={<Reseaux />} />
      <Route path={mainPage + "/contact"} element={<Contact></Contact>} />
      <Route path={mainPage + "/"} element={<Home />} />
    </Routes>
  );
}

function Langages() {
  return <div>Langages</div>;
}

function Projets() {
  return <div>Projets</div>;
}

function Experiences() {
  return <div>Experiences professionnelles</div>;
}

function Reseaux() {
  return <div>Reseaux</div>;
}

function Contact() {
  return <div>marius.nowak@epitech.eu</div>
}
