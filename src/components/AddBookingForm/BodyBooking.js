import styled from "styled-components";
import {CES_GREY_BORDER, CES_GREY_TITLE, CES_ORANGE} from "../../constants/colorTypes";

export const BodyAddBooking = styled.div`
  margin-top: 10px;
  height: 340px;
`;

export const TimeRatio = styled.div`
  height: 50px;
  display: flex;
`;

export const Percentage = styled.div`
  box-sizing: border-box;
  height: 34px;
  width: 140px;
  border: 1px solid ${CES_ORANGE};
  border-radius: 16.5px;
  margin-top: 5px;
  margin-left: 24.5px;
  display: flex;
  cursor: pointer;
`;

export const Duratio = styled.div`
  box-sizing: border-box;
  height: 34px;
  width: 114px;
  border: 1px solid ${CES_GREY_BORDER};
  border-radius: 16.5px;
  margin-top: 5px;
  margin-left: 15px;
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
  margin-top: 7px;
  padding-left: 10px;
  font-size: 14px;
  color: ${CES_GREY_BORDER};
`;

export const PercentageInside = styled.div`
  margin-top: 7px;
  padding-left: 10px;
  font-size: 14px;
  color: ${CES_ORANGE};
`;

export const BookingTime = styled.div`
  height: 50px;
  display: flex;
`;

export const Start = styled.div`
  width: 136px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

export const StartSpan = styled.div`
  height: 15px;
  width: 28px;
  font-size: 12px;
  line-height: 15px;
  color: ${CES_GREY_TITLE};
`;

export const StartDate = styled.div`
  display: flex;
  
`;

export const StartDatePicker = styled.input.attrs({type:'text'})`
    height: 18px;
    width: 80px;
    color: black;
    font-family: Muli;
    font-size: 14px;
    line-height: 18px;
    border: none;
`;

export const DateImage = styled.img`
  margin-left: 22px;
`;

export const BottomLineDate = styled.div`
  height: 2px;
  width: 136px;
  transform: scaleY(-1);
  background-color: #D0D0D0;
  margin-top: 3px;
`;

export const End = styled.div`
  width: 136px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

export const EndSpan = styled.div`
  height: 15px;
  width: 28px;
  font-size: 12px;
  line-height: 15px;
  color: ${CES_GREY_TITLE};
`;

export const EndDate = styled.div`
  display: flex;
  
`;

export const EndDatePicker = styled.input.attrs({type:'text'})`
    height: 18px;
    width: 80px;
    color: black;
    font-family: Muli;
    font-size: 14px;
    line-height: 18px;
    border: none;
`;

export const Utilization = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  margin-left: 25px;
`;

export const UtilizationSpan = styled.div`
  height: 15px;
  width: 56px;
  color: #7B7B7B;
  font-family: Muli;
  font-size: 12px;
  line-height: 15px;
`;

export const UtilizationPercent = styled.div`
   height: 18px;
  width: 39px;
  color: Black;
  font-family: Muli;
  font-size: 14px;
  line-height: 18px;
`;

export const TotalTime = styled.div`
    height: 20px;
    margin-left: 25px;
`;

export const TotalTimeSpan = styled.div`
  height: 15px;
  width: 100px;
  color: #7B7B7B;
  font-family: Muli;
  font-size: 12px;
  line-height: 15px;
  margin-top: 10px;
`;

export const Project = styled.div`
  height: 55px;
`;

export const ProjectContain = styled.div`
  height: 100%;
  margin-left: 24.5px;
  margin-right: 18.5px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  border: 1px solid #DEDEDE;
  border-radius: 2px;
  background-color: #FFFFFF;
`;

export const ProjectTopTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectIcon = styled.img`
  height: 10.55px;
  width: 12px;
  margin-left: 15.5px;
  margin-top: 5px;
`;

export const ProjectSpan = styled.div`
  height: 15px;
  width: 45px;
  opacity: 0.6;
  color: #000000;
  font-family: Muli;
  font-size: 12px;
  line-height: 15px;
  margin-left: 10px;
  margin-top: 2px;
`;

export const ProjectBody = styled.div`
  height: 20px;
  display: flex;
  margin-left: 15.5px;
  margin-top: 5px;
`;

export const ProjectColor = styled.div`
  height: 15px;
  width: 3px;
  border-radius: 1px;
  background-color: ${props => props.color || "#F8465C"};

`;

export const ProjectName = styled.div`
  height: 18px;
  width: 135px;
  color: black;
  font-family: Muli;
  font-size: 14px;
  line-height: 18px;
  margin-left: 5px;
`;


export const ProjectDetails = styled.div`
  height: 41px;
  margin-top: 5px;
`;

export const ContainDetails = styled.div`
  height: 100%;
  margin-left: 24.5px;
  margin-right: 18.5px;
  display: flex;
  box-sizing: border-box;

  border: 1px solid #DEDEDE;
  border-radius: 2px;
  background-color: #FFFFFF;
`;

export const DetailsIcon = styled.img`
  margin-left: 15.5px;
`;

export const DetailsSpan = styled.div`
    margin-left: 8px ;
    margin-top: 12px;
    
    height: 15px;
  width: 39px;
  color: #000000;
  font-family: Muli;
  font-size: 12px;
  line-height: 15px;  
`;




export const Resource = styled.div`
  height: 55px;
  margin-top: 5px;
`;

export const ResourceContain = styled.div`
  height: 100%;
  margin-left: 24.5px;
  margin-right: 18.5px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  border: 1px solid #DEDEDE;
  border-radius: 2px;
  background-color: #FFFFFF;
`;

export const ResourceTopTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ResourceIcon = styled.img`
  height: 10.55px;
  width: 12px;
  margin-left: 15.5px;
  margin-top: 5px;
`;

export const ResourceSpan = styled.div`
  height: 15px;
  width: 45px;
  opacity: 0.6;
  color: #000000;
  font-family: Muli;
  font-size: 12px;
  line-height: 15px;
  margin-left: 10px;
  margin-top: 2px;
`;

export const ResourceBody = styled.div`
  height: 20px;
  display: flex;
  margin-left: 15.5px;
  margin-top: 5px;
`;

export const ResourceAvatar = styled.img`
   box-sizing: border-box;
  height: 21px;
  width: 21px;
  border: 1px solid #E3E3E3;
  border-radius: 50%;
`;

export const ResourceName = styled.div`
  height: 18px;
  width: 135px;
  color: black;
  font-family: Muli;
  font-size: 14px;
  line-height: 18px;
  margin-left: 5px;
`;


