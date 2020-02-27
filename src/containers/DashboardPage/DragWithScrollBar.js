import React from 'react';
import Container from '../../components/DragWithScrollBarItem/Container';
import {
  DISTANCE_SCROLLBAR_BOUNCE,
  DISTANCE_TO_CHECK_BOUNCE_OF_SCROLLBAR
} from '../App/constant';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DragWithScrollBar() {
  const { numberInit, widthItem } = props;
  cosnt[error] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(
    numberInit * widthItem - DISTANCE_SCROLLBAR_BOUNCE
  );
  loadItems = scrollLeft => {
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
  mouseMoveHandle = async e => {
    if (isScrolling) {
      this.refs.slider.scrollLeft -=
        -this.lastClientX + (this.lastClientX + e.clientX);
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', this.mouseUpHandle);
    window.addEventListener('mousemove', this.mouseMoveHandle);
    this.refs.slider.addEventListener('scroll', () => {
      let { scrollLeft, clientHeight } = this.refs.slider;

      if (
        scrollLeft + DISTANCE_TO_CHECK_BOUNCE_OF_SCROLLBAR >= scrollWidth ||
        scrollLeft === 0
      ) {
        this.loadItems(scrollLeft);
      }
    });
    return () => {
      window.removeEventListener('mouseup', this.mouseUpHandle);
      window.removeEventListener('mousemove', this.mouseMoveHandle);
    };
  }, []);
  return <div></div>;
}
