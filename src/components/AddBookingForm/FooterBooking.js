import styled from "styled-components";
import {CES_ORANGE} from "../../constants/colorTypes";

export const FooterBooking = styled.div`
  height: 42px;
  margin-top: 5px;
  
`;

export const ContainButton = styled.div`
  margin-left: 24.5px;
  margin-right: 19px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const CancelButton = styled.div`
  height: 30px;
  width: 60px;
  border-radius: 2px;
  opacity: 0.5;
  color: BLACK;
  font-family: Muli;
  font-size: 14px;
  line-height: 18px;
  margin-right: 15px;
  margin-top: 11px;
  
`;

export const AddBookingButton = styled.button`
  height: 40px;
  width: 137px;
  border-radius: 2px;
  background-color: ${CES_ORANGE};
  border: none;
  cursor: pointer;
`;

export const AddBookingSpan = styled.span`
    height: 18px;
    width: 87px;
    color: WHITE;
    font-family: Muli;
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    margin-left: 5px;
    margin-top: 11px;
`;
