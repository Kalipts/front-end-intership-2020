import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import SelecteItemModal from '../Dashboard/SelectItemModal';

const Body = styled.div`
  display: flex;
  margin: 5px 0;
  cursor: pointer;
  align-items: center;
  max-height: 50px;
`;

const Color = styled.div`
  height: 17px;
  width: 5px;
  border-radius: 1px;
  background-color: ${props => props.color || 'none'};
  margin-right: 5px;
`;

const Name = styled.div`
  height: 20px;
  color: black;
  font-size: 18px;
  margin-left: 5px;
  font-family: Muli;
  padding: 5px 8px;
  :hover {
    background-color: #e6e6e6;
    border-radius: 8px;
  }
`;

const Item = props => {
  const { src, type, onChangeItem, makeIcon } = props;
  const [onShow, setOnShow] = useState(false);
  const addProject = src === '';
  const Icon = () => {
    if (addProject) return <AddIcon color="secondary" />;
    return <Color color={src} />;
  };
  const handleOnShow = () => {
    setOnShow(!onShow);
  };
  return (
    <Body>
      {makeIcon ? <Icon /> : <Avatar alt="icon-person" src={src} />}
      <Name onClick={handleOnShow}>
        {!addProject ? props.children : 'Add Project'}
      </Name>
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
  makeIcon: PropTypes.bool,
  children: PropTypes.element,
};
export default Item;
