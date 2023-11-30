import { Button, Col, Row } from "antd";
import styled from "styled-components";
import myCV from "../../assets/CV.jpg";
import { saveAs } from "file-saver";
import { DownloadOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function PdfCV() {
  const [isLoading, setIsLoading] = useState(false);

  function Download() {
    setIsLoading(true);
    saveAs(myCV, "CV Marius Nowak");
    setIsLoading(false);
  }

  return (
    <CustomRow>
      <CustomRow justify="center">
        <Col>
          <StyledImage alt="CV" src={myCV} />
          <StyledButton
            type="primary"
            icon={<DownloadOutlined />}
            onClick={Download}
            loading={isLoading}
            size="large"
          />
        </Col>
      </CustomRow>
      <CustomRow justify="center"></CustomRow>
    </CustomRow>
  );
}

const StyledImage = styled.img`
  height: calc(100vh - 200px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 0;
`;

const CustomRow = styled(Row)`
  width: 100%;
`;
