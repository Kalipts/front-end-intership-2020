import styled from "styled-components";

const StyledHeader = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${props => props.theme.color.primary};
  height: 50px;
  li {
    float: left;
    font-size: 14px;
    font-weight: bold;
    a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    &:first-child {
      img {
        margin-left: 5px;
        margin-top: -5px;
      }
    }
    &:last-child {
      float: right;
      margin-top: 0;
      img {
        margin-right: 15px;
        margin-top: -5px;
      }
    }
  }
`;

export default StyledHeader;
