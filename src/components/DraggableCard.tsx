import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ICardProps {
  $isDragging: boolean;
}

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const Card = styled.div<ICardProps>`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => (props.$isDragging ? "#e4f2ff" : props.theme.cardColor)};
  box-shadow: ${(props) => (props.$isDragging ? "0px 2px 5px rgba(0,0,0,0.05)" : "none")};
`;

function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
