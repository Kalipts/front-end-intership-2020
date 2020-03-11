import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import SelecteItemModal from '../Dashboard/SelectItemModal';
import { CalendarContext } from '../../context/Calendar';

const Body = styled.div`
  display: flex;
  margin: 5px 0;
  cursor: pointer;
  align-items: center;
`;

const Color = styled.div`
  height: 17px;
  width: 5px;
  border-radius: 1px;
  background-color: ${props => props.color || 'none'};
  margin-right: 5px;
`;

const Name = styled.div`
  height: 18px;
  min-width: 150px;
  color: black;
  font-size: 15px;
  margin-left: 5px;
  font-family: Muli;
`;

const Item = props => {
  const { onDisabled, disabled } = useContext(CalendarContext);
  const { src, type, onChangeItem } = props;
  return (
    <Body onClick={onDisabled}>
      {props.makeIcon ? (
        <Color color={src} />
      ) : (
        <Avatar alt="icon-person" src={src} />
      )}
      <Name>{props.children}</Name>
      {disabled && <SelecteItemModal onChangeItem={onChangeItem} type={type} />}
    </Body>
  );
};

export default Item;
