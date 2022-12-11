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
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "antd";
import { MailOutlined, MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { mainPage } from "../Utils/variables";

export default function Navbar() {
  const [width, setWindowWidth] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const limit = 1000;
  const mobile = 800;
  const pathname = useLocation().pathname;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
    if (width >= mobile) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  function handleNavOnClick() {
    setIsNavOpen(!isNavOpen);
  }

  if (width < mobile) {
    return (
      <NavRow align="middle">
        <Col>
          <StyledBurger isNavOpen={isNavOpen} onClick={handleNavOnClick}>
            <MenuOutlined />
          </StyledBurger>
        </Col>
        <Col flex="auto" />
        <Col>
          <Link to={mainPage + "/contact"}>
            <StyledContact align="middle">
              <StyledMailOutlined /> Me contacter
            </StyledContact>
          </Link>
        </Col>
        {isNavOpen && <VerticalNav></VerticalNav>}
      </NavRow>
    );
  }

  return (
    <NavRow align="middle">
      {width >= limit && (
        <StyledCol span={6}>
          <StyledRow align="middle">
            <LogoLink to={mainPage + "/"}>
              <StyledLogo>
                Marius<span style={{ color: "#414141" }}>NWK</span>
              </StyledLogo>
            </LogoLink>
          </StyledRow>
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
                <StyledLink to={mainPage + "/"}>
                  <PageRow
                    $current={pathname === mainPage + "/"}
                    align="middle"
                  >
                    Accueil
                  </PageRow>
                </StyledLink>
              </PageCol>
            )}
            <PageCol>
              <StyledLink to={mainPage + "/cv"}>
                <PageRow
                  $current={pathname === mainPage + "/cv"}
                  align="middle"
                >
                  CV
                </PageRow>
              </StyledLink>
            </PageCol>
            <PageCol>
              <StyledLink to={mainPage + "/langages"}>
                <PageRow
                  $current={pathname === mainPage + "/langages"}
                  align="middle"
                >
                  Langages
                </PageRow>
              </StyledLink>
            </PageCol>
            <PageCol>
              <StyledLink to={mainPage + "/projets"}>
                <PageRow
                  $current={pathname === mainPage + "/projets"}
                  align="middle"
                >
                  Projets
                </PageRow>
              </StyledLink>
            </PageCol>
            <PageCol>
              <StyledLink to={mainPage + "/experiences"}>
                <PageRow
                  $current={pathname === mainPage + "/experiences"}
                  align="middle"
                >
                  Expériences
                </PageRow>
              </StyledLink>
            </PageCol>
            <PageCol>
              <StyledLink to={mainPage + "/reseaux"}>
                <PageRow
                  $current={pathname === mainPage + "/reseaux"}
                  align="middle"
                >
                  Réseaux
                </PageRow>
              </StyledLink>
            </PageCol>
          </PagesRow>
        </StyledRow>
      </StyledCol>
      <StyledCol flex="auto">
        <StyledRow justify="end" align="middle">
          <Col>
            <Link to={mainPage + "/contact"}>
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

const VerticalNav = styled.div`
  position: absolute;
  z-index: 3;
  width: 100px;
  height: 100px;
  top: 70px;
  background: #f5f5f5bf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 10px;
`;

const PagesRow = styled(Row)<{ minwidth: string }>`
  height: 100%;
  min-width: ${(props) => props.minwidth};
`;

const PageCol = styled(Col)`
  height: 100%;
`;

const PageRow = styled(Row)<{ $current: boolean; fontSize?: string }>`
  transition: color 0.5s;
  height: 100%;
  padding: 0px 16px;
  color: ${(props) => (props.$current ? "#2d6cff" : "black")};
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.fontSize || "1.05rem"};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom: ${(props) => (props.$current ? "solid" : "none")};
  border-bottom-color: ${(props) =>
    props.$current ? "#2d6cff" : "transparent"};
  :hover {
    box-shadow: 1px 1px 1px 1px #bebebe;
    background: linear-gradient(#bebebe65, #2d6cff65);
    color: white;
  }
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

const StyledLogo = styled.div`
  font-size: 2.4rem;
  color: #2d6cff;
  /* font-family: "Amita", cursive; */
  /* font-family: 'Itim', cursive; */
  font-family: "Mali", cursive;
`;

const LogoLink = styled(Link)`
  margin-left: 20px;
`;

const StyledBurger = styled.div<{ isNavOpen: boolean }>`
  transition: background 0.3s;
  padding: 10px 15px;
  border-radius: 10px;
  margin-left: 20px;
  font-size: 20px;
  color: #414141;
  background: ${(props) => (props.isNavOpen ? "#c4c4c4" : "none")};
  :hover {
    cursor: pointer;
    background: ${(props) => (props.isNavOpen ? "#c4c4c4" : "#d9d9d9")};
  }
`;
