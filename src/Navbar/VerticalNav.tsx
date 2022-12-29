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
import { colors } from "../Utils/colors";
import { mainPage } from "../Utils/variables";

interface VerticalNavProps {
  pathname: string;
}

type LinkPageType = {
  url: string;
  icon: JSX.Element;
  text: string;
  last?: boolean;
};

export default function VerticalNav({ pathname }: VerticalNavProps) {
  const pages: LinkPageType[] = [
    {
      url: mainPage + "/",
      icon: (
        <HomeOutlined style={{ fontSize: "17px", margin: "1px 7px 0 0" }} />
      ),
      text: "Accueil",
    },
    {
      url: mainPage + "/cv",
      icon: (
        <IdcardOutlined style={{ fontSize: "17px", margin: "1px 7px 0 0" }} />
      ),
      text: "CV",
    },
    {
      url: mainPage + "/langages",
      icon: (
        <CopyrightOutlined
          style={{ fontSize: "17px", margin: "1px 7px 0 0" }}
        />
      ),
      text: "Langages",
    },
    {
      url: mainPage + "/projets",
      icon: (
        <AppstoreOutlined style={{ fontSize: "17px", margin: "1px 7px 0 0" }} />
      ),
      text: "Projets",
    },
    {
      url: mainPage + "/experiences",
      icon: (
        <StarOutlined style={{ fontSize: "17px", margin: "1px 7px 0 0" }} />
      ),
      text: "Expériences",
    },
    {
      url: mainPage + "/reseaux",
      icon: (
        <LinkedinOutlined style={{ fontSize: "17px", margin: "1px 7px 0 0" }} />
      ),
      text: "Réseaux",
      last: true,
    },
  ];

  return (
    <StyledVerticalNav>
      {pages.map((page) => {
        return (
          <Link key={page.url} to={page.url}>
            <PageRow
              $current={pathname === page.url}
              align="middle"
              justify="start"
            >
              {page.icon}
              <StyledPageText last={page.last}>{page.text}</StyledPageText>
            </PageRow>
          </Link>
        );
      })}
    </StyledVerticalNav>
  );
}

const StyledVerticalNav = styled.div`
  z-index: 1;
  position: absolute;
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

const PageRow = styled(Row)<{ $current: boolean }>`
  transition: color 0.5s;
  padding: 10px 15px;
  color: ${(props) => (props.$current ? colors.myBlue : "#3e3e3e")};
  border-left: ${(props) => (props.$current ? "solid" : "none")};
  border-left-color: ${colors.myBlue};
  :hover {
    background: #2d6cff1e;
    color: white;
  }
`;
