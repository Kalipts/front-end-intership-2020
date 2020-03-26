import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import SelectedItem from './SelectedItem';
import Item from './Item';
import AlertInput from './AlertInput';
import icon from '../../images/bag.svg';
const ProjectItem = props => {
  const { src, onChangeItem, errors } = props;
  const inputRef = useRef();
  return (
    <SelectedItem ref={inputRef} title="Project" src={icon}>
      <Item type="Project" makeIcon src={src} onChangeItem={onChangeItem}>
        {props.children}
      </Item>
      {errors && (
        <AlertInput
          open={errors !== undefined}
          message={errors}
          anchorEl={inputRef}
        />
      )}
    </SelectedItem>
  );
};

ProjectItem.propTypes = {
  src: PropTypes.string,
  onChangeItem: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default ProjectItem;
