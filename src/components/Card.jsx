import React from "react";
import styled from "styled-components";

import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Container = styled.div`
  height: 100px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin: 10px 0 0 0;
`;
const UserId = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Id = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: grey;
`;
const Circle = styled.div`
  height: ${(props) => props.r}px;
  width: ${(props) => props.r}px;
  border-radius: 50%;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  height: 15px;
`;
const Tag = styled.div`
  font-weight: 400;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin-left: 8px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

const Text = styled.p`
  margin-left: 4px;
`;

//code for structure of the cards
const Card = ({ ticket }) => {
  return (
    <Container>
      <UserId>
        <Id>{ticket.id}</Id>
        <Circle r={20}>
        <FaRegUserCircle/>
        </Circle>
      </UserId>

      <Title>
        {ticket.title.length > 50
          ? ticket.title.slice(0, 50) + " ..."
          : ticket.title}
      </Title>
      <TagContainer>
        <FiMoreHorizontal
          style={{
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "2px",
            color: "rgba(0,0,0,0.4)",
            fontSize: "15px",
          }}
        />
        <Tag>
          <Circle r={6} />

          {ticket.tag.map((text) => (
            <Text key={text} >{text}</Text>
          ))}
        </Tag>
      </TagContainer>
    </Container>
  );
};

export default Card;