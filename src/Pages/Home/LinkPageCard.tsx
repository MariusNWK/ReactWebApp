import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../Utils/colors";

interface LinkPageCardProps {
  description: string;
  background: string;
  linkto: string;
}

export default function LinkPageCard({
  description,
  background,
  linkto,
}: LinkPageCardProps) {
  return (
    <LinkPageCardWrapper span={7} background={background}>
      <StyledLink to={linkto}>
        <Row align="middle" justify="center">
          <PageTitle>{description}</PageTitle>
        </Row>
        <Row align="bottom" justify="center">
          <Discover>Découvrir</Discover>
        </Row>
      </StyledLink>
    </LinkPageCardWrapper>
  );
}

const Discover = styled.div`
  font-family: "Montserrat", sans-serif;
  padding: 5px 15px;
  border: solid;
  border-width: 1px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  color: ${colors.myGrey};
  font-size: 0.8rem;
  :hover {
    color: ${colors.myBlue};
  }
`;

const LinkPageCardWrapper = styled(Col)<{ background: string }>`
  border-radius: 20px;
  margin-bottom: 10px;
  background: ${(props) => props.background};
  :hover {
    background: ${colors.myGrey};
  }
  min-width: 150px;
`;

const PageTitle = styled.div`
  margin: 10px 0;
  font-family: "Montserrat", sans-serif;
`;
