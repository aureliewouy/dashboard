import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  widget: JSX.Element;
  grow?: number;
}

const CardWrapper = styled.div`
  flex-grow: 1;
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

const CardBase: React.FC<CardProps> = ({ title, widget, grow }) => {
  const CardWrapperSized = styled(CardWrapper)`
    flex-grow: ${(props) => grow};
  `;
  return (
    <CardWrapperSized>
      <CardContent>
        <CardFlex>
          <div>
            <CardTitle>{title}</CardTitle>
          </div>
        </CardFlex>
        {widget}
      </CardContent>
    </CardWrapperSized>
  );
};

export default CardBase;
