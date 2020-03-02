import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  DISTANCE_SCROLLBAR_BOUNCE,
  DISTANCE_TO_CHECK_BOUNCE_OF_SCROLLBAR,
} from '../App/constant';

export default function DragWithScrollBar(props) {
  const { numberInit, widthItem } = props;
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(
    numberInit * widthItem - DISTANCE_SCROLLBAR_BOUNCE,
  );
  loadItems = () => {
    if (isLoading === false) {
      setScrollWidth(scrollWidth + widthItem);
      props.loadItems();
    }
  };
  mouseUpHandle = async e => {
    if (isScrolling) {
      setIsScrolling(false);
    }
  };
  mouseDownHandle = async e => {
    if (!isScrolling) {
      setIsScrolling(isScrolling);
      this.lastClientX = e.clientX;
      e.preventDefault();
    }
  };

  mouseMoveHandle = useCallback(async e => {
    if (isScrolling) {
      this.refs.slider.scrollLeft -=
        -this.lastClientX + (this.lastClientX + e.clientX);
    }
  });

  useEffect(() => {
    window.addEventListener('mouseup', this.mouseUpHandle);
    window.addEventListener('mousemove', this.mouseMoveHandle);
    this.refs.slider.addEventListener('scroll', () => {
      const { scrollLeft, clientHeight } = this.refs.slider;

      if (
        scrollLeft + DISTANCE_TO_CHECK_BOUNCE_OF_SCROLLBAR >= scrollWidth ||
        scrollLeft === 0
      ) {
        this.loadItems(scrollLeft);
      }
    });
    return () => {
      window.removeEventListener('mouseup', mouseUpHandle);
      window.removeEventListener('mousemove', this.mouseMoveHandle);
    };
  }, []);
  return <div></div>;
}
DragWithScrollBar.propTypes = {
  numberInit: PropTypes.number,
  widthItem: PropTypes.number,
};
