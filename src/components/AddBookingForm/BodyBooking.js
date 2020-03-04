import styled from "styled-components";
import { CES_GREY_BORDER, CES_ORANGE } from "../../constants/colorTypes";

export const TimeRatio = styled.div`
  height: 50px;
  display: flex;
  margin-top: 10px;
`;

export const Percentage = styled.div`
  box-sizing: border-box;
  height: 36px;
  width: 140px;
  border: 1px solid ${CES_ORANGE};
  border-radius: 17px;
  margin-top: 6px;
  display: flex;
  cursor: pointer;
`;

export const Duration = styled.div`
  box-sizing: border-box;
  height: 36px;
  width: 114px;
  border: 1px solid ${CES_GREY_BORDER};
  border-radius: 17px;
  margin-top: 5px;
  margin-left: 20px;
  display: flex;
  cursor: pointer;
`;

export const Squater = styled.img`
  margin-left: 8px;
  margin-top: 8px;
  height: 18px;
  width: 18px;
`;

export const Lock = styled.img`
  height: 18px;
  width: 18px;
  display: inline-block;
  margin-left: 6px;
  margin-top: 7px;
`;

export const DurationInside = styled.div`
  margin-top: 9px;
  padding-left: 10px;
  font-size: 15px;
  color: ${CES_GREY_BORDER};
`;

export const PercentageInside = styled.div`
  margin-top: 9px;
  padding-left: 10px;
  font-size: 15px;
  color: ${CES_ORANGE};
`;

export const BookingTime = styled.div`
  height: 50px;
  display: flex;
`;
export const Utilization = styled.div`
  width: 136px;
  display: flex;
  flex-direction: column;
  height: 40px;
  input {
    line-height: 18px;
    color: black;
    border: none;
    outline: none;
    width: 100%;
    padding: 3px;
  }
  & > div {
    margin-top: 0;
  }
`;

export const TotalTime = styled.div`
  height: 30px;
  margin-top: 15px;
  padding: 5px auto;
`;
