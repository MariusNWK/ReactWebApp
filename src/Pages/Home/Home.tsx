import { Col, Row } from "antd";
import styled from "styled-components";
import { colors } from "../../Utils/colors";
import { mainPage } from "../../Utils/variables";
import LinkPageCard from "./LinkPageCard";

export default function Home() {
  const links = [
    {
      id: 1,
      description: "Mon CV",
      background: "#0000001e",
      linkto: mainPage + "/cv",
    },
    {
      id: 2,
      description: "Mon CV",
      background: "#0000001e",
      linkto: mainPage + "/cv",
    },
    {
      id: 3,
      description: "Mon CV",
      background: "#0000001e",
      linkto: mainPage + "/cv",
    },
    {
      id: 4,
      description: "Mon CV",
      background: "#0000001e",
      linkto: mainPage + "/cv",
    },
    {
      id: 5,
      description: "Mon CV",
      background: "#0000001e",
      linkto: mainPage + "/cv",
    },
    {
      id: 6,
      description: "Mon CV",
      background: "#0000001e",
      linkto: mainPage + "/cv",
    },
  ];

  return (
    <HomeWrapper justify="center">
      <MainCard span={16}>
        <Row justify="center">
          <HomeTitle>Bienvenue</HomeTitle>
        </Row>
        <Row justify="space-around">
          {links.map((link) => {
            return (
              <LinkPageCard
                key={link.id}
                description={link.description}
                background={link.background}
                linkto={link.linkto}
              />
            );
          })}
        </Row>
      </MainCard>
    </HomeWrapper>
  );
}

const HomeWrapper = styled(Row)``;

const HomeTitle = styled.div`
  margin: 30px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  color: ${colors.myGrey};
`;

const MainCard = styled(Col)`
  margin: 30px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background: ${colors.myBlue};
`;
