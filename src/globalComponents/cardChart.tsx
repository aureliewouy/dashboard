import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  chart: JSX.Element;
}

const CardWrapper = styled.div`
  width: 32%;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 10px 0;
`;

const CardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardChart: React.FC<CardProps> = ({ title, chart }) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardFlex>
          <div>
          <CardTitle>{title}</CardTitle>
          </div>
        </CardFlex>
        {chart}
      </CardContent>
    </CardWrapper>
  );
};

export default CardChart;
