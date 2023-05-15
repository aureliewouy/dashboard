import React from "react";
import styled from "styled-components";

interface CardProps {
  price: string;
  subtitle: string;
  icon: JSX.Element;
  percent: number;
  color: string;
}

const CardWrapper = styled.div`
  flex-grow: 1;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const CardLoadingWrapper = styled.div`
  margin-top: 35px;
  width: 100%;
  height: 5px;
  background-color: grey;
  border-radius: 25px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 10px 0;
`;

const CardSubtitle = styled.p`
  font-size: 16px;
  margin: 0;
  color: grey;
`;
const CardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardPercent = styled.div`
  width: 0;
  height: 5px;
  background-color: blue;
  border-radius: 25px;
`;
const CardPercentWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
const Percent = styled.p`
  color: grey;
  font-size: smaller;
  margin-left: 5px;
`;
const Card: React.FC<CardProps> = ({
  price,
  subtitle,
  icon,
  percent,
  color,
}) => {
  const CardPercentProps = styled(CardPercent)`
    width: ${(props) => percent + "%" || "0"};
    background-color: ${(props) => color};
  `;
  const Icon = styled.div`
    & > svg {
      fill: ${(props) => color};
      width: 30px;
    }
  `;

  return (
    <CardWrapper>
      <CardContent>
        <CardFlex>
          <div>
            <CardTitle>{price}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
          </div>
          <Icon>{icon}</Icon>
        </CardFlex>
        <CardPercentWrapper>
          <CardLoadingWrapper>
            <CardPercentProps></CardPercentProps>
          </CardLoadingWrapper>
          <Percent>{percent}%</Percent>
        </CardPercentWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
