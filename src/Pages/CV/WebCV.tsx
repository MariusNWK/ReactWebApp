import { Col, Row } from "antd";
import styled from "styled-components";
import photoCV from "../../assets/photoCV.jpg";

export default function WebCV() {
  return (
    <FullWidthRow justify="center">
      <MainCol>
        <WebCvRow>
          <LeftCol span={9}>
            <Row>
              <StyledImage alt="photoCV" src={photoCV} />
            </Row>
            <Title>Coordonnées</Title>
          </LeftCol>
          <RightCol span={15}></RightCol>
        </WebCvRow>
      </MainCol>
    </FullWidthRow>
  );
}

const FullWidthRow = styled(Row)`
  width: 100%;
`;

const MainCol = styled(Col)`
  width: 80vw;
`;

const WebCvRow = styled(Row)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const LeftCol = styled(Col)`
  padding: 20px;
  border: solid;
  border-width: 1px;
  border-color: yellow;
  color: #feffff;
`;

const RightCol = styled(Col)`
  padding: 20px;
  border: solid;
  border-width: 1px;
  border-color: red;
`;

const StyledImage = styled.img`
  width: 10vw;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 2vw;
`;
