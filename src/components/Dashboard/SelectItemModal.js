import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { ESC_KEY } from '../../constants/keyTypes';

import Label from './Label';
import Search from '../shared/Search';
import { CalendarContext } from '../../context/Calendar';

const Wrapper = styled.div`
  position: absolute;
  background-color: #ffffff;
  padding: 5px 20px;
  top: 20%;
  right: 0;
  z-index: 20;
  display: block;
  flex-direction: column;
  max-height: 5500px;
  width: 330px;
  border-radius: 2px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  outline-offset: 0.5px;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.ul`
  background-color: inherit;
  height: 200px;
  max-height: 200px;
  scroll-behavior: smooth;
  overflow-y: scroll;
  label {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    min-width: 150px;
    font-weight: 300;
    font-size: 1.35em;
    margin: 2px auto;
    z-index: 9;
    cursor: pointer;
    transition: all 0.25s linear;
  }
  li {
    width: 100%;
    display: flex;
    align-items: center;
  }
  li:hover label {
    color: #ffffff;
  }
  input[type='radio'] {
    cursor: pointer;
  }
  input[type='radio']:checked ~ #radio {
    border: 5px solid #008000;
  }
`;
const CustomRadio = styled.div`
  position: absolute;
  top: 10px;
  left: 1px;
  display: block;
  border: 5px solid #eeeeee;
  background-color: #ffffff;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  z-index: 5;
  transition: border 0.1s linear;
  ::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 10px;
    width: 10px;
    top: 5px;
    left: 5px;
    margin: auto;
  }
`;

const Item = styled.div`
  height: 40px;
  color: black;
  font-size: 15px;
  font-family: Muli;
  display: flex;
  align-items: center;
`;
const SmallAvatar = styled(Avatar)`
  && {
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
`;
const Color = styled.div`
  height: 60%;
  width: 5px;
  border-radius: 1px;
  background-color: ${props => props.color || '#F8465C'};
  margin: 0 10px;
`;

const SelectItemModal = props => {
  const { type, onChangeItem, onShow } = props;
  const [onClose, setOnClose] = useState(false);
  const [item, setItem] = useState([]);
  const modal = useRef(null);
  const { persons, projects } = useContext(CalendarContext);
  const toggleClose = () => {
    onShow();
    setOnClose(!onClose);
  };

  const onFilterItem = items => {
    setItem(items);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);
    if (type === 'Resource') setItem(persons);
    else setItem(projects);
    return () => {
      document.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [modal]);

  function handleKeyUp(e) {
    const keys = {};
    keys[`${ESC_KEY}`] = () => {
      e.preventDefault();
      toggleClose();
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  function handleOutsideClick(e) {
    const { current } = modal;
    if (current && !current.contains(e.target)) {
      toggleClose();
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }

  return (
    <>
      {!onClose && (
        <Wrapper ref={modal}>
          <Label label={type} />
          <Search
            onFilterItem={onFilterItem}
            items={type === 'Resource' ? persons : projects}
          />
          <ListItem>
            {item &&
              item.map(item => (
                <li key={item._id}>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value={item._id}
                      onChange={onChangeItem}
                    />
                    {type === 'Resource' ? (
                      <Item>
                        <SmallAvatar src={item.avatar} alt="icon-person" />
                        {item.name}
                      </Item>
                    ) : (
                      <Item>
                        <Color color={item.color} />
                        {item.name}
                      </Item>
                    )}
                    <CustomRadio id="radio" />
                  </label>
                </li>
              ))}
          </ListItem>
        </Wrapper>
      )}
    </>
  );
};
SelectItemModal.propTypes = {
  type: PropTypes.string.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default SelectItemModal;
