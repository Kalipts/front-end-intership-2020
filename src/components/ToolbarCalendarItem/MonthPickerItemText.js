import styled from "styled-components";
const MonthPickerItemText = styled.div`
  position: absolute;
  width:23.22px;
  height: 40px;
  color: ${props => (props.selected ? "#F15927" : "#000")};
  font-family: Muli;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${props => (props.selected ? "#F15927" : "transparent")};
  border-bottom-style: solid;
  border-width: 3px;
  z-index: 0;
`;
export default MonthPickerItemText;
