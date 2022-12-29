import { Col } from "antd";
import { NavRow } from "./Navbar";
import { MenuOutlined } from "@ant-design/icons";
import LinkContact from "./LinkContact";
import VerticalNav from "./VerticalNav";
import styled from "styled-components";
import { colors } from "../Utils/colors";

interface MobileNavProps {
  isNavOpen: boolean;
  setIsNavOpen(arg0: boolean): void;
  pathname: string;
}

export default function MobileNav({
  isNavOpen,
  setIsNavOpen,
  pathname,
}: MobileNavProps) {
  function handleNavOnClick() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <NavRow align="middle">
      <Col>
        <StyledBurger isNavOpen={isNavOpen} onClick={handleNavOnClick}>
          <MenuOutlined />
        </StyledBurger>
      </Col>
      <Col flex="auto" />
      <LinkContact />
      {isNavOpen && <VerticalNav pathname={pathname}></VerticalNav>}
    </NavRow>
  );
}

const StyledBurger = styled.div<{ isNavOpen: boolean }>`
  transition: background 0.3s;
  padding: 10px 15px;
  border-radius: 10px;
  margin-left: 20px;
  font-size: 20px;
  color: ${colors.myBlack};
  background: ${(props) => (props.isNavOpen ? "#c4c4c4" : "none")};
  :hover {
    cursor: pointer;
    background: ${(props) => (props.isNavOpen ? "#c4c4c4" : "#d9d9d9")};
  }
`;
