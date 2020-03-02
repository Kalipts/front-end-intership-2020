import styled from 'styled-components';

const StyledProfile = styled.div`
  width: 181px;
  height: ${props => `${props.numberBookingOverlap * 27 + 45}px`};
  border-bottom: 1px solid ${props => props.theme.color.line};
  border-right: 1px solid ${props => props.theme.color.line};
  border-left: 1px solid ${props => props.theme.color.line};

  display: flex;
  align-items: center;
  padding: 0 auto;
  & > div {
    margin-left: 20px;
  }
`;

export default StyledProfile;
