import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import SelectedItem from './SelectedItem';
import Item from './Item';
import AlertProject from './Style/AlertProject';
import icon from '../../images/bag.svg';
const ProjectItem = props => {
  const { src, onChangeItem, errors } = props;
  return (
    <SelectedItem title="Project" src={icon}>
      <Item type="Project" makeIcon src={src} onChangeItem={onChangeItem}>
        {props.children}
      </Item>
      {errors && <AlertProject>! {errors}</AlertProject>}
    </SelectedItem>
  );
};

ProjectItem.propTypes = {
  errors: PropTypes.string,
  src: PropTypes.string,
  onChangeItem: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default ProjectItem;
