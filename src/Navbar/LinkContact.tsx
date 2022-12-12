import { MailOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { mainPage } from "../Utils/variables";
import styled from "styled-components";

export default function LinkContact() {
  return (
    <Col>
      <Link to={mainPage + "/contact"}>
        <StyledContact align="middle">
          <StyledMailOutlined /> Me contacter
        </StyledContact>
      </Link>
    </Col>
  );
}

const StyledContact = styled(Row)`
  margin-right: 25px;
`;

const StyledMailOutlined = styled(MailOutlined)`
  margin-right: 4px;
  margin-top: 2px;
`;
