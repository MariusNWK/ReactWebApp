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
import { Col, Row } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <NavRow>
      {width >= 1100 && (
        <StyledCol span={6}>
          <StyledLink to="/">
            <img alt="logo" src={logo}></img>
          </StyledLink>
        </StyledCol>
      )}
      <StyledCol span={width >= 1100 ? 12 : 18}>
        <StyledRow justify="space-around" align="middle">
          {width < 1100 && (
            <Col>
              <StyledLink to="/">
                <StyledButton>Accueil</StyledButton>
              </StyledLink>
            </Col>
          )}
          <Col>
            <StyledLink to="/cv">
              <StyledButton>CV</StyledButton>
            </StyledLink>
          </Col>
          <Col>
            <StyledLink to="/langages">
              <StyledButton>Langages</StyledButton>
            </StyledLink>
          </Col>
          <Col>
            <StyledLink to="/projets">
              <StyledButton>Projets</StyledButton>
            </StyledLink>
          </Col>
          <Col>
            <StyledLink to="/experiences">
              <StyledButton>Expériences</StyledButton>
            </StyledLink>
          </Col>
          <Col>
            <StyledLink to="/reseaux">
              <StyledButton>Réseaux</StyledButton>
            </StyledLink>
          </Col>
        </StyledRow>
      </StyledCol>
      <StyledCol span={6}>
        <StyledRow justify="center" align="middle">
          <Col flex="auto"></Col>
          <Col>
            <StyledLink to="/contact">
              <StyledDiv>
                <MailOutlined /> Me Contacter
              </StyledDiv>
            </StyledLink>
          </Col>
        </StyledRow>
      </StyledCol>
    </NavRow>
  );
}

const NavRow = styled(Row)`
  position: sticky;
  top: 0;
  min-height: 45px;
  padding: 10px 0px;
  background: linear-gradient(to bottom, white, grey);
`;

const StyledRow = styled(Row)`
  height: 100%;
`;

const StyledCol = styled(Col)``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.div`
  font-size: 1rem;
  padding: 5px 15px;
  box-shadow: 1px 1px 1px 1px #bebebe;
  background-color: transparent;
  color: #2d6cff;
  :hover {
    background-color: #2d6cff;
    color: white;
  }
  width: 5rem;
  text-align: center;
`;

const StyledDiv = styled.div`
  padding-right: 25px;
`;
