import { Row } from "antd";
import { useState } from "react";
import styled from "styled-components";
import PdfCV from "./PdfCV";
import WebCV from "./WebCV";

export default function CV() {
  const [webVersion, setVersion] = useState(true);

  function handleOnClick() {
    setVersion(!webVersion);
  }

  return (
    <CVWrapper>
      <ButtonRow justify="center">
        <InsideButtonRow align="middle" onClick={handleOnClick}>
          <ChangeCvButton>
            {webVersion ? "Voir version PDF" : "Voir version WEB"}
          </ChangeCvButton>
        </InsideButtonRow>
      </ButtonRow>
      {webVersion ? <WebCV /> : <PdfCV />}
    </CVWrapper>
  );
}

const CVWrapper = styled(Row)`
  min-height: calc(100vh - 70px);
  background: #0273b7;
`;

const ButtonRow = styled(Row)`
  width: 100%;
  margin-top: 10px;
`;

const InsideButtonRow = styled(Row)`
  height: 50px;
  background: #004777;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;

const ChangeCvButton = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: large;
  margin: 0 20px;
  color: #f7f7f7;
`;
