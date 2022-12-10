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
  const limit = 1070;
  const mobile = 800;

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
      <NavRow align="middle">
        <Col>
          <StyledBurger>
            <MenuOutlined />
          </StyledBurger>
        </Col>
        <Col flex="auto" />
        <Col>
          <Link to="/contact">
            <StyledContact align="middle">
              <StyledMailOutlined /> Me contacter
            </StyledContact>
          </Link>
        </Col>
      </NavRow>
    );
  }

  return (
    <NavRow align="middle">
      {width >= limit && (
        <StyledCol span={6}>
          <Link to="/">
            <StyledRow align="middle">
              <StyledImg alt="logo" src={logo}></StyledImg>
            </StyledRow>
          </Link>
        </StyledCol>
      )}
      <StyledCol span={width >= limit ? 12 : 18}>
        <StyledRow align="middle" justify="center">
          <PagesRow
            justify="space-between"
            align="middle"
            minwidth={width >= limit ? "500px" : "594px"}
          >
            {width < limit && (
              <PageCol>
                <StyledLink to="/">
                  <PageRow align="middle">Accueil</PageRow>
                </StyledLink>
              </PageCol>
            )}
            <PageCol>
              <StyledLink to="/cv">
                <PageRow align="middle">CV</PageRow>
              </StyledLink>
            </PageCol>
            <PageCol>
              <StyledLink to="/langages">
                <PageRow align="middle">Langages</PageRow>
              </StyledLink>
            </PageCol>
            <PageCol>
              <StyledLink to="/projets">
                <PageRow align="middle">Projets</PageRow>
              </StyledLink>
            </PageCol>
            <PageCol>
              <StyledLink to="/experiences">
                <PageRow align="middle">Expériences</PageRow>
              </StyledLink>
            </PageCol>
            <PageCol>
              <StyledLink to="/reseaux">
                <PageRow align="middle">Réseaux</PageRow>
              </StyledLink>
            </PageCol>
          </PagesRow>
        </StyledRow>
      </StyledCol>
      <StyledCol flex="auto">
        <StyledRow justify="end" align="middle">
          <Col>
            <Link to="/contact">
              <StyledContact align="middle">
                <StyledMailOutlined /> Me contacter
              </StyledContact>
            </Link>
          </Col>
        </StyledRow>
      </StyledCol>
    </NavRow>
  );
}

const NavRow = styled(Row)`
  position: sticky;
  top: 0;
  height: 70px;
  background: #f5f5f5bf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
`;

const PagesRow = styled(Row)<{ minwidth: string }>`
  height: 100%;
  min-width: ${(props) => props.minwidth};
`;

const PageCol = styled(Col)`
  height: 100%;
`;

const PageRow = styled(Row)<{ fontSize?: string }>`
  height: 100%;
  padding: 0px 16px;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.fontSize || "1rem"};
`;

const StyledRow = styled(Row)`
  height: 100%;
`;

const StyledCol = styled(Col)`
  height: 100%;
`;

const StyledLink = styled(Link)`
  height: 100%;
`;

// const StyledButton = styled.div`
//   font-size: 1rem;
//   border-radius: 5px;
//   padding: 5px 15px;
//   box-shadow: 1px 1px 1px 1px #bebebe;
//   background: transparent;
//   color: #2d6cff;
//   :hover {
//     background: grey;
//     box-shadow: 1px 1px 1px 1px #3a3a3a;
//     color: white;
//   }
//   width: 6rem;
//   text-align: center;
// `;

const StyledContact = styled(Row)`
  margin-right: 25px;
`;

const StyledMailOutlined = styled(MailOutlined)`
  margin-right: 4px;
  margin-top: 2px;
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
    background: white;
  }
`;
