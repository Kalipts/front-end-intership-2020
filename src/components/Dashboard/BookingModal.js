import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import AddBookingForm from '../AddBookingForm/index';
import { CalendarContext } from '../../context/Calendar';

const Wrapper = styled.div`
  width: 100px;
  height: 100xp;
  background-color: palegoldenrod;
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 1;
`;

const BookingModal = () => {
  const calendarContext = useContext(CalendarContext);
  const { handleCloseModal, isModalOpen } = calendarContext;
  const [onClose, setOnClose] = useState(isModalOpen);

  return (
    <Wrapper
      onClick={e => {
        handleCloseModal();
        setOnClose(!onClose);
      }}
    >
      {!onClose && isModalOpen && <AddBookingForm height="500px" />}
    </Wrapper>
  );
};

export default BookingModal;
