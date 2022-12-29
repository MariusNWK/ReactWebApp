import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { colors } from "../Utils/colors";
import styled from "styled-components";

interface LinkPageProps {
  pathname: string;
  linkto: string;
  text: string;
}

export default function LinkPage({ pathname, linkto, text }: LinkPageProps) {
  return (
    <PageCol>
      <Link to={linkto}>
        <PageRow $current={pathname === linkto} align="middle">
          {text}
        </PageRow>
      </Link>
    </PageCol>
  );
}

const PageCol = styled(Col)`
  height: 100%;
`;

const PageRow = styled(Row)<{ $current: boolean; fontSize?: string }>`
  transition: color 0.5s;
  height: 100%;
  padding: 0px 16px;
  color: ${(props) => (props.$current ? colors.myBlue : "black")};
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.fontSize || "1.05rem"};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom: ${(props) => (props.$current ? "solid" : "none")};
  border-bottom-color: ${(props) =>
    props.$current ? colors.myBlue : "transparent"};
  :hover {
    box-shadow: 1px 1px 1px 1px #bebebe;
    background: linear-gradient(#bebebe65, ${colors.lightBlue});
    color: white;
  }
`;
