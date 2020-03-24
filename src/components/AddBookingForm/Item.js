import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import SelecteItemModal from '../Dashboard/SelectItemModal';

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
  color: black;
  font-size: 15px;
  margin-left: 5px;
  font-family: Muli;
  padding: 5px 8px;
  :hover {
    background-color: #e6e6e6;
    border-radius: 8px;
  }
`;

const Item = props => {
  const { src, type, onChangeItem } = props;
  const [onShow, setOnShow] = useState(false);
  const handleOnShow = () => {
    setOnShow(!onShow);
  };
  return (
    <Body>
      {props.makeIcon ? (
        <Color color={src} />
      ) : (
        <Avatar alt="icon-person" src={src} />
      )}
      <Name onClick={handleOnShow}>{props.children}</Name>
      {onShow && (
        <SelecteItemModal
          onShow={handleOnShow}
          onChangeItem={onChangeItem}
          type={type}
        />
      )}
    </Body>
  );
};

Item.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
  onChangeItem: PropTypes.func.isRequired,
};
export default Item;
