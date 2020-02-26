import styled from "styled-components";
import {CES_GREY} from "../../constants/colorTypes";

export const Header = styled.div`
  height:46px;
  display: block;
`;

 export  const HeaderBooking = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
`;

export  const GridHeader = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  height: 100%;
  display: flex;
`;

export  const NewBooking = styled.div`
  flex: 0 0 auto;
  height: 20px;
  width: 90px;
  color: ${props => props.color || "black"};
  cursor: pointer;
  margin-left: 12px;
  margin-top: 17px;
`;

export  const NewTimeOff = styled.div`
  flex: 0 0 auto;
  height: 20px;
  width: 90px;
  color: ${props => props.color || "black"};
  margin-left: 70px;
  margin-top: 17px;
  opacity: 0.7;
  cursor: pointer;
`;

export const Line = styled.div`
  box-sizing: border-box;
  height: 1px;
  width: 355px;
  border: 1px solid ${CES_GREY};
  margin-top: 1px;
  margin-left: 21px;
`;
