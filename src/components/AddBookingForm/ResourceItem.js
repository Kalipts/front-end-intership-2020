import React from 'react';
import PropTypes from 'prop-types';

import SelectedItem from './SelectedItem';
import Item from './Item';
import icon from '../../images/bag.svg';
const ResourceItem = props => {
  const { src, onChangeItem } = props;
  return (
    <SelectedItem title="Resource" src={icon}>
      <Item type="Resource" src={src} onChangeItem={onChangeItem}>
        {props.children}
      </Item>
    </SelectedItem>
  );
};

ResourceItem.propTypes = {
  src: PropTypes.string,
  onChangeItem: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default ResourceItem;
