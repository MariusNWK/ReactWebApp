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
import { MailOutlined, MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [width, setWindowWidth] = useState(0);
  const limit = 1120;
  const mobile = 900;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (width < mobile) {
    return (
      <NavRow>
        <StyledBurger>
          <MenuOutlined />
        </StyledBurger>
      </NavRow>
    );
  }

  return (
    <NavRow>
      {width >= limit && (
        <StyledCol span={6}>
          <StyledLink to="/">
            <StyledImg alt="logo" src={logo}></StyledImg>
          </StyledLink>
        </StyledCol>
      )}
      <StyledCol span={width >= limit ? 12 : 18}>
        <StyledRow justify="space-around" align="middle">
          {width < limit && (
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
  min-height: 70px;
  padding: 10px 0px;
  background: lightgrey;
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
  border-radius: 5px;
  padding: 5px 15px;
  box-shadow: 1px 1px 1px 1px #bebebe;
  background: transparent;
  color: #2d6cff;
  :hover {
    background: grey;
    box-shadow: 1px 1px 1px 1px #3a3a3a;
    color: white;
  }
  width: 5rem;
  text-align: center;
`;

const StyledDiv = styled.div`
  margin-right: 25px;
`;

const StyledImg = styled.img`
  margin-left: 25px;
`;

const StyledBurger = styled.div`
  padding: 10px;
  border: solid;
  border-radius: 10px;
  border-width: 1px;
  margin-left: 20px;
  font-size: 20px;
  background: #efefef;
  :hover {
    cursor: pointer;
    padding: 7px;
    font-size: 26px;
    background: white;
  }
`;
