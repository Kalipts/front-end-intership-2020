import React from "react";
import styled from "styled-components";

const Body = styled.div`
  height: 30px;
  display: flex;
  margin: 5px 0;
`;

const Color = styled.div`
  height: 75%;
  width: 4px;
  border-radius: 1px;
  background-color: ${props => props.color || "#F8465C"};
  margin-right: 5px;
`;

const Icon = styled.img`
  margin-top: 5px;
  max-height: 25px;
  max-width: 25px;
`;

const Name = styled.div`
  height: 18px;
  width: 135px;
  color: black;
  font-size: 15px;
  margin-left: 5px;
  font-family: Muli;
`;

const Item = props => {
  return (
    <Body>
      {props.makeIcon ? <Color /> : <Icon src={props.src} />}
      <Name>{props.children}</Name>
    </Body>
  );
};

export default Item;
