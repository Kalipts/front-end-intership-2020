import React from 'react';
import PropTypes from 'prop-types';

import SelectedItem from './SelectedItem';
import Item from './Item';
import icon from '../../images/bag.svg';
const ResourceItem = props => {
  const { onDisabled, src, onChangeItem } = props;
  return (
    <SelectedItem title="Resource" src={icon}>
      <Item
        onDisabled={onDisabled}
        type="Resource"
        src={src}
        onChangeItem={onChangeItem}
      >
        {props.children}
      </Item>
    </SelectedItem>
  );
};

ResourceItem.propTypes = {
  onDisabled: PropTypes.func,
  src: PropTypes.string,
  onChangeItem: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default ResourceItem;
