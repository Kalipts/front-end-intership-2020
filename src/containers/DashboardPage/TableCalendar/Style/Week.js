import styled from 'styled-components';
const Week = styled.tr`
  border-bottom: 1px solid #e9e9e9;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width:  ${props =>86 *props.numberOfDay+ 'px'} ;
`;
export default Week;
