import { Button, Row } from "antd";
import styled from "styled-components";
import { colors } from "../../Utils/colors";
import myCV from "../../assets/CV.jpg";
import { saveAs } from "file-saver";
import { DownloadOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function CV() {
  const [isLoading, setIsLoading] = useState(false);

  function Download() {
    setIsLoading(true);
    saveAs(myCV, "CV Marius Nowak");
    setIsLoading(false);
  }

  return (
    <CVWrapper align="top" justify="center">
      <CustomRow>
        <CustomRow justify="center">
          <StyledImage alt="CV" src={myCV} />
        </CustomRow>
        <CustomRow justify="center">
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={Download}
            loading={isLoading}
          >
            {isLoading ? "En cours..." : "Télécharger"}
          </Button>
        </CustomRow>
      </CustomRow>
    </CVWrapper>
  );
}

const CVWrapper = styled(Row)`
  min-height: calc(100vh - 70px);
  background: linear-gradient(
    to right,
    ${colors.niceBlue},
    ${colors.cvBlue},
    ${colors.niceBlue}
  );
`;

const StyledImage = styled.img`
  height: 80vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const CustomRow = styled(Row)`
  width: 100%;
  margin: 10px 0;
`;
