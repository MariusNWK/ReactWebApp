import {
  AppstoreOutlined,
  CopyrightOutlined,
  HomeOutlined,
  IdcardOutlined,
  LinkedinOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainPage } from "../Utils/variables";

interface VerticalNavProps {
  pathname: string;
}

export default function VerticalNav({ pathname }: VerticalNavProps) {
  return (
    <StyledVerticalNav>
      <Link to={mainPage + "/"}>
        <PageRow
          current={pathname === mainPage + "/"}
          align="middle"
          justify="start"
        >
          <HomeOutlined style={{ fontSize: "17px", margin: "1px 7px 0 0" }} />
          <StyledPageText>Accueil</StyledPageText>
        </PageRow>
      </Link>
      <Link to={mainPage + "/cv"}>
        <PageRow
          current={pathname === mainPage + "/cv"}
          align="middle"
          justify="start"
        >
          <IdcardOutlined style={{ fontSize: "17px", margin: "1px 7px 0 0" }} />
          <StyledPageText>CV</StyledPageText>
        </PageRow>
      </Link>
      <Link to={mainPage + "/langages"}>
        <PageRow
          current={pathname === mainPage + "/langages"}
          align="middle"
          justify="start"
        >
          <CopyrightOutlined
            style={{ fontSize: "17px", margin: "1px 7px 0 0" }}
          />
          <StyledPageText>Langages</StyledPageText>
        </PageRow>
      </Link>
      <Link to={mainPage + "/projets"}>
        <PageRow
          current={pathname === mainPage + "/projets"}
          align="middle"
          justify="start"
        >
          <AppstoreOutlined
            style={{ fontSize: "17px", margin: "1px 7px 0 0" }}
          />
          <StyledPageText>Projets</StyledPageText>
        </PageRow>
      </Link>
      <Link to={mainPage + "/experiences"}>
        <PageRow
          current={pathname === mainPage + "/experiences"}
          align="middle"
          justify="start"
        >
          <StarOutlined style={{ fontSize: "17px", margin: "1px 7px 0 0" }} />
          <StyledPageText>Expériences</StyledPageText>
        </PageRow>
      </Link>
      <Link to={mainPage + "/reseaux"}>
        <PageRow
          current={pathname === mainPage + "/reseaux"}
          align="middle"
          justify="start"
        >
          <LinkedinOutlined
            style={{ fontSize: "17px", margin: "1px 7px 0 0" }}
          />
          <StyledPageText last>Réseaux</StyledPageText>
        </PageRow>
      </Link>
    </StyledVerticalNav>
  );
}

const StyledVerticalNav = styled.div`
  position: absolute;
  z-index: 1;
  top: 70px;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 10px;
  width: 160px;
`;

const StyledPageText = styled.div<{ last?: boolean }>`
  border-bottom-right-radius: ${(props) => (props.last ? "10px" : "none")};
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  margin-left: 3px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PageRow = styled(Row)<{ current: boolean }>`
  transition: color 0.5s;
  padding: 10px 15px;
  color: ${(props) => (props.current ? "#2d6cff" : "#3e3e3e")};
  border-left: ${(props) => (props.current ? "solid" : "none")};
  border-left-color: #2d6cff;
  :hover {
    background: #2d6cff1e;
    color: white;
  }
`;
