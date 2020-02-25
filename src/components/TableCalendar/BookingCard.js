import styled from 'styled-components';
const BookingCard = styled.div`
  height: 26px;
  width: ${props => Number(props.length) * 86 + "px"};
  border-radius: 1px;
  background-color: ${props => props.color};
<<<<<<< HEAD
  display: flex;
=======
  display:flex;
>>>>>>> 2cdbc787d54ed7f4e17c3fec34aca8c61d1e7a6d
  align-items:center;
  position:relative;
  margin-top:${props=>props.top*42+"px"};
  border-radius: 1px;
`;
export default BookingCard;
