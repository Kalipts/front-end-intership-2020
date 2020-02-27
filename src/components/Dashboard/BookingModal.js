import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./StyledModal";
import SelectItemModal from "./SelectItemModal";
import AddBookingForm from "../AddBookingForm/index";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 1;
`;

const BookingModal = props => {
  const [onClose, setOnClose] = useState(false);

  const onClickCancle = e => setOnClose(true);
  // const collapse = () => setOnClose(false);

  return (
    <Wrapper>
      {!onClose && (
        <Modal
          // tabIndex="0"
          // onBlur={collapse}
          handleClickCancle={onClickCancle}
          height="430px"
          cancle="true"
        >
          {/* <SelectItemModal /> */}
          <AddBookingForm />
        </Modal>
      )}
    </Wrapper>
  );
};

export default BookingModal;
