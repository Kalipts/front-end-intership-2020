import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import isNil from 'lodash/isNil';
import Avatar from '@material-ui/core/Avatar';
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
  /* &&& {
    opacity: 0.25;
  }
  && {
    opacity: 1;
  } */
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
    /* border-bottom: 1px solid #333; */
  }
  li:hover label {
    color: #ffffff;
  }
  li:hover div {
    /* border: 3px solid #ffffff; */
  }
  input[type='radio'] {
    /* opacity: 0; */
    cursor: pointer;
  }
  input[type='radio']:checked #radio {
    border: 5px solid #0dff92;
  }
  input[type='radio']:checked & > div::before {
    background: #0dff92;
  }
`;
const CustomRadio = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  display: block;
  border: 5px solid #aaaaaa;
  border-radius: 100%;
  height: 13px;
  width: 13px;
  z-index: 5;
  transition: border 0.25s linear;
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
    /* transition: background 0.25s linear; */
  }
`;

const Item = styled.div`
  height: 40px;
  color: black;
  font-size: 15px;
  margin-left: 5px;
  font-family: Muli;
  display: flex;
  align-items: center;
`;
const Color = styled.div`
  height: 60%;
  width: 5px;
  border-radius: 1px;
  background-color: ${props => props.color || '#F8465C'};
  margin-right: 5px;
`;

const SelectItemModal = props => {
  const { type, onChangeItem, handleChildVisible } = props;
  const [onClose, setOnClose] = useState(false);
  const [item, setItem] = useState([]);
  const modal = useRef(null);
  const { onDisabled, persons, projects } = useContext(CalendarContext);
  const handdleToggleClose = () => {
    setOnClose(!onClose);
  };

  const onFilterItem = items => {
    setItem(items);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);
    handleChildVisible(true);
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
      handdleToggleClose();
      handleChildVisible(false);
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  function handleOutsideClick(e) {
    const { current } = modal;
    if (current && !current.contains(e.target)) {
      handdleToggleClose();
      handleChildVisible(false);
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }

  return (
    <>
      {!onClose && (
        <Wrapper onBlur={onDisabled} ref={modal}>
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
                        <Avatar src={item.avatar} alt="icon-person" />
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
export default SelectItemModal;
