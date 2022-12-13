/*
    Barre de navigation menant vers les pages suivantes :
        - Accueil (Bienvenue... etc..)
        - CV
        - Langages maîtrisés (avec un nombre d'étoiles sur 5 pour noter le niveau de maîtrise)
        - Projets
        - Expériences professionnelles
        - Réseaux (Linkedin, Github)
*/

import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { mainPage } from "../Utils/variables";
import LinkPage from "./LinkPage";
import LinkContact from "./LinkContact";
import MobileNav from "./MobileNav";
import LinkLogoHome from "./LinkLogoHome";

type LinkPageType = {
  pathname: string;
  linkto: string;
  text: string;
};

export default function Navbar() {
  const [width, setWindowWidth] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const limit = 1000;
  const mobile = 800;
  const pathname = useLocation().pathname;

  const LinkPages: LinkPageType[] = [
    { pathname: pathname, linkto: mainPage + "/cv", text: "CV" },
    { pathname: pathname, linkto: mainPage + "/langages", text: "Langages" },
    { pathname: pathname, linkto: mainPage + "/projets", text: "Projets" },
    {
      pathname: pathname,
      linkto: mainPage + "/experiences",
      text: "Expériences",
    },
    { pathname: pathname, linkto: mainPage + "/reseaux", text: "Réseaux" },
  ];

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

  if (width < mobile) {
    return (
      <MobileNav
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        pathname={pathname}
      />
    );
  }

  return (
    <NavRow align="middle">
      {width >= limit && <LinkLogoHome />}
      <StyledCol span={width >= limit ? 12 : 18}>
        <StyledRow align="middle" justify="center">
          <PagesRow
            justify="space-between"
            align="middle"
            minwidth={width >= limit ? "500px" : "594px"}
          >
            {width < limit && (
              <LinkPage
                pathname={pathname}
                linkto={mainPage + "/"}
                text="Accueil"
              ></LinkPage>
            )}
            {LinkPages.map((page) => {
              return (
                <LinkPage
                  key={page.linkto}
                  pathname={page.pathname}
                  linkto={page.linkto}
                  text={page.text}
                ></LinkPage>
              );
            })}
          </PagesRow>
        </StyledRow>
      </StyledCol>
      <StyledCol flex="auto">
        <StyledRow justify="end" align="middle">
          <LinkContact />
        </StyledRow>
      </StyledCol>
    </NavRow>
  );
}

export const NavRow = styled(Row)`
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

export const StyledRow = styled(Row)`
  height: 100%;
`;

export const StyledCol = styled(Col)`
  height: 100%;
`;
