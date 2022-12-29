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
    <LinkPageCardWrapper flex="auto" background={background}>
      <StyledLink to={linkto}>
        <FullRow>
          <FullWidthRow align="middle" justify="center">
            <PageDesc>{description}</PageDesc>
          </FullWidthRow>
          <FullWidthRow align="bottom" justify="center">
            <Discover>Découvrir</Discover>
          </FullWidthRow>
        </FullRow>
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

const FullRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const FullWidthRow = styled(Row)`
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: ${colors.myGrey};
  font-size: 0.8rem;
  :hover {
    color: ${colors.myBlue};
  }
  height: 100%;
`;

const LinkPageCardWrapper = styled(Col)<{ background: string }>`
  background: ${(props) => props.background};
  :hover {
    background: ${colors.myGrey};
  }
  width: 33%;
  min-width: 150px;
  margin: 1px;
`;

const PageDesc = styled.div`
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;
