/*
    Barre de navigation menant vers les pages suivantes :
        - Accueil (Bienvenue... etc..)
        - CV
        - Langages maîtrisés (avec un nombre d'étoiles sur 5 pour noter le niveau de maîtrise)
        - Projets
        - Expériences professionnelles
        - Réseaux (Linkedin, Github)
*/

// TODO
// Faire un bouton vers navigateur de menu quand la taille du site est inférieur à 800

import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [width, setWindowWidth] = useState(0);
  // const [height, setWindowHeight] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    // const height = window.innerHeight;
    setWindowWidth(width);
    // setWindowHeight(height);
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <StyledNav>
      <StyledLink to="/">
        {width > 1094 && (
          <div>
            <StyledLinear></StyledLinear>
            <StyledImg alt="logo" src={logo}></StyledImg>
          </div>
        )}
      </StyledLink>
      <StyledUl>
        {width <= 1094 && (
          <StyledLi>
            <StyledLink to="/">
              <StyledDiv>Accueil</StyledDiv>
            </StyledLink>
          </StyledLi>
        )}
        <StyledLi>
          <StyledLink to="/cv">
            <StyledDiv>CV</StyledDiv>
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/langages">
            <StyledDiv>Langages</StyledDiv>
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/projets">
            <StyledDiv>Projets</StyledDiv>
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/experiences">
            <StyledDiv>Expériences professionnelles</StyledDiv>
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/reseaux">
            <StyledDiv>Réseaux</StyledDiv>
          </StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNav = styled.nav`
  width: 100%;
  background: #018ebd;
  position: sticky;
  height: 70px;
  margin-top: 0px;
`;

const StyledImg = styled.img`
  z-index: 2;
  display: block;
  position: absolute;
  margin: 3px 0 0 3px;
  height: 65px;
`;

const StyledLinear = styled.div`
  z-index: 1;
  position: absolute;
  height: 70px;
  width: 400px;
  background: linear-gradient(to right, #000000, #018ebd);
`;

const StyledUl = styled.ul`
  z-index: 0;
  padding: 0;
  position: relative;
  text-align: center;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-top: 14px;
  @media (max-width: 1490px) {
    float: left;
    margin-left: 35px;
  }
  @media (min-width: 1491px) {
    right: 50%;
    clear: left;
    float: right;
  }
  @media (max-width: 1094px) {
    right: 50%;
    clear: left;
    float: right;
  }
`;

const StyledLi = styled.li`
  display: block;
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
  left: 50%;
  margin: 0px 10px 0 10px;
  @media (max-width: 1094px) {
    margin: 0px 5px 0 5px;
  }
`;

const StyledDiv = styled.div`
  display: block;
  padding: 10px 15px;
  background: transparent;
  box-shadow: 1px 1px 1px 1px #007ca5;
  border-radius: 30px;
  font-family: "Aleo", serif;
  font-size: large;
  color: #002950;
  :hover {
    background: #002430;
    color: #fff;
  }
`;
