import { Col, Row } from "antd";
import styled from "styled-components";
import { colors } from "../../Utils/colors";
import { mainPage } from "../../Utils/variables";
import LinkPageCard from "./LinkPageCard";

export default function Home() {
  const links = [
    {
      id: 1,
      description: "📃Mon CV (quand même)",
      background: "#ffffff71",
      linkto: mainPage + "/cv",
    },
    {
      id: 2,
      description: "💻 Les langages de programmation que je maîtrise",
      background: "#ffffff48",
      linkto: mainPage + "/langages",
    },
    {
      id: 3,
      description: "👷‍♂️ Quelques projets parmi ceux réalisés",
      background: "#ffffff1e",
      linkto: mainPage + "/projets",
    },
    {
      id: 4,
      description: "🏆 Mes expériences professionnelles",
      background: "#0000001e",
      linkto: mainPage + "/experiences",
    },
    {
      id: 5,
      description: "🐤 Mes réseaux (LinkedIn, Github)",
      background: "#0000004a",
      linkto: mainPage + "/reseaux",
    },
    {
      id: 6,
      description: "📧 Comment me contacter",
      background: "#00000070",
      linkto: mainPage + "/contact",
    },
  ];

  return (
    <HomeWrapper justify="center">
      <MainCard span={18}>
        <Row justify="center">
          <HomeTitle>Parce qu'un CV est trop petit...</HomeTitle>
        </Row>
        <FullHeightRow justify="space-around">
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
        </FullHeightRow>
      </MainCard>
    </HomeWrapper>
  );
}

const HomeWrapper = styled(Row)`
  min-height: calc(100vh - 70px);
  background: ${colors.niceBlue};
`;

const FullHeightRow = styled(Row)`
  min-height: calc(100% - 60px - 1.8rem);
`;

const HomeTitle = styled.div`
  margin: 30px 0;
  font-family: "Itim", cursive;
  font-size: 1.8rem;
  color: ${colors.myGrey};
  text-align: center;
`;

const MainCard = styled(Col)`
  margin: 30px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background: ${colors.niceBlue};
  overflow: hidden;
`;
