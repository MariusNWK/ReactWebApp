import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainPage } from "../Utils/variables";
import { StyledCol, StyledRow } from "./Navbar";
import { colors } from "../Utils/colors";

export default function LinkLogoHome() {
  return (
    <StyledCol span={6}>
      <StyledRow align="middle">
        <LogoLink to={mainPage + "/"}>
          <StyledLogo>
            Marius<span style={{ color: colors.myBlack }}>NWK</span>
          </StyledLogo>
        </LogoLink>
      </StyledRow>
    </StyledCol>
  );
}

const StyledLogo = styled.div`
  font-size: 2.4rem;
  color: ${colors.myBlue};
  font-family: "Mali", cursive;
`;

const LogoLink = styled(Link)`
  margin-left: 20px;
`;
