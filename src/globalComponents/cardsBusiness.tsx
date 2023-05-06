import React from 'react';
import styled from 'styled-components';

interface CardProps {
  price: string;
  subtitle: string;
  icon: JSX.Element;
  percent: number;
}

const CardWrapper = styled.div`
  width: 250px;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const CardLoadingWrapper = styled.div `
margin-top:35px;
    width:100%;
    height:5px;
    background-color:grey;
    border-radius:25px;
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
`;
const CardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
& > svg {
  fill:blue;
    width:30px;
  }

`;


const CardPercent = styled.div `
  width:0;
  height:5px;
  background-color:blue;
  border-radius:25px;
  `;
const Card: React.FC<CardProps> = ({ price, subtitle, icon, percent }) => {
  const CardPercentProps = styled(CardPercent)`
  width: ${props => percent+"%" || "0"};`;
  return (
    <CardWrapper>
      <CardContent>
        <CardFlex>
          <div>
          <CardTitle>{price}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          </div>
          <Icon>
            {icon}
          </Icon>
        </CardFlex>
        <CardLoadingWrapper>
            <CardPercentProps></CardPercentProps>
        </CardLoadingWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;