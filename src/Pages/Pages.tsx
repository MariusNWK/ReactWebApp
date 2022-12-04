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
import Home from "./Home/Home";

export default function Pages() {
  return (
    <Routes>
      <Route path="/cv" element={<CV />} />
      <Route path="/langages" element={<Langages />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/reseaux" element={<Reseaux />} />
      <Route path="/contact" element={<Contact></Contact>} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

function CV() {
  return <div>CV</div>;
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
