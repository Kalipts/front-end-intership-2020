import styled from 'styled-components';
const WeekName = styled.th`
  font-size: 12px;
  font-weight: 500;
  border-right: 1px solid #e9e9e9;
  text-align: inherit;
  width: ${props => 86 * 7 + 'px'};
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default WeekName;
