import styled from "styled-components";
import background from "../../assets/background.jpg";

export default function Home() {
  return (
    <StyledWrapper>
      <StyledBackground alt="background" src={background}></StyledBackground>
      <StyledHome>Bienvenue à l'accueil</StyledHome>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledBackground = styled.img`
  z-index: -1;
  top: 0;
  left: 0;
  max-width: 100%;
  overflow-x: hidden;
  position: absolute;
`;

const StyledHome = styled.div`
  color: white;
`;
